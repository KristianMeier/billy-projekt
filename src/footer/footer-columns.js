import React from 'react'
import { FooterDataColumns } from '../context/FooterData'
import { FooterColumn } from './footer-column'

const FooterColums = () => {
  return (
    <>
      {FooterDataColumns.map((item) => {
        const { title, links } = item
        return <FooterColumn key={title} links={links} title={title} />
      })}
    </>
  )
}

export default FooterColums
