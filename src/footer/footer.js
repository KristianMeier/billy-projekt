import { AboutColumnContent } from './about-column-content'
import { BottomLinksSection } from './bottom-links-section'
import { FooterColumn } from './footer-column'
import { FooterSoMeLinks } from './footer-so-me-links'
import { LinksColumnContent } from './links-column-content'
import { LogoContactColumn } from './logo-contact-column'
import { RevisorColumnContent } from './revisor-column-content'
import { SamarbejdeColumnContent } from './samarbejde-column-content'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-contact-columns-container'>
          <div className='footer-logo-contact-column'>
            <LogoContactColumn />
            <FooterSoMeLinks />
          </div>
          <div className='links-columns-container'>
            <FooterColumn title='Om os'>
              <AboutColumnContent />
            </FooterColumn>
            <FooterColumn title='Revisor'>
              <RevisorColumnContent />
            </FooterColumn>
            <FooterColumn title='Samarbejde'>
              <SamarbejdeColumnContent />
            </FooterColumn>
            <FooterColumn title='Links'>
              <LinksColumnContent />
            </FooterColumn>
          </div>
        </div>
        <BottomLinksSection />
      </div>
    </div>
  )
}
