/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
import { logger } from "firebase-functions";
import axios from "axios";
import { sha512 } from "js-sha512";


// const {setGlobalOptions} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/https");
// const logger = require("firebase-functions/logger");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.

exports.createPayment = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*"); // allow frontend
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  try {
    const formData = req.body;

    const privateKey = "YOUR_OPAY_PRIVATE_KEY";
    const merchantId = "YOUR_MERCHANT_ID";

    // Create the HMAC signature
    const hash = sha512.hmac.create(privateKey);
    hash.update(JSON.stringify(formData));
    const hmacsignature = hash.hex();

    // Send the payment request to Opay
    const response = await axios.post(
      "https://testapi.opaycheckout.com/api/v1/international/payment/create",
      formData,
      {
        headers: {
          MerchantId: merchantId,
          Authorization: `Bearer ${hmacsignature}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Payment error:", error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
