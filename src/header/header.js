import Button from '../components/styles/Button'
import ImageLink from '../components/styles/ImageLink'
import { FooterData, HeaderData, HeaderDataTwo } from '../context/Data'
import { NavbarLinks } from './navbar-links'

const { billylogo } = FooterData

export const Header = () => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-centering-wrapper'>
        <div className='navbar-content'>
          <div className='navbar-outer-part'>
            <ImageLink imagelinkdata={billylogo} />
          </div>
          <div className='navbar-central-part'>
            <div className='navbar-icon-links-container'>
              <div className='navbar-links'>
                <NavbarLinks data={HeaderData} />
              </div>
            </div>
            <div className='navbar-signup-login-container'>
              <NavbarLinks data={HeaderDataTwo} />
            </div>
          </div>
          <div className='navbar-outer-part right'>
            <Button classname='ds-button' title='Opret gratis bruger' />
          </div>
        </div>
      </div>
    </nav>
  )
}
