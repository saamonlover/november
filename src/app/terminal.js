import React, { useState } from 'react'

const Terminal = () => {
  const [input, setInput] = useState('> ')
  const [output, setOutput] = useState([])

  const commands = {
    about: 'Your name. Your description.',
    skills: 'Your skills.',
    projects: 'Your projects.',
    contact: 'Your contact information.',
  }

  const handleInput = (e) => {
    if (e.target.value.slice(0, 2) !== '> ') {
      setInput('> ' + e.target.value)
    } else {
      setInput(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const command = input.slice(2).trim().toLowerCase()
    if (commands[command]) {
      setOutput([...output, input, commands[command]])
    } else {
      setOutput([...output, input, 'Unknown command: ' + command])
    }
    setInput('> ')
  }

  return (
    <div className='terminal bg-black text-white py-16 px-36 shadow-lg overflow-y-scroll text-md font-mono'>
      {output.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={handleInput}
          className='bg-black border-none'
        />
      </form>
    </div>
  )
}

export default Terminal
