const helpContent = `
  Available commands
  |
  |--- about
  |--- tech
  |--- projects
  |--- contact
  |--- clear
  |
  `

const aboutContent = `
  Avatar
  |
  |--- Jiaqi (Ricky) Gu
  |--- saamonlover (Salipop) on GitHub
  |
  Location
  |
  |--- Irvine, CA [Apr. 2024 - Present]
  |--- San Diego, CA [Jul. 2022 - Mar. 2024]
  |--- Toronto, ON [Dec. 2022, Feb. 2023 - Apr. 2023]
  |--- West Lafayette, IN [Aug. 2018 - May 2022]
  |
  Bio [I'm]
  |
  |--- A software engineer primarily focusing on Front-end development
  |--- A huge fan of React, Next.js, and building Discord bots
  |--- Currently open for new opportunities
  |--- Glad if you want to connect w/ me
  |
  Education
  |
  |--- University of California, San Diego
  |---|--- M.S. in Computer Science
  |---|--- Sep. 2022 - Mar. 2024
  |
  |--- Purdue University - West Lafayette
  |---|--- B.S. in Computer Science
  |---|--- Aug. 2018 - May 2022
  |
  `

const techContent = `
  Front-end
  |
  |--- Languages: JavaScript, TypeScript, HTML, CSS
  |--- Frameworks: React, Node.js, Next.js
  |--- Libraries: Tailwind CSS, Material-UI
  |
  Back-end
  |
  |--- Languages: JavaScript, TypeScript, Python
  |--- Frameworks: Node.js, Discord.js
  |--- Databases: MySQL, MongoDB
  |
  DevOps
  |
  |--- Tools: GitHub Actions, pm2
  |--- Platforms: Heroku, Vercel, Netlify
  |
  `

const projectsContent = `
    Projects
    |
    EDM Discord Music Bot
    |--- A Discord bot that plays music in voice channels
    |---|--- Tech: Node.js, Discord.js, Spotify API, YouTube API
    |---|--- DevOps: Heroku, pm2
    |---|--- Invite Link: https://top.gg/bot/1233204961337413704?s=0693002901491
    |
    Guild Manager Discord Bot
    |--- A Discord bot that manages guild business including orderings, giftings, and more
    |---|--- Tech: Node.js, Discord.js, MongoDB, cron
    |---|--- DevOps: Heroku, pm2
    |
    `

const contactContent = `
  Contact
  |
  Email
  |
  |--- saamonlover@gmail.com (work)
  |--- jig030@ucsd.com
  |
  GitHub
  |
  |--- saamonlover (Salipop)
  |
  LinkedIn
  |
  |--- www.linkedin.com/in/jiaqi-ricky-gu
  |
  `

const initialOutputSplitted = [
  '███╗   ██╗ ██████╗ ██╗   ██╗███████╗███╗   ███╗██████╗ ███████╗██████╗',
  '████╗  ██║██╔═══██╗██║   ██║██╔════╝████╗ ████║██╔══██╗██╔════╝██╔══██╗',
  '██╔██╗ ██║██║   ██║██║   ██║█████╗  ██╔████╔██║██████╔╝█████╗  ██████╔╝',
  '██║╚██╗██║██║   ██║╚██╗ ██╔╝██╔══╝  ██║╚██╔╝██║██╔══██╗██╔══╝  ██╔══██╗',
  '██║ ╚████║╚██████╔╝ ╚████╔╝ ███████╗██║ ╚═╝ ██║██████╔╝███████╗██║  ██║',
  '╚═╝  ╚═══╝ ╚═════╝   ╚═══╝  ╚══════╝╚═╝     ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝',
]

const initialOutput = initialOutputSplitted.join('\n')

// Export these variables
export {
  helpContent,
  aboutContent,
  techContent,
  projectsContent,
  contactContent,
  initialOutput,
}
