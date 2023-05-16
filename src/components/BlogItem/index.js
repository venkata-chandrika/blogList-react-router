// import {bold} from 'colorette'
import './index.css'

// Write your JS code here
const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="list-container">
      <div className="container">
        <h1 className="username">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
