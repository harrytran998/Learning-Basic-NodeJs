
const requestHeader = (req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.status(200).json('Hello World')
  }
  if (url === '/message' || method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)      
    })
  }
}

module.exports = requestHeader
