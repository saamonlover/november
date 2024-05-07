import React, { useState, useEffect, useRef } from 'react'

import {
  helpContent,
  aboutContent,
  techContent,
  projectsContent,
  contactContent,
} from '../data/commands'

function getTime() {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

const Terminal = () => {
  const [input, setInput] = useState('N:/info ' + getTime() + ' > ')
  const [output, setOutput] = useState([
    'Hello, this is November. Type ``help`` for a list of commands.',
  ])

  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  const commands = {
    help: helpContent,
    about: aboutContent,
    tech: techContent,
    projects: projectsContent,
    contact: contactContent,
    clear: 'clear',
  }

  const handleInput = (e) => {
    const newValue = e.target.value
    const prompt = 'N:/info ' + getTime() + ' > '

    if (newValue.length < prompt.length && !newValue.startsWith(prompt)) {
      setInput((prevInput) => prevInput)
    } else {
      setInput(newValue)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const command = input
      .slice(getTime().length + 11)
      .trim()
      .toLowerCase()
    if (commands[command]) {
      if (command === 'clear') {
        setOutput([])
      } else {
        setOutput([...output, input, commands[command]])
      }
    } else {
      setOutput([...output, input, 'Unknown command: ' + command])
    }
    setInput('N:/info ' + getTime() + ' > ')
  }

  return (
    <div className='terminal bg-dark text-output-dark py-16 px-36 shadow-lg overflow-y-scroll text-md font-mono'>
      {output.map((line, index) =>
        typeof line === 'string' ? (
          line
            .split('\n')
            .map((subLine, subIndex) => (
              <p key={`${index}-${subIndex}`}>{subLine}</p>
            ))
        ) : (
          <p key={index}>{line}</p>
        ),
      )}
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={handleInput}
          className='bg-dark border-none text-input-dark'
        />
      </form>
    </div>
  )
}

export default Terminal
