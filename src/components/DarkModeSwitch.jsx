"use client"

import { useTheme } from '@teispace/next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-8 h-8" />
  }

  return (
    <button
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
