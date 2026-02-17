'use client'

import Image from 'next/image'

// Client logos
import LogoBristol from '../../assets/logos_client/Logo_bristol_balloon_fiesta.svg'
import LogoEnglishHeritage from '../../assets/logos_client/Logo_english_heritage.svg'
import LogoFarmFest from '../../assets/logos_client/Logo_farm_fest.svg'
import LogoFEI from '../../assets/logos_client/Logo_fei_european_champs.svg'
import LogoHPowerGroup from '../../assets/logos_client/Logo_h_power_group.svg'
import LogoREM from '../../assets/logos_client/Logo_rem.svg'
import LogoRiverOfLight from '../../assets/logos_client/Logo_river_of_light.svg'
import LogoGameFair from '../../assets/logos_client/Logo_the_game_fair.svg'

export default function ProvenInTheFieldSection() {
  // Debug mode - set to false to hide all container borders
  const DEBUG = false;

  const clientLogos = [
    { logo: LogoREM, alt: 'Richmond Event Management', width: 90 },
    { logo: LogoRiverOfLight, alt: 'River of Light', width: 100 },
    { logo: LogoHPowerGroup, alt: 'H Power Group', width: 190 },
    { logo: LogoBristol, alt: 'Bristol Balloon Fiesta', width: 120 },
    { logo: LogoFarmFest, alt: 'Farm Fest', width: 140 },
    { logo: LogoGameFair, alt: 'The Game Fair', width: 130 },
    { logo: LogoFEI, alt: 'FEI European Championships', width: 130 },
    { logo: LogoEnglishHeritage, alt: 'English Heritage', width: 160 },
  ]

  return (
    <section className={`relative w-full bg-blueprint h-auto lg:h-[400px] overflow-hidden flex items-center my-fluid-3xl md:my-[100px] ${DEBUG ? 'border-4 border-purple-500' : ''}`}>
      {/* White Dots Pattern Overlay - Different scaling for mobile */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full">
          {/* Mobile pattern */}
          <div className="md:hidden w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1.25px, transparent 1.25px)',
            backgroundSize: '20px 20px',
            backgroundPosition: 'center'
          }} />
          {/* Desktop pattern */}
          <div className="hidden md:block w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1.75px, transparent 1.75px)',
            backgroundSize: '30px 30px',
            backgroundPosition: 'center'
          }} />
        </div>
      </div>

      {/* Content Container - More padding on mobile */}
      <div className={`relative w-full max-w-[1680px] mx-auto px-fluid-lg md:px-6 lg:px-[60px] py-fluid-2xl lg:py-0 flex flex-col lg:flex-row gap-fluid-xl md:gap-12 items-center ${DEBUG ? 'border-4 border-blue-500' : ''}`}>
        {/* Left Side - Text Content */}
        <div className={`lg:w-1/2 text-white ${DEBUG ? 'border-4 border-yellow-500' : ''}`}>
          <h2 className="section-heading mb-6 whitespace-nowrap text-white">
            Proven in the field
          </h2>
          <p className="body-lg text-white">
            We collaborate with the teams behind major festivals, cultural events and large-scale activations, delivering clarity where it matters most.
          </p>
        </div>

        {/* Right Side - Logo Grid (8 equal containers) */}
        <div className={`lg:w-1/2 ${DEBUG ? 'border-4 border-orange-500' : ''}`}>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center ${DEBUG ? 'border-4 border-cyan-500' : ''}`}>
            {/* Client Logos */}
            {clientLogos.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center w-full h-[120px] max-w-[160px] ${DEBUG ? 'border-2 border-pink-500' : ''}`}
              >
                {item.logo ? (
                  <Image 
                    src={item.logo}
                    alt={item.alt}
                    width={item.width}
                    height={item.width}
                    className="object-contain w-full h-full"
                    style={{ maxWidth: `${item.width}px`, maxHeight: `${item.width}px` }}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
