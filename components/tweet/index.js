import React from 'react'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import Photo from '../photo'
import IconButton from '../button/icon'
import * as Icon from '../icons'

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/*avatar*/}
      <div className={styles.avatar}>
        <Photo />
      </div>
      {/*body*/}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{' '}
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            {/* REPLY */}
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            <span>5</span>
          </div>

          {/* REETWEET */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>20</span>
          </div>

          {/* LİKE */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
          </div>

          {/* SHARE */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}
export default Tweet
