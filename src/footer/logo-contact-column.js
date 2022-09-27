import ImageLink from '../components/styles/ImageLink'
import { FooterData } from '../context/Data'
import { FooterColumn } from './footer-column'

const { billylogo, contactlinks, linkedin, facebook } = FooterData

export const LogoContactColumn = () => {
  return (
    <>
      <ImageLink imagelinkdata={billylogo} />
      <FooterColumn links={contactlinks} />
      <div className='footer-so-me-links'>
        <ImageLink imagelinkdata={linkedin} />
        <ImageLink imagelinkdata={facebook} />
      </div>
    </>
  )
}
