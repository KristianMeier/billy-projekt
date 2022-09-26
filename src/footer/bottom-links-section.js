import FooterLink from '../components/FooterLink'
import { FooterData } from '../context/FooterData'

const {
  buttomlinks: { left: left, right: right },
} = FooterData

export const BottomLinksSection = () => (
  <div className='footer-bottom-section'>
    <div className='footer-bottom-links'>
      <FooterLink data={left} />
    </div>
    <FooterLink data={right} />
  </div>
)
