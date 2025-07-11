// Main shots
import bikes2 from './assets/ROL-bikes-2.jpg'
import waterfront from './assets/ROL-waterfront.jpg'
import tulips from './assets/ROL-tulips.jpg'
import bikes1 from './assets/ROL-bikes.jpg'

// Drone shots
import droneWaterfront from './assets/Drone-waterfront-11.jpg'
import droneWaterfront2 from './assets/Copy-of-Drone-waterfront-3.jpg'
import droneRangoli from './assets/Drone-rangoli-2.jpg'
import dronePositiveSpin from './assets/Drone-Positive-spin-2(1).jpg'
import droneFirefly from './assets/Drone-firefly-2.jpg'
import droneChess from './assets/Drone-chess-2.jpg'
import droneBubbles1 from './assets/Drone-bubbles-9.jpg'
import droneBubbles2 from './assets/Drone-bubbles-6.jpg'
import droneBubbles3 from './assets/Drone-bubbles.jpg'

// Event shots
import rol1 from './assets/RoL---01-11.jpg'
import rol2 from './assets/RoL---01-11-86.jpg'
import rol3 from './assets/RoL---01-11-112.jpg'
import rolCopy from './assets/Copy-of-RoL.jpg'

// Camera shots
import shot1 from './assets/DSC08165.jpg'
import shot2 from './assets/DSC08231-Enhanced-NR.jpg'
import shot3 from './assets/DSC08310.jpg'
import shot4 from './assets/DSC08322-Enhanced-NR.jpg'
import shot5 from './assets/DSC08631-Enhanced-NR.jpg'
import shot6 from './assets/DSC08672-Enhanced-NR.jpg'
import shot7 from './assets/DSC08785-Enhanced-NR.jpg'

export const images = {
  hero: bikes2,
  gallery: {
    // Main shots
    waterfront,
    tulips,
    bikes1,
    
    // Drone shots
    droneWaterfront,
    droneWaterfront2,
    droneRangoli,
    dronePositiveSpin,
    droneFirefly,
    droneChess,
    droneBubbles1,
    droneBubbles2,
    droneBubbles3,
    
    // Event shots
    rol1,
    rol2,
    rol3,
    rolCopy,
    
    // Camera shots
    shot1,
    shot2,
    shot3,
    shot4,
    shot5,
    shot6,
    shot7
  }
} as const

// Type for strongly typed image keys
export type ProjectImageKey = keyof typeof images.gallery 