"use client"

import type React from "react"

import { useState, useEffect, useRef, forwardRef, type ForwardedRef } from "react"
import { cn } from "@/lib/utils"

interface CommandOutput {
  command: string
  output: React.ReactNode
}

const Terminal = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [commandOutputs, setCommandOutputs] = useState<CommandOutput[]>([])
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initial terminal output
  useEffect(() => {
    const initialOutput = [
      {
        command: "",
        output: (
          <div className="text-green-400 space-y-1">
            <div className="text-xl font-bold mb-2">Welcome to Paul Kruger's Terminal Portfolio v1.0.0</div>
            <div>
              Type <span className="text-yellow-400">help</span> to see available commands
            </div>
            <div>
              Type <span className="text-yellow-400">about</span> to learn about me
            </div>
            <div>
              Type <span className="text-yellow-400">skills</span> to see my technical skills
            </div>
            <div>
              Type <span className="text-yellow-400">projects</span> to view my work
            </div>
            <div>
              Type <span className="text-yellow-400">contact</span> to reach out
            </div>
            <div>
              Type <span className="text-yellow-400">clear</span> to clear the terminal
            </div>
          </div>
        ),
      },
    ]
    setCommandOutputs(initialOutput)
  }, [])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Focus input on terminal click
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus()
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // Auto-scroll to bottom when new commands are added
  useEffect(() => {
    if (ref && "current" in ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [commandOutputs, ref])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle up arrow for command history
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    }

    // Handle down arrow for command history
    else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }

    // Handle command execution
    else if (e.key === "Enter") {
      e.preventDefault()
      executeCommand(input)
    }
  }

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd) {
      // Add to command history
      setCommandHistory([...commandHistory, trimmedCmd])
      setHistoryIndex(-1)

      // Process command
      let output: React.ReactNode

      switch (trimmedCmd) {
        case "help":
          output = (
            <div className="space-y-1">
              <div className="text-yellow-400 font-bold">Available Commands:</div>
              <div>
                <span className="text-white">about</span> - Learn about Paul Kruger
              </div>
              <div>
                <span className="text-white">skills</span> - View technical skills
              </div>
              <div>
                <span className="text-white">projects</span> - See portfolio projects
              </div>
              <div>
                <span className="text-white">contact</span> - Get contact information
              </div>
              <div>
                <span className="text-white">clear</span> - Clear the terminal
              </div>
              <div>
                <span className="text-white">whoami</span> - Display current user
              </div>
              <div>
                <span className="text-white">date</span> - Display current date and time
              </div>
              <div>
                <span className="text-white">ls</span> - List sections
              </div>
              <div>
                <span className="text-white">hack</span> - Simulate a hacking sequence
              </div>
              <div>
                <span className="text-white">deploy</span> - Show deployment instructions
              </div>
            </div>
          )
          break

        case "about":
          output = (
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">About Paul Kruger:</div>
              <div>
                I'm a student at Sol Plaatje University, currently pursuing my diploma in ICT and applications
                development.
              </div>
              <div>
                I'm passionate about technology and aspiring to become an ethical hacker with a focus on cybersecurity.
              </div>
              <div>
                Currently working on learning as much as possible about cybersecurity while completing my diploma.
              </div>
            </div>
          )
          break

        case "skills":
          output = (
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">Technical Skills:</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div>• HTML</div>
                <div>• CSS</div>
                <div>• JavaScript</div>
                <div>• React</div>
                <div>• Python</div>
                <div>• Kali Linux</div>
                <div>• Git</div>
                <div>• Cybersecurity</div>
                <div>• ICT</div>
                <div>• Application Development</div>
              </div>
            </div>
          )
          break

        case "projects":
          output = (
            <div className="space-y-3">
              <div className="text-yellow-400 font-bold">Portfolio Projects:</div>

              <div className="border border-green-700/50 p-2 rounded">
                <div className="text-white font-bold">Network Vulnerability Scanner</div>
                <div>
                  A custom-built tool that automates the discovery of security vulnerabilities in network
                  infrastructure.
                </div>
                <div className="text-xs text-green-300 mt-1">Python • Nmap • Scapy</div>
              </div>

              <div className="border border-green-700/50 p-2 rounded">
                <div className="text-white font-bold">Web Application Firewall Bypass Techniques</div>
                <div>Research project documenting methods to ethically test and improve WAF implementations.</div>
                <div className="text-xs text-green-300 mt-1">Burp Suite • ModSecurity • OWASP</div>
              </div>

              <div className="border border-green-700/50 p-2 rounded">
                <div className="text-white font-bold">IoT Security Assessment Framework</div>
                <div>Methodology and toolset for evaluating security of Internet of Things devices.</div>
                <div className="text-xs text-green-300 mt-1">Embedded Systems • Firmware Analysis • RF Testing</div>
              </div>
            </div>
          )
          break

        case "contact":
          output = (
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">Contact Information:</div>
              <div>
                Email: <span className="text-white">paulkruger613@gmail.com</span>
              </div>
              <div>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/paul-christephor-kruger-0b65222b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline"
                >
                  paul-christephor-kruger-0b65222b4
                </a>
              </div>
              <div>
                GitHub:{" "}
                <a
                  href="https://github.com/PChris04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline"
                >
                  PChris04
                </a>
              </div>
              <div className="mt-2">Feel free to reach out for collaboration opportunities or to connect!</div>
            </div>
          )
          break

        case "clear":
          setCommandOutputs([])
          setInput("")
          return

        case "whoami":
          output = <div>visitor@paulkruger-portfolio</div>
          break

        case "date":
          output = <div>{new Date().toString()}</div>
          break

        case "ls":
          output = (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="text-blue-400">about/</div>
              <div className="text-blue-400">skills/</div>
              <div className="text-blue-400">projects/</div>
              <div className="text-blue-400">contact/</div>
            </div>
          )
          break

        case "hack":
          output = (
            <div className="space-y-1 animate-pulse">
              <div>Initializing hack sequence...</div>
              <div>Scanning target systems...</div>
              <div>Identifying vulnerabilities...</div>
              <div>Attempting exploit...</div>
              <div className="text-red-500">Access denied. This is a simulation.</div>
              <div className="text-yellow-400 mt-2">Remember: Always hack ethically and with proper authorization!</div>
            </div>
          )
          break

        case "deploy":
          output = (
            <div className="space-y-2">
              <div className="text-yellow-400 font-bold">GitHub Pages Deployment Instructions:</div>
              <div>
                1. Push this code to your GitHub repository (https://github.com/PChris04/Ethical-hacker-portfolio)
              </div>
              <div>2. Go to your repository Settings &gt; Pages</div>
              <div>3. Set the source to "GitHub Actions"</div>
              <div>4. The workflow will automatically build and deploy your site</div>
              <div>5. Your site will be available at: https://pchris04.github.io/Ethical-hacker-portfolio/</div>
              <div className="mt-2 text-green-300">The GitHub Action is already configured in this project!</div>
            </div>
          )
          break

        default:
          output = (
            <div className="text-red-400">
              Command not found: {trimmedCmd}. Type <span className="text-yellow-400">help</span> for available
              commands.
            </div>
          )
      }

      setCommandOutputs([
        ...commandOutputs,
        {
          command: trimmedCmd,
          output,
        },
      ])
    }

    setInput("")
  }

  return (
    <div ref={ref} className="flex-1 bg-black text-green-500 p-4 overflow-y-auto font-mono text-sm">
      {commandOutputs.map((item, index) => (
        <div key={index} className="mb-4">
          {item.command && (
            <div className="flex items-center">
              <span className="text-green-400 mr-2">visitor@paulkruger:~$</span>
              <span>{item.command}</span>
            </div>
          )}
          <div className="ml-0 mt-1">{item.output}</div>
        </div>
      ))}

      <div className="flex items-center">
        <span className="text-green-400 mr-2">visitor@paulkruger:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none flex-1 text-green-500 font-mono"
          autoFocus
        />
        <span className={cn("w-2 h-5 bg-green-500", cursorVisible ? "opacity-100" : "opacity-0")}></span>
      </div>
    </div>
  )
})

Terminal.displayName = "Terminal"

export default Terminal
