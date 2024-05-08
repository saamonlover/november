import React, { useState, useEffect, useRef } from 'react'

import {
  helpContent,
  aboutContent,
  techContent,
  projectsContent,
  contactContent,
} from '../data/commands'
import { initialOutput } from '../data/other'
import { getTime } from '../utils/get-time'

const Terminal = () => {
  const [input, setInput] = useState('N:/info ' + getTime() + ' > ')
  const [output, setOutput] = useState([initialOutput])

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
    <div className='terminal bg-dark text-output-dark py-8 px-8 md:py-16 md:px-16 lg:py-16 lg:px-36 text-xs sm:text-sm md:text-md overflow-y-scroll font-mono'>
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
