import Event from '../models/event.js'
import dataCleaner from '../utilities/data-cleaner.js'

const eventController = {

    getAllevents: function(req, res) {
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
            res.status(200).send(dataCleaner.cleanCustomer(event))
          }
        })
      },
}

export default eventController