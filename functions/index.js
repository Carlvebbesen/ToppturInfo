const functions = require("firebase-functions");
const frostAxios = require("axios");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getFrostAccessToken = functions.https.onRequest( async (req, res) => {
  if (req.body.client_id == undefined || req.body.client_secret == undefined) {
    res.status(400).send("The query was not defined correctly");
  } else {
    try {
        const loadFrostAccessToken = await frostAxios.post("https://frost.met.no/auth/accessToken", {
            "client_id": req.body.client_id,
            "client_secret": req.body.client_secret,
            "grant_type": "client_credentials"
        })
        res.status(200).send(loadFrostAccessToken.data)
    
    }
    catch (e) {
        res.status(500).send(e.response.data)
    }
  }
});

exports.getFrostData = functions.https.onRequest((req, res) => {
  if (req.body.access_token == undefined) {
    res.status(500).send("The access_token was not sent with the request");
  } else {

  }
});
