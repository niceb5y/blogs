import { Link } from 'gatsby'
import { ChevronLeft, ChevronRight } from 'react-feather'
import * as styles from './postlist.module.css'
import { Edge } from '../entities'

const PostList = ({
  list,
  pageCurrent,
  pageTotal,
  pagePrefix,
  title,
}: {
  list: Array<Edge>
  pageCurrent: number
  pageTotal: number
  pagePrefix: string
  title: string
}) => (
  <div>
    <h2 className={styles.pageTitle}>{title}</h2>
    {list.map(({ node }) => (
      <div className={styles.card} key={node.frontmatter.url}>
        <h3 className={styles.title}>
          <Link to={node.frontmatter.url}>
            {node.frontmatter.title || node.frontmatter.url}
          </Link>
        </h3>
        <p>
          <Link
            className={styles.category}
            to={`/categories/${node.frontmatter.categories}/`}
          >
            {node.frontmatter.categories}
          </Link>
          <span className={styles.date}>{node.frontmatter.date}</span>
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description,
          }}
        />
      </div>
    ))}
    {pageTotal > 1 && (
      <div className={styles.pagination}>
        <Link
          activeClassName={styles.disabled}
          to={
            pageCurrent > 2
              ? `${pagePrefix}/page${pageCurrent - 1}`
              : `${pagePrefix}/`
          }
          aria-disabled={pageCurrent === 1}
        >
          <ChevronLeft className={styles.icon} aria-label="이전" />
        </Link>
        <span>
          {pageCurrent} / {pageTotal}
        </span>
        <Link
          activeClassName={styles.disabled}
          to={
            pageCurrent < pageTotal
              ? `${pagePrefix}/page${pageCurrent + 1}`
              : `${pagePrefix}/page${pageTotal}`
          }
          aria-disabled={pageCurrent === pageTotal}
        >
          <ChevronRight className={styles.icon} aria-label="다음" />
        </Link>
      </div>
    )}
  </div>
)

export default PostList
