import { useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'

const URL = 'http://localhost:3000/api/gpt'

function Form() {
  const [file, setFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState<string>('')
  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if (file && prompt) {
      const formData = new FormData()
      formData.append('resume', file)
      formData.append('prompt', prompt)

      try {
        const { data } = await axios.post(URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        setResponse(data.response)
      } catch (error) {
        console.error(error)
        setResponse('Failed to submit form')
      }
    } else {
      setResponse('Please fill in all fields')
    }
    setLoading(false)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}>
        <h2 style={{ marginBottom: '20px' }}>Upload your resume</h2>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          style={{ marginBottom: '20px' }}
        />
        <label htmlFor="prompt" style={{ marginBottom: '10px' }}>
          Enter your prompt:
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{
            marginBottom: '20px',
            padding: '10px',
            width: '100%',
            height: '100px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
          Submit
        </button>
        {loading && <CircularProgress style={{ marginTop: '20px' }} />}
        <p style={{ marginTop: '20px' }}>{response}</p>
      </form>
    </>
  )
}

export default Form
