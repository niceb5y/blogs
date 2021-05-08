import Layout from '../components/layout'
import SEO from '../components/seo'
import * as styles from './about.module.scss'

const About = () => (
  <Layout>
    <SEO title="About" description="Seungho Kim - Software Developer" />
    <div className={styles.block}>
      <h1>Seungho Kim</h1>
      <p className="lead">Software Developer</p>
    </div>

    <div className={styles.block}>
      <h1>Education</h1>
      <ul>
        <li>
          <a href="http://ssu.ac.kr/">Soongsil University</a>
          <ul>
            <li>
              B.S. in{' '}
              <a href="http://cse.ssu.ac.kr/">
                Computer Science and Engineering
              </a>{' '}
              (2014.03 ~ 2021.02)
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div className={styles.block}>
      <h1>Work Experience</h1>
      <ul>
        <li>
          <a href="https://www.kakaocorp.com/">Kakao Corp.</a>
          <ul>
            <li>Front-End Web Developer Intern (2019.12 ~ 2020.02)</li>
            <li>Front-End Web Developer (2020.07 ~ Present)</li>
          </ul>
        </li>
      </ul>
    </div>

    <div className={styles.block}>
      <h1>Certificates</h1>
      <ul>
        <li>
          <a href="https://www.topcit.or.kr/">TOPCIT</a> Level 3
          <ul>
            <li>523/1000 (2019.10)</li>
          </ul>
        </li>
        <li>
          <a href="https://www.ets.org/toeic">TOEIC</a> 890
          <ul>
            <li>LC 445 | RC 445 | Total 890 (2020.05)</li>
          </ul>
        </li>
      </ul>
    </div>

    <div className={styles.block}>
      <h1>Contact me</h1>
      <a
        href="mailto:niceb5y+shdev@gmail.com"
        className={styles.button}
        role="button"
      >
        via email
      </a>
      <a
        href="https://twitter.com/niceb5y"
        className={styles.button}
        role="button"
      >
        via twitter
      </a>
    </div>

    <div className={styles.block}>
      <h1>See Also</h1>
      <a href="https://niceb5y.net/" className={styles.button} role="button">
        niceb5y.net
      </a>
    </div>

    <div className={styles.block}>
      <h1>External Link</h1>
      <a href="https://ln.shk.im/blog" className={styles.button} role="button">
        blog.niceb5y.net
      </a>
      <a
        href="https://ln.shk.im/github"
        className={styles.button}
        role="button"
      >
        Github
      </a>
      <a href="https://ln.shk.im/boj" className={styles.button} role="button">
        BOJ
      </a>
    </div>
  </Layout>
)

export default About
