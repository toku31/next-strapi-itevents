// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json')

export default (req, res) => {
  // res.status(200).json({ name: 'John Doe' })
  if(req.method === 'GET') {
    res.status(200).json(events)
  } else{
    res.setHeader('Allow', ['Get'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}
