export const FooterColumn = ({ title, children }) => (
  <div className='footer-links-column'>
    <>
      <h5 className='column-header'>{title}</h5>
      {children}
    </>
  </div>
)
