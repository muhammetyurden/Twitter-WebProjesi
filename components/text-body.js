import React from 'react'
import cn from 'classnames'

import styles from './text-body.module.css'

function TextBody({ bold = false, className, children, ...props }) {
  //dışardan class gelebilir
  return (
    <span
      className={cn([styles.body, bold && styles.bold, className])}
      {...props}
    >
      {children}
    </span>
  )
}
export default TextBody
