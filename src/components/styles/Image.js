import React from 'react'

export const Image = ({ classname, src, alt }) => {
  return <img className={classname} src={src} alt={alt} />
}
