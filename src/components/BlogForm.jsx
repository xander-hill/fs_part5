import { useState } from 'react'

const NoteForm = ({ createBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: title,
            author: author,
            url: url,
        })

        setTitle('')
        setAuthor('')
        setUrl('')
    }

    const handleTitleChange = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value)
    }
    
    const handleAuthorChange = (event) => {
        console.log(event.target.value)
        setAuthor(event.target.value)
    }
    
    const handleUrlChange = (event) => {
        console.log(event.target.value)
        setUrl(event.target.value)
    }

    return (
      <div>
        <h2>create new blog</h2>
        <form onSubmit={addBlog}>
          <p>
          title:
          <input value={title} onChange={handleTitleChange}/>
          </p>
          <p>
          author:
          <input value={author} onChange={handleAuthorChange}/>
          </p>
          <p>
          url:
          <input value={url} onChange={handleUrlChange}/>
          </p>
          <button type = "submit">create</button>
        </form>
      </div>
    )
}

export default NoteForm