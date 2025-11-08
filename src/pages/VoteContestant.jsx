import axios from "axios"
import { makeOpay } from "../server/services/transactionService"

function VoteContestant() {
    const url = 'https://g2fnjxp5-3000.uks1.devtunnels.ms/health'
    const getTransaction = async()=>{
       const formData = {
  amount: {
    currency: "NGN",
    total: 400,
  },
  bankCode: "033",
  callbackUrl: "https://testapi.opaycheckout.com/api/v1/international/print",
  country: "NG",
  customerName: "customerName",
  payMethod: "BankUssd",
  product: {
    description: "dd",
    name: "name",
  },
  reference: "127-ada",
  userPhone: "+1234567879",
};
  console.log(formData)
        try{
            const res = await axios.post(url , formData)

            console.log("data from transaction: ", res)
        }catch(e){
            console.log("error in transaction home: ", e)
        }
    }
  return (
    <>
      <button className="btn" onClick={getTransaction}>Send opay</button>
    </>
  )
}

export default VoteContestant;
