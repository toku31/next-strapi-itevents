const { events } = require('./data.json')

export default (req, res) => {
  const evt = events.filter((ev) => ev.slug ===req.query.slug)
  // res.status(200).json({ name: 'John Doe' })
  if (req.method === 'GET') {
    res.status(200).json(evt)
  // }else if(req.method === 'PUT') {
  //   res.status(200).json(evt)
  } else{
    res.setHeader('Allow', ['Get'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}