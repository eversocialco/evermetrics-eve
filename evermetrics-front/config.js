'use strict'

const config = {
  client: {
    endpoints: {
      pictures: 'http://api.evermetrics.com/picture',
      users: 'http://api.evermetrics.com/user',
      auth: 'http://api.evermetrics.com/auth'
    }
  },
  secret: process.env.EVERMETRICS_SECRET || 'pl4tz1' // ojo no usar defaults
}

if(process.env.NODE_ENV !== 'production') {
  config.client.endpoints = {
    pictures: 'http://localhost:5000',
    users: 'http://localhost:5001',
    auth: 'http://localhost:5002'
  }
}

module.exports = config
