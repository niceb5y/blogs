import { Link } from 'gatsby'
import ThemeHeader from 'gatsby-theme-n21/src/components/header'

const Header = () => (
  <ThemeHeader>
    <li>
      <Link to="/about" className="nav-About" activeClassName="active">
        About
      </Link>
    </li>
  </ThemeHeader>
)

export default Header
