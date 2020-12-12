var admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://database_url"
});

const database = admin.firestore();

async function saveData(wallet, userId) {
  let userRef = database.collection("staging").doc(userId);
  userRef.collection('wallet').doc('cei').set(wallet);
}

module.exports.saveData = saveData;