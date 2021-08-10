import express from 'express'
import { router as contactRouter } from './contact-router.js'
import { router as storeRouter } from './store-router.js'

export const router = express.Router()

// Map sub-routes to controllers
router.use('/contact', contactRouter)
router.use('/store', storeRouter)
