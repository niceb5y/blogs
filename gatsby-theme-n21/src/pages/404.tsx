import { Link } from 'gatsby'
import * as styles from './404.module.css'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PageNotFound = () => (
  <Layout>
    <SEO title="페이지를 찾을 수 없습니다." />
    <div className={styles.root}>
      <h1>
        <span role="img" aria-label="Not Found">
          🤔
        </span>
      </h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/">메인으로 가기</Link>
    </div>
  </Layout>
)

export default PageNotFound
