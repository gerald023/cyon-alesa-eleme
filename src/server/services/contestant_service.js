import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export const getOneContestant = async(id)=>{
    try{
        const snap = await getDoc(doc(db, 'contestantProfiles', id));
        return snap.exists() ? { id: snap.id, ...snap.data() } : null;
    }catch(e){
        console.log("error getting one contestant ", e)
    }
}
export const getAllContestants = async()=>{
    try{
        const querySnapshot = await getDocs(collection(db, "contestantProfiles"));
    const contestants = querySnapshot.docs.map(doc => ({
      id: doc.id,            
      ...doc.data(),          
    }));

      console.log("All contestants:", contestants);
    return contestants;
    }catch(e){
        console.log("error getting all contestants: ", e)
    }
}