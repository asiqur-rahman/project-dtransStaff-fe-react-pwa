const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push')

const app = express()

let subscriptions = [];

dotenv.config()

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())

webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/push/subscribe', (req, res) => {
  const {username,...subscription} = req.body
  subscriptions[username]=subscription
  res.status(200).json({'success': true})
});


app.post('/push/notification', (req, res) => {
  try {
    const subscription = subscriptions[req.body.username]
    if(!subscription) throw new Error();
    const payload = JSON.stringify({
      title: `Hello ${req.body.username}!`,
      body: 'You have a new order, Please check it.',
    })

    webpush.sendNotification(subscription, payload)
      .then(result => console.log(result))
      .catch(e => console.log(e.stack))

    res.status(200).json({'success': true})
  } catch (error) {
    res.status(200).json({'success': false})
  }
  
});

app.listen(9000, () => console.log('The server has been started on the port 9000'))
