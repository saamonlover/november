'use client'

import React from 'react'
import Terminal from './terminal'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Terminal />
    </main>
  )
}
