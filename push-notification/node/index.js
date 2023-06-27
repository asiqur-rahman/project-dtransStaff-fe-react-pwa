const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push')

const PUBLIC_VAPID_KEY="BB5EDm4B6fa6yVlvn8hSjvNSMYYt3CvgDnDfNKnBTbueasPkcWdV8Tak1roJG_gDeEZOo_6jvx1Qka1QRnsII_M"
const PRIVATE_VAPID_KEY="gq6BeEiXOsH5P1yHt1Abmf_UVClDu1qFfbqHK4ugFzw"
const WEB_PUSH_CONTACT="mailto: contact@my-site.com"

const app = express()

let subscriptions = [];

dotenv.config()

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())

webpush.setVapidDetails(WEB_PUSH_CONTACT, PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY)

app.get('/', (req, res) => {
  res.send('Push Notification Test Server is running...')
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
      body: req.body.message??'You have a new order, Please check it.',
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
