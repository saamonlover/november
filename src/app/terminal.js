import React, { useState } from 'react'

import {
  helpContent,
  aboutContent,
  techContent,
  projectsContent,
  contactContent,
} from '../data/commands'

const Terminal = () => {
  const [input, setInput] = useState('> ')
  const [output, setOutput] = useState([
    'Hello, this is November. Type ``help`` for a list of commands.',
  ])

  const commands = {
    help: helpContent,
    about: aboutContent,
    tech: techContent,
    projects: projectsContent,
    contact: contactContent,
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
