import react from 'react'
import styles from './cssModuleStyling.module.css'

const CssModuleStyling = ()=>{
  return(
    <div>
      <h2 className={styles.success}>Module Styling</h2>
      <a href="https://jsonplaceholder.typicode.com/posts/1" target='_blank'>link</a>
    </div>
  )
}

export default CssModuleStyling