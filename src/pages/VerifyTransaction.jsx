import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import successImg from '../assets/images/success/successful.gif'
import { saveTransaction } from "../server/services/transactionService";
import Loading from "../components/common/loading/Loading";

function VerifyTransaction() {
    const [success, setSuccess] = useState(false)
    const [transaction, setTransaction] = useState({})
    const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
  const queryParams = new URLSearchParams(location.search);
  const reference = queryParams.get("reference");
  const contestantId = queryParams.get("contestantId");

  const showSuccessAlert = useCallback(()=>{
    if (!transaction) return;

        Swal.fire({
        title: "Congrats.",
        text: `You have voted for ${transaction.contestant.fullName}`,
        width: 400,
        imageAlt:'Congratulations',
        imageUrl: successImg,
        color: "#716add",
        allowOutsideClick: false,
        backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `,
      }).then((result) => {
  if (result.isConfirmed) {
    Toast.fire({
  icon: "success",
  title: `Going to ${transaction.contestant.fullName.split(' ')[0]}'s page`,
  didClose: ()=>{
    navigate(`/contestant/?name=${transaction.contestant.fullName}&contestant=${transaction.contestant.contestantId}`)
  }
});
  }
});
  }, [transaction, navigate])

  const verifyPayment = useCallback(async () => {
    
    try{
        if (!reference || !contestantId) {
            console.error("Missing query parameters.");
            setIsLoading(false);
            return;
        }
    const res = await axios.get(
      `https://cyon-stpaul-server.onrender.com/verify-payment/?reference=${reference}&contestantId=${contestantId}`
    );
    console.log(res);
    const successful = res.data.status;
    
    if (successful === "SUCCESS") {
        setTransaction(res.data)
    //   const data = {
    //     fullName: res.data.contestant.fullName,
    //     email: res.data.contestant.email,
    //     reference: res.data.transaction.reference,
    //     contestantId,
    //     numberOfVote: res.data.contestant.numberOfVote
    // }
    setSuccess(true)
        // const firebaseRes = await saveTransaction(data)
        // console.log(firebaseRes)
        // setTransaction(res.data)
        // console.log(transaction, success)
        setSuccess(true)
    }
    }catch(e){
      console.log('error: '. e)
      setIsLoading(false)
    }finally{
      setIsLoading(false)
    }
  }, [reference, contestantId]);

  useEffect(()=>{
    verifyPayment();
    console.log(transaction)
    console.log("transaction Status: ", success);
  }, [verifyPayment])

  useEffect(() => {
        if (success) {
            showSuccessAlert();
        }
    }, [success, transaction]); 
  if (success) {
   return <>
    <div className="flex items-center justify-center min-h-screen bg-green-50">
                <p className="text-xl text-green-700 font-semibold p-6 rounded-lg shadow-lg bg-white">
                    Payment Verified. Redirecting you shortly...
                </p>
            </div>
   </>
  }
  if (isLoading) {
   return  <Loading/> 
  }
  else return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-red-50">
            <p className="text-xl text-red-700 font-semibold p-6 rounded-lg shadow-lg bg-white">
                Transaction verification failed. Please try again.
            </p>
        </div>
    </>
  );
}

export default VerifyTransaction;
