import Customer from '../models/customer.js'

const dataCleaner = {

  cleanCustomer: ( customer ) => {
    return {
      id: customer.CUSTOMER_ID,
      name: customer.CUSTOMER_NAME,
      password: customer.PASSWORD,
      email: customer.EMAIL 
    }
  },  

  cleanCustomers: ( customers ) => {
    var results = []
    for( const c in customers) {
      results.push(dataCleaner.cleanCustomer(customers[c]))
    }
    return results
  },

  cleanEvent: ( event ) => {
    return {
      id: event.EVENT_ID,
      code: event.EVENT_CODE,
      title: event.TITLE,
      description: event.DESCRIPTION 
    }
  },

  cleanEvents: ( events ) => {
    var results = []
    for( const e in events) {
      results.push(dataCleaner.cleanEvent(events[e]))
    }
    return results
  },

}

export default dataCleaner