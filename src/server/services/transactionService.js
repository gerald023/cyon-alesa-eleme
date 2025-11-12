import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { createVote } from "../models/models";
import { v4 as uuidv4 } from 'uuid';

export const saveTransaction = async(data)=>{
    try{
      const voteDoc = createVote( {
      fullName: data.fullName,
      email: data.email,
      reference: data.reference,
      contestantId: data.contestantId,
      numberOfVote: data.numberOfVote
    });

    await setDoc(doc(db, "voteStore", uuidv4() ), {
      ...voteDoc,
      transactionRefs: [voteDoc.reference]
    });

    return {voteDoc}
    }catch(e){
      console.log('error in transits: ', e)
    }
  }
