import express from 'express'
import { ContactController } from '../controllers/contact-controller.js'

// Export this router.
export const router = express.Router()

// Create new controller.
const controller = new ContactController()

// Post new gig.
router.get('/', (req, res, next) => controller.send(req, res, next))
