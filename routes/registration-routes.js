import express from 'express'
var registrationRouter = express.Router()
import eventController from '../controllers/registration-controller.js'

// GET /api/registrations
registrationRouter.get('/', function(req, res) {
    registrationController.getAllRegistrations(req, res)
})

// GET /api/registrations/:registrationID

// POST /api/registration

// DELETE /api/registrations/:registrationID