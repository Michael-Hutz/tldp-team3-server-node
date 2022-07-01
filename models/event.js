import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const eventSchema = new Schema({
  EVENT_ID: Number

})

eventSchema.plugin(sequence, {inc_field: 'EVENT_ID'}) 

const event = model('Event', eventSchema )
export default event