import React from 'react'
import { Button } from './ui/button'

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold">Hi, I'm Luca 👋</h1>
      <p className="mt-4 text-gray-500">A full-stack dev building awesome web stuff</p>
      <Button className="mt-6">View Projects</Button>
    </section>
  )
}

export default Hero
