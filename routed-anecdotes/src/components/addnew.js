import { useNavigate } from "react-router-dom"
import { useField } from "../hooks" 


const CreateNew = ({addNew, notification, setNotification}) => {
    const { reset: resetContent, ...content } = useField('content')
    const { reset: resetAuthor, ...author } = useField('author')
    const { reset: resetInfo, ...info} = useField('info')
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
      setNotification(`A new anecdote ${content.value} was added`)
      setTimeout(() => {
        setNotification('')
      }, 5000)
      navigate('/')
    }

    const handleReset = (event) => {
        resetContent()
        resetInfo()
        resetAuthor()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content} />
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...info} />
          </div>
          <button>create</button>
        </form>
        <button onClick={handleReset}>reset</button>
      </div>
    )
  
  }
  


  export default CreateNew