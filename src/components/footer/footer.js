import { BottomLinksSection } from './bottom-links-section'
import FooterColums from './footer-columns'
import { LogoContactColumn } from './logo-contact-column'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-contact-columns-container'>
          <div className='footer-logo-contact-column'>
            <LogoContactColumn />
          </div>
          <div className='links-columns-container'>
            <FooterColums />
          </div>
        </div>
        <BottomLinksSection />
      </div>
    </div>
  )
}
