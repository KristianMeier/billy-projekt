import React from 'react'
import { Image } from './Image'

const ImageLink = ({ imagelinkdata }) => {
  const { link, classname, alt, src } = imagelinkdata
  return (
    <a href={link}>
      <Image classname={classname} alt={alt} src={src} />
    </a>
  )
}

export default ImageLink
