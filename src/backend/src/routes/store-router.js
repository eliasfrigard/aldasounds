import express from 'express'
import { StoreController } from '../controllers/store-controller.js'

// Export this router.
export const router = express.Router()

// Create new controller.
const controller = new StoreController()

// Post new gig.
router.post('/', (req, res, next) => controller.album(req, res, next))
