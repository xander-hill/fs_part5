import { useState } from "react"

const Blog = ({ blog, likeBlog, removeBlog, loggedIn }) => {
  const [details, setDetails] = useState(false)
  const isCreator = blog.user.name === loggedIn.name

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const changeDetails = () => {
    setDetails(!details)
  }


  if (details === false) {
    return (
      <div style={blogStyle}>
        {blog.title} {blog.author}
        <button onClick={changeDetails}>view</button>
      </div>  
  )}

  return (
    <div style={blogStyle}>
        <div>
        {blog.title} {blog.author}
        <button onClick={changeDetails}>hide</button>
        </div>
        <div>{blog.url}</div>
        <div>likes: {blog.likes}
          <button type="submit" onClick={likeBlog}>like</button>
        </div>
        <div>{blog.user.name}</div>
        {isCreator && (<button type="submit" onClick={removeBlog}>remove</button>)}
      </div>  
  )
}

export default Blog