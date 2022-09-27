import React from 'react'

const FooterLink = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { title, id, classname, link } = item
        return (
          <p key={id} className={classname}>
            <a href={link}>{title}</a>
          </p>
        )
      })}
    </>
  )
}

export default FooterLink
