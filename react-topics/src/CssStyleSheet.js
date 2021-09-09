import React from 'react'
import './cssStyleSheet.css'

const CssStyleSheet =({primary})=>{
  const className = primary ?'primary':''
  return(
    <>
      <h2 className={`${className} fontSize`}>Syed Abdul Rahman</h2>
    </>
  )
}

export default CssStyleSheet;