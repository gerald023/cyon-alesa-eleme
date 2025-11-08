// import axios from "axios";
// import { sha512 } from "js-sha512";

// const formData = {
//   amount: {
//     currency: "NGN",
//     total: 400,
//   },
//   bankCode: "033",
//   callbackUrl: "https://testapi.opaycheckout.com/api/v1/international/print",
//   country: "NG",
//   customerName: "customerName",
//   payMethod: "BankUssd",
//   product: {
//     description: "dd",
//     name: "name",
//   },
//   reference: "123457",
//   userPhone: "+1234567879",
// };


// // 🔐 Generate HMAC SHA-512 signature
// const hash = sha512.hmac.create(privateKey);
// hash.update(JSON.stringify(formData));
// const hmacsignature = hash.hex();

// console.log("HMAC Signature:", hmacsignature);

// // 🚀 Send request with Axios
// export const makeOpay = async () => {
//   try {
//     const response = await axios.post(
//       "https://testapi.opaycheckout.com/api/v1/international/payment/create",
//       formData,
//       {
//         headers: {
//           "MerchantId": "256625110636653",
//           Authorization: `Bearer ${hmacsignature}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("✅ Response data:", response.data);
//   } catch (error) {
//     console.error("❌ Error making request:", error.response?.data || error.message);
//   }
// };
