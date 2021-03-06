const functions = require('firebase-functions');
const axios = require("axios");

exports.getFrostAccessToken = functions.https.onRequest( async(req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', 86400);
    res.status(204).send('');
  } else {
    try {
      const loadFrostAccessToken = await axios.post("http://frost.met.no/auth/accessToken", {
        "client_id": req.body.client_id,
        "client_secret": req.body.client_secret,
        "grant_type": "client_credentials"
      })
      res.status(200).send(loadFrostAccessToken.data)
    }
    catch (e) {
      console.log(e)
      res.status(500).send(e.response.data)
    }
  }
  });

exports.getFrostData = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', 86400);
    res.status(204).send('');
  } else {
  if (!req.body.access_token) res.status(500).send("The access_token was not sent with the request");
  else {

  }
}
});
