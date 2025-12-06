'use client'

import { useState, useMemo, useEffect } from 'react'
import { projects } from './projects/registry'
import { ProjectMetadata } from './projects/types'
import WorkProjectCard from '@/app/components/WorkProjectCard'
import WorkCategoryFilter from '@/app/components/WorkCategoryFilter'
import CTA from '@/app/components/CTA'
import BackgroundGrid from '@/app/components/BackgroundGrid'

// Calculate collapsed layout for filtered projects
function calculateCollapsedLayout(filteredProjects: ProjectMetadata[], showAll: boolean) {
  if (showAll) {
    // Return original positions when showing all
    return filteredProjects.map(project => ({
      ...project,
      displayRow: project.gridRow,
      displayColumn: project.gridColumn
    }))
  }

  // Group projects by their original row, then sort by column within each row
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.gridRow !== b.gridRow) return a.gridRow - b.gridRow
    return a.gridColumn - b.gridColumn
  })

  // Calculate new positions - vertical collapse
  const positioned = []
  let currentRow = 4 // Start at row 4 (same as original first row)
  
  for (let i = 0; i < sortedProjects.length; i++) {
    const project = sortedProjects[i]
    const prevProject = sortedProjects[i - 1]
    
    // Check if this project was on a new row in the original layout
    if (i === 0 || project.gridRow !== prevProject.gridRow) {
      // If not the first project, move to next available row (with 2 row gap)
      if (i > 0) {
        const prevBottom = positioned[positioned.length - 1].displayRow + positioned[positioned.length - 1].gridHeight
        currentRow = prevBottom + 2 // 2 row gap between different original rows
      }
    }
    
    positioned.push({
      ...project,
      displayRow: currentRow,
      displayColumn: project.gridColumn
    })
  }
  
  return positioned
}

export default function WorkPage() {
  const DEBUG = false // Debug mode - set to false to hide borders
  const [selectedCategories, setSelectedCategories] = useState<('all' | 'festivals' | 'exhibitions' | 'sports' | 'cultural')[]>(['all'])
  const [cellSize, setCellSize] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  
  // Calculate dynamic cell size based on actual container width
  useEffect(() => {
    const updateCellSize = () => {
      const container = document.querySelector('.work-grid-container')
      if (!container) return
      
      const containerWidth = container.clientWidth
      const calculatedCellSize = containerWidth / 12 // 12 columns
      
      setCellSize(calculatedCellSize)
      
      // Check viewport size
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    updateCellSize()
    window.addEventListener('resize', updateCellSize)
    return () => window.removeEventListener('resize', updateCellSize)
  }, [])
  
  // Filter projects based on selected categories
  const filteredProjects = projects.filter(project => 
    selectedCategories.includes('all') || selectedCategories.includes(project.category)
  )
  
  // Calculate positioned projects with collapsed layout
  const showAll = selectedCategories.includes('all')
  const positionedProjects = useMemo(
    () => calculateCollapsedLayout(filteredProjects, showAll),
    [filteredProjects, showAll]
  )
  
  // Calculate the minimum height needed for all cards
  // Find the bottom-most card (row + height) from positioned projects
  const maxRow = positionedProjects.length > 0 
    ? Math.max(...positionedProjects.map(p => p.displayRow + p.gridHeight))
    : 20 // Default minimum height
  
  // No buffer rows - grid ends at last card
  const totalRows = maxRow
  
  // Use dynamic cellSize if available, otherwise use default 120px for initial render
  const activeCellSize = cellSize || 120
  
  return (
    <div className={`min-h-screen ${DEBUG ? 'border-8 border-purple-500' : ''}`}>
      <div className={`container mx-auto px-fluid-md max-w-[1440px] ${DEBUG ? 'border-8 border-blue-500' : ''}`}>
        <div className={`pt-fluid-xl mb-fluid-lg md:mb-fluid-2xl lg:mb-fluid-xl lg:pt-[60px] lg:pl-5 ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
          <h1 className="display-xl font-area-extrabold text-marker">
            What we've<br />
            been up to...
          </h1>
        </div>
        
        {/* Mobile Layout - Simple Stack (< 768px) */}
        <div className={`md:hidden flex flex-col gap-fluid-2xl mb-fluid-2xl ${DEBUG ? 'border-4 border-green-500' : ''}`}>
          {/* Category Filter - Mobile */}
          <div className="mb-fluid-xl">
            <WorkCategoryFilter
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          </div>
          
          {filteredProjects.map((project) => (
            <WorkProjectCard 
              key={project.slug} 
              project={project}
              displayRow={project.gridRow}
              displayColumn={project.gridColumn}
              isMobile={true}
            />
          ))}
        </div>
        
        {/* Tablet Layout - Single Column (768px - 1024px) */}
        <div className={`hidden md:block lg:hidden mb-fluid-2xl ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
          {/* Category Filter - Tablet */}
          <div className="mb-fluid-2xl">
            <WorkCategoryFilter
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              isTablet={true}
            />
          </div>
          
          <div className="flex flex-col gap-fluid-2xl">
            {filteredProjects.map((project) => (
              <WorkProjectCard 
                key={project.slug} 
                project={project}
                displayRow={project.gridRow}
                displayColumn={project.gridColumn}
                isTablet={true}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Layout - Grid System (≥ 1024px) */}
        <div className={`hidden lg:block ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
          <div className={`relative work-grid-container transition-all duration-700 ease-in-out overflow-visible ${DEBUG ? 'border-4 border-red-500' : ''}`} style={{ height: `${totalRows * activeCellSize}px`, marginTop: 'calc(-240px + 336px)', paddingTop: '240px' }}>
            <BackgroundGrid maxRows={totalRows} offsetRows={0} />
            
            {/* Category Filter */}
            <WorkCategoryFilter
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              cellSize={activeCellSize}
            />
            
            {positionedProjects.map((project) => (
              <WorkProjectCard 
                key={project.slug} 
                project={project}
                displayRow={project.displayRow - 2}
                displayColumn={project.displayColumn}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className={`bg-white ${DEBUG ? 'border-8 border-pink-500' : ''}`}>
        <CTA 
          magnetType="lines"
          magnetColor="var(--color-marker)"
          title="Let's get Started"
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
          debug={false}
        />
      </section>
    </div>
  )
}
