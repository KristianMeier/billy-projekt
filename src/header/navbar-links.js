import { NavbarLink } from './navbar-link'

export const NavbarLinks = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { title, link } = item
        return <NavbarLink key={title} title={title} link={link} />
      })}
    </>
  )
}
