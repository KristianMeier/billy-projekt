import { NavbarLink } from './navbar-link'

export const NavbarLinks = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { title, link } = item
        return <NavbarLink title={title} link={link} />
      })}
    </>
  )
}
