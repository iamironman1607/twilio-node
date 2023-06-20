const express = require('express');
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const app = express();


app.get('/', (req, res, next) => {
    sendMessageUsingTwilio();
    res.send("Message successfully sent!");
})
app.listen(3000, console.log('Server up at 30000'));

const sendMessageUsingTwilio = () => {
    client.messages
        .create({
            body: 'Hello! This is Shubham, Texting you using twilio api',
            to: '+911234567890', // Text your number
            from: '+14175383698', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
}