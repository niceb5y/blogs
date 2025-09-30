import { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { X } from 'react-feather'
import clsx from 'clsx'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { CategoriesGroup } from '../entities'
import * as styles from './sidemenu.module.css'

interface SideMenuProps {
  title: string
  copyright: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  categoriesGroup: CategoriesGroup
}

const SideMenu = ({
  title,
  isOpen,
  setIsOpen,
  categoriesGroup,
}: SideMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-lock')
    } else {
      document.body.classList.remove('scroll-lock')
    }
  }, [isOpen])

  const firstLinkRef = useRef(null)

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      initialFocus={firstLinkRef}
    >
      <DialogBackdrop className={styles.bg} />
      <DialogPanel className={styles.menu}>
        <div className={styles.menuWrapper}>
          <div className={styles.header}>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="닫기"
              aria-hidden="true"
              className={styles.btnClose}
            >
              <X />
            </button>
          </div>
          <div className={styles.title}>
            <img src="/logo.svg" alt={title} />
            <DialogTitle className="sr-only">사이드 메뉴</DialogTitle>
          </div>
          <h2 className={styles.listTitle}>카테고리</h2>
          <ul className={styles.list} aria-label="카테고리">
            {categoriesGroup.group.map((elem, idx) => (
              <li key={elem.fieldValue}>
                <Link
                  className={styles.listLink}
                  activeClassName={styles.listLinkActive}
                  to={`/categories/${elem.fieldValue}/`}
                  onClick={() => setIsOpen(false)}
                  ref={idx === 0 ? firstLinkRef : undefined}
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
              onClick={() => setIsOpen(false)}
            >
              About me
            </a>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  )
}

export default SideMenu
