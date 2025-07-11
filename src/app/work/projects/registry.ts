import { metadata as liverpoolMetadata } from './liverpool-river-of-light-2024/metadata'
import { metadata as blenheimMetadata } from './blenheim-palace-international-horse-trials-2024/metadata'
import { metadata as gameFairMetadata } from './the-game-fair-2024/metadata'
import { metadata as balloonFiestaMetadata } from './bristol-international-balloon-fiesta-2024/metadata'
import { metadata as shootingShowMetadata } from './national-shooting-show-2024/metadata'
import { metadata as scottishGameFairMetadata } from './the-scottish-game-fair-2024/metadata'
import { ProjectMetadata } from './types'

export const projects: ProjectMetadata[] = [
  liverpoolMetadata,
  blenheimMetadata,
  gameFairMetadata,
  balloonFiestaMetadata,
  shootingShowMetadata,
  scottishGameFairMetadata,
  // Add other projects here as they are created
] as const

export type Project = typeof projects[number] 