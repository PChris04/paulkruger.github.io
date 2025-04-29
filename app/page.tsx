"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Terminal from "@/components/terminal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Auto-scroll to the bottom of the terminal
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [showIntro])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 bg-black text-green-500 font-mono">
      {showIntro ? (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-screen space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 glitch-text">PAUL KRUGER</h1>
            <p className="text-xl md:text-2xl text-green-300">Ethical Hacker | Security Researcher</p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span>System ready</span>
            </div>
          </div>
          <Button
            onClick={() => setShowIntro(false)}
            className="bg-green-600 hover:bg-green-700 text-black font-bold px-6 py-3 rounded border border-green-400"
          >
            Access Terminal <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto flex flex-col h-screen">
          <div className="flex items-center justify-between bg-green-900/20 border-b border-green-700/50 p-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-green-400">paul_kruger@portfolio:~</div>
            <div className="text-xs text-green-400">{new Date().toLocaleTimeString()}</div>
          </div>
          <Terminal ref={terminalRef} />
        </div>
      )}
    </main>
  )
}
