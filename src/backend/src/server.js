import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { router } from './routes/router.js'

/**
 * Main method of the application.
 */
const main = async () => {
  // Create express application.
  const app = express()

  // Use cors.
  app.use(cors())

  // Use Morgan dev logger.
  app.use(logger('dev'))

  // Use json.
  app.use(express.json())

  // Get directory of module.
  const directoryFullName = dirname(fileURLToPath(import.meta.url))

  // Parse requests of the content type application/x-www-form-urlencoded.
  // Populates the request object with a body object (req.body).
  app.use(express.urlencoded({ extended: false }))

  // Serve static files from public folder.
  app.use(express.static(join(directoryFullName, '..', 'public')))
  
  // Register routes.
  app.use('/', router)

  // Starts the HTTP server listening for connections.
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
    console.log('Press Ctrl-C to terminate...')
  })
}

main().catch(console.error)
