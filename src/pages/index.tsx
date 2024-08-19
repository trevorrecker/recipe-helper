import LogInWithGoogle from '@/components/LogInWithGoogle'
import React from 'react'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div>
      <h1>Recipe Helper</h1>
      <span className="secondary">Development Preview v{import.meta.env.VITE_PACKAGE_VERSION}</span>

      <div className="card">
        <LogInWithGoogle />
      </div>
    </div>
  )
}