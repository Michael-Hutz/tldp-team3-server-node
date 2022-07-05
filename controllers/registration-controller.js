import Registration from '../models/registration.js'
import dataCleaner from '../utilities/data-cleaner.js'

const registrationController = {

    getAllRegistration: function(req, res) {
        Registration.find({}, '', function(err, registrations){
          if(err|| !registrations || registrations.length == 0 ) {
            res.sendStatus(404)
          
          } else {
            res.status(200).send(dataCleaner.cleanRegistrations(registrations))
          }
        }) 
      },

    getRegistrationByID: function(req, res) {
        Registration.findOne({'REGISTRATION_ID': req.params.id}, '', function(err, registration){
          if(err || ! registration) {
            res.sendStatus(404)
            
          } else {
            res.status(200).send(dataCleaner.cleanRegistrations(registration))
          }
        })
      },

    postRegistration: function(req, res) {
        Registration.create({ REGISTRATION_ID: req.body.id, CUSTOMER_ID: req.body.customer_id, EVENT_ID: req.body.event_id, DATE: req.body.registration_date, NOTE: req.body.notes}).then(
          (r) => { 
            res.location(`/api/registrations/${r.REGISTRATION_ID}`)
            res.sendStatus(201)
          }, // OK
          () => res.sendStatus(500) // Error
        )
      },

    deleteRegistrationByID: function(req, res) {
        Registration.deleteOne({'REGISTRATION_ID': req.params.id}, function(err){
          if(err) {
            res.sendStatus(500)
          } else {
            res.sendStatus(200)
          }
        })
      }
}

export default registrationController
