import React from 'react'

const FooterLink = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { title, id, classname } = item
        return (
          <p key={id} className={classname}>
            <a href='/'>{title}</a>
          </p>
        )
      })}
    </>
  )
}

export default FooterLink
