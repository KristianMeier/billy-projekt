import React from 'react'

const Hero = () => {
  return (
    <div className='lp-component full-width '>
      <div className='lp-component-container container'>
        <div className='lp-blue-rectangle-hero'>
          <div className='hero-centering-container'>
            <div className='hero-content'>
              <p className='title-small-font'>
                Regnskabsprogrammet selvstændige anbefaler
              </p>
              <p>
                Billy er skræddersyet til selvstændige samt små og mellemstore
                virksomheder. Send professionelle fakturaer, bogfør regninger og
                afregn moms med få klik.
              </p>

              <button className='blue-rectangle-hero-button'>
                Få en gratis konto nu
              </button>

              <SignupForm
                buttonLabel={buttonText || 'Få en gratis konto nu'}
                signupCampaign={openFormSignupCampaign}
                signupCouponId={openFormSignupCouponId}
                trialDays={openFormTrialDays}
                buttonVariant='secondary'
                buttonInverted
                isDarkTheme
              />

              <button className='blue-rectangle-hero-button'>
                Få en gratis konto nu
              </button>

              <TrustBox theme='dark' />
            </div>
            <div className='cover-image-positioner'>
              <div className='cover-image-container'>
                <img
                  className='dashboard-pic'
                  src='/assets/dashboard-2.svg'
                  alt='dashboardpic'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
