import Event from '../models/event.js'
import dataCleaner from '../utilities/data-cleaner.js'

const eventController = {

    getAllEvents: function(req, res) {
        Event.find({}, '', function(err, events){
          if(err|| !events || events.length == 0 ) {
            res.sendStatus(404)
          
          } else {
            res.status(200).send(dataCleaner.cleanEvents(events))
          }
        }) 
      },

    getEventByID: function(req, res) {
        Event.findOne({'EVENT_ID': req.params.event_id}, '', function(err, event){
          if(err || ! event) {
            res.sendStatus(404)
            
          } else {
            res.status(200).send(dataCleaner.cleanEvents(event))
          }
        })
      },
    
    postEvent: function(req, res) {
        Event.create({ EVENT_CODE: req.body.code, TITLE: req.body.title, DESCRIPTION: req.body.description}).then(
          (e) => { 
            res.location(`/api/event/${e.EVENT_ID}`)
            res.sendStatus(201)
          }, // OK
          () => res.sendStatus(500) // Error
        )
      },
}

export default eventController