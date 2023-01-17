import Header from './header'
import Footer from './footer'
import * as styles from './layout.module.css'

interface LayoutProps {
  siteTitleInParagraph?: boolean
}

const Layout = ({
  children,
  siteTitleInParagraph = false,
}: React.PropsWithChildren<LayoutProps>) => (
  <div className={styles.root}>
    <Header siteTitleInParagraph={siteTitleInParagraph} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
