import Header from './header'
import Footer from './footer'
import * as styles from './layout.module.css'

interface LayoutProps {
  siteTitleInParagraph?: boolean
  children?: React.ReactNode
}

const Layout = ({ children, siteTitleInParagraph = false }: LayoutProps) => (
  <div className={styles.root}>
    <Header siteTitleInParagraph={siteTitleInParagraph} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
