const express = require('express')
const cors = require('cors')
const path = require('path')

const { buildResponse } = require('./helpers')

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, '../dist')))

server.use(cors())

server.post('/api/result', async (req, res) => {
  const [status, payload] = await buildResponse(req)
  res.status(status).json(payload)
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.use((req, res) => {
  res.status(404).json({
    message: `Endpoint [${req.method}] ${req.originalUrl} does not exist`,
  })
})

module.exports = server
