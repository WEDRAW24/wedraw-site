// SVGs
import WE_SVG_white from '../assets/svg/WE_SVG_white.svg'

// Hero Image
import heroLeft from '../../../public/studio/hero-left.jpg'
import headshot from '../../../public/studio/headshot-theo.jpg'

// Value Icons
import eyeIcon from '../../../public/studio/icons/Eye.svg'
import heartIcon from '../../../public/studio/icons/Heart.svg'
import targetIcon from '../../../public/studio/icons/Target.svg'
import adaptableIcon from '../../../public/studio/icons/Adaptable.svg'
import collaborationIcon from '../../../public/studio/icons/Collaboration.svg'
import lightbulbIcon from '../../../public/studio/icons/Lightbulb.svg'

export const images = {
  WE_SVG: WE_SVG_white,
  heroLeft,
  headshot,
  icons: {
    eye: eyeIcon,
    heart: heartIcon,
    target: targetIcon,
    adaptable: adaptableIcon,
    collaboration: collaborationIcon,
    lightbulb: lightbulbIcon
  }
} as const