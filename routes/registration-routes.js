import express from 'express'
var registrationRouter = express.Router()
import eventController from '../controllers/registration-controller.js'

// GET /api/registrations
registrationRouter.get('/', function(req, res) {
    registrationController.getAllRegistrations(req, res)
})

// GET /api/registrations/:registrationID
registrationRouter.get('/:registrationID', function(req, res) {
    registrationController.getRegistraionByID(req, res)
})
// POST /api/registration
registrationRouter.post('/', function(req, res) {
    registrationController.postRegistration(req, res)
})
// DELETE /api/registrations/:registrationID
registrationRouter.delete('/:registrationID', function(req, res) {
    registrationController.deleteRegistrationByID(req, res)
})

  export default registrationRouter