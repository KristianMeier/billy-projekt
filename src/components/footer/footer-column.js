import FooterLink from '../FooterLink'

export const FooterColumn = ({ links, title }) => {
  return (
    <div className='footer-links-column'>
      <>
        {title && <h5 className='column-header'>{title}</h5>}
        <FooterLink data={links} />
      </>
    </div>
  )
}
