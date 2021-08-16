import { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { X } from 'react-feather'
import clsx from 'clsx'
import { CategoriesGroup } from '../entities'
import * as styles from './sidemenu.module.css'

interface SideMenuProps {
  title: string
  copyright: string
  setVisible: (visibility: boolean) => void
  categoriesGroup: CategoriesGroup
}

const SideMenu = ({ title, setVisible, categoriesGroup }: SideMenuProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    document.body.classList.add('scroll-lock')
    return () => {
      document.body.classList.remove('scroll-lock')
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isTabPressed = e.key === 'Tab' || e.keyCode === 9
      const isEscPressed = e.key === 'Escape' || e.keyCode === 27

      if (isEscPressed) setVisible(false)
      if (!isTabPressed) return

      if (e.shiftKey) {
        if (document.activeElement === buttonRef.current) {
          if (linkRef.current) linkRef.current.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === linkRef.current) {
          if (buttonRef.current) buttonRef.current.focus()
          e.preventDefault()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    if (buttonRef.current) buttonRef.current.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div>
      <div
        className={styles.menu}
        aria-modal="true"
        aria-labelledby="sidemenu_title"
      >
        <div className={styles.menuWrapper}>
          <div className={styles.header}>
            <button
              onClick={() => setVisible(false)}
              tabIndex={0}
              ref={buttonRef}
            >
              <X />
            </button>
          </div>
          <div className={styles.title}>
            <img src="/logo.svg" alt={title} />
            <h2 id="sidemenu_title" className="sr-only">
              사이드 메뉴
            </h2>
          </div>
          <h2 className={styles.listTitle}>카테고리</h2>
          <ul className={styles.list}>
            {categoriesGroup.group.map((elem) => (
              <li key={elem.fieldValue}>
                <Link
                  className={styles.listLink}
                  activeClassName={styles.listLinkActive}
                  to={`/categories/${elem.fieldValue}/`}
                  onClick={() => setVisible(false)}
                >
                  {elem.fieldValue}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.about}>
            <a
              className={clsx(styles.listLink)}
              href="https://seungho.dev/about"
              onClick={() => setVisible(false)}
              ref={linkRef}
            >
              About me
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bg} onClick={() => setVisible(false)} />
    </div>
  )
}

export default SideMenu
