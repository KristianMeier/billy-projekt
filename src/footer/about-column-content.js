import FooterLink from '../components/FooterLink'
import { FooterData } from '../context/FooterData'

const { aboutlinks } = FooterData

export const AboutColumnContent = () => (
  <div className='links-column-content'>
    <FooterLink data={aboutlinks} />
  </div>
)
