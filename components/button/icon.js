import React from 'react'

//butonların üzerinde iken pointer olma
import cn from 'classnames'

import styles from './style.module.css'
import Button from './button'

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  )
}

export default IconButton
