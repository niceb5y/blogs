import { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Menu } from 'react-feather'
import * as styles from './header.module.css'
import { Site, CategoriesGroup } from '../entities'
import SideMenu from './sidemenu'

interface HeaderProps {
  siteTitleInParagraph: boolean
}

const Header = ({ siteTitleInParagraph }: HeaderProps) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const data: {
    site: Site
    categoriesGroup: CategoriesGroup
  } = useStaticQuery(graphql`
    query headerQuery {
      categoriesGroup: allMarkdownRemark(limit: 1000) {
        group(field: { frontmatter: { categories: SELECT } }) {
          fieldValue
        }
      }
      site {
        siteMetadata {
          title
          copyright
        }
      }
    }
  `)

  const { title, copyright } = data.site.siteMetadata

  return (
    <nav className={styles.root}>
      <button
        onClick={() => setIsSideMenuOpen(true)}
        aria-label="사이드 메뉴 열기"
      >
        <Menu />
      </button>
      <div className={styles.brand}>
        <Link to="/" className={styles.brandLink}>
          {siteTitleInParagraph ? (
            <p className="sr-only">{title}</p>
          ) : (
            <h1 className="sr-only">{title}</h1>
          )}
          <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
      <SideMenu
        title={title}
        copyright={copyright}
        categoriesGroup={data.categoriesGroup}
        isOpen={isSideMenuOpen}
        setIsOpen={setIsSideMenuOpen}
      />
    </nav>
  )
}

export default Header
