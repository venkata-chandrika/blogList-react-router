// Write your JS code here

import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(eachList => (
        <BlogItem key={eachList.id} blogDetails={eachList} />
      ))}
    </ul>
  )
}

export default BlogList
