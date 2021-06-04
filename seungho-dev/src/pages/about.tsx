import Layout from '../components/layout'
import SEO from '../components/seo'
import * as styles from './about.module.scss'

const About = () => (
  <Layout>
    <SEO title="About" description="Seungho Kim - Software Developer" />
    <div className={styles.cardBlock}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <img src="/profile.jpg" />
          <h1>Seungho Kim</h1>
          <div>
            <p className="lead">Software Developer</p>
            <a href="http://github.com/niceb5y" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
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
