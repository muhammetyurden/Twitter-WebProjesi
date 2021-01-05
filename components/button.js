import React from 'react'

//butonların üzerinde iken pointer olma
import cn from 'classnames'

import styles from './button.module.css'

function Button({ children, className, ...props }) {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
