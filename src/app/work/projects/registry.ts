import { metadata as liverpoolMetadata } from './liverpool-river-of-light-2024/metadata'
import { metadata as blenheimMetadata } from './blenheim-palace-international-horse-trials-2024/metadata'
import { metadata as gameFairMetadata } from './the-game-fair-2024/metadata'
import { metadata as balloonFiestaMetadata } from './bristol-international-balloon-fiesta-2024/metadata'
import { metadata as stonehengeMetadata } from './stonehenge-solstice-2025/metadata'
import { ProjectMetadata } from './types'

export const projects: ProjectMetadata[] = [
  liverpoolMetadata,
  blenheimMetadata,
  gameFairMetadata,
  balloonFiestaMetadata,
  stonehengeMetadata,
] as const

export type Project = typeof projects[number] 