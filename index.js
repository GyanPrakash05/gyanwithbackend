require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('gyanprakashcom')
})

app.get('/login', (req,res) =>{
    res.send('<h1>please login at gyan with backend<h1>')
})

app.listen(process.env.port, () => {
   console.log(`Example app listening on port ${port}`)
})