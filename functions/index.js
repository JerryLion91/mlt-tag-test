const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({
  origin: true,
});

const app = express();

app.use(cors);

app.get('/api', (req, res) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.send(`${Date.now()}`);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
