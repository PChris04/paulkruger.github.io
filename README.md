# Ethical Hacker Portfolio - Terminal Theme

An interactive terminal-themed portfolio website for Paul Kruger, an aspiring ethical hacker.

## Features

- Interactive terminal interface
- Command-based navigation
- Terminal-style design with blinking cursor
- Command history
- Mobile responsive

## Available Commands

- `help` - Shows all available commands
- `about` - Displays information about me
- `skills` - Lists technical skills
- `projects` - Shows portfolio projects
- `contact` - Displays contact information
- `clear` - Clears the terminal screen
- `whoami` - Shows current user
- `date` - Displays current date and time
- `ls` - Lists available sections
- `hack` - Simulates a hacking sequence
- `deploy` - Shows deployment instructions

## Deployment

This project is configured for GitHub Pages deployment using GitHub Actions.

### Automatic Deployment

1. Push changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at: https://pchris04.github.io/Ethical-hacker-portfolio/

### Manual Setup (if needed)

1. Go to your repository Settings > Pages
2. Set the source to "GitHub Actions"
3. The workflow will automatically build and deploy your site

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
\`\`\`

Finally, let's create a simple .gitignore file:

```gitignore file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
