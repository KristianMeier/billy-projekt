export const NavbarLink = ({ title, link }) => {
  return (
    <p className='navbar-single-link icon-text-link'>
      <a href={link}> {title} </a>
    </p>
  )
}
