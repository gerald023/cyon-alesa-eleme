import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import ContestantStep from './ContestantStep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AllContestants from './AllContestant';
import { useEffect, useState } from 'react';
import Loading from '../common/loading/Loading';
import axios from 'axios';



  
function OneContestant({data}) {

 const [contestantData, setContestantData] = useState(data)
  // console.log(contestantData)
  const [noVote, setNoVote] = useState(1)
   useEffect(() => {
    if (data) {
      setContestantData(data);
      console.log(noVote)
    }
  }, [ data, noVote]);

  

  const increaseDecreaseVote = (sign)=>{
      if (sign==="decrease" && noVote > 1) {
        setNoVote(noVote - 1)
        console.log(noVote)
      }else if (sign=="increase") {
        setNoVote(noVote + 1)
        console.log(noVote)
      }
  }

// console.log("Parent data:", data);
  console.log("Local contestantData:", contestantData);
  const contestantStep = [
    {
      id: 1,
      title: contestantData.fullName,
      description: `My hobbies are.... ${contestantData.hobbies}`,
      icon: "M320 312C253.7 312 200 258.3 200 192C200 125.7 253.7 72 320 72C386.3 72 440 125.7 440 192C440 258.3 386.3 312 320 312zM289.5 368L350.5 368C360.2 368 368 375.8 368 385.5C368 389.7 366.5 393.7 363.8 396.9L336.4 428.9L367.4 544L368 544L402.6 405.5C404.8 396.8 413.7 391.5 422.1 394.7C484 418.3 528 478.3 528 548.5C528 563.6 515.7 575.9 500.6 575.9L139.4 576C124.3 576 112 563.7 112 548.6C112 478.4 156 418.4 217.9 394.8C226.3 391.6 235.2 396.9 237.4 405.6L272 544.1L272.6 544.1L303.6 429L276.2 397C273.5 393.8 272 389.8 272 385.6C272 375.9 279.8 368.1 289.5 368.1z"
    },
    {
      id: 2,
      title: "Bio Info",
      description: ` ${contestantData.bio}`,
      icon:"M256 64L512 64C529.7 64 544 78.3 544 96C544 113.7 529.7 128 512 128L480 128L480 544C480 561.7 465.7 576 448 576C430.3 576 416 561.7 416 544L416 128L368 128L368 544C368 561.7 353.7 576 336 576C318.3 576 304 561.7 304 544L304 384L256 384C167.6 384 96 312.4 96 224C96 135.6 167.6 64 256 64z"
    },
    {
    id: 3,
    title: "Votes",
    description:
      "You will see contestant's votes here.",
    icon: "M584 352C597.3 352 608 362.7 608 376L608 480C608 515.3 579.3 544 544 544L96 544C60.7 544 32 515.3 32 480L32 376C32 362.7 42.7 352 56 352C69.3 352 80 362.7 80 376L80 480C80 488.8 87.2 496 96 496L544 496C552.8 496 560 488.8 560 480L560 376C560 362.7 570.7 352 584 352zM448 96C483.3 96 512 124.7 512 160L512 384C512 419.3 483.3 448 448 448L192 448C156.7 448 128 419.3 128 384L128 160C128 124.7 156.7 96 192 96L448 96zM410.9 180.6C400.2 172.8 385.2 175.2 377.4 185.9L291.8 303.6L265.3 276.2C256.1 266.7 240.9 266.4 231.4 275.6C221.9 284.8 221.6 300 230.8 309.5L277.2 357.5C282.1 362.6 289 365.3 296.1 364.8C303.2 364.3 309.7 360.7 313.9 355L416.2 214.1C424 203.4 421.6 188.4 410.9 180.6z"
  },
    {
    id: 4,
    title: "How to vote",
    description:
      "It cost just #100 to vote for this contestant if you want her to win this round of the contest.",
    icon: "M218.6 110.3C210.8 98.6 196.2 93.3 182.7 97.4C169.2 101.5 160 113.9 160 128L160 320L128 320C114.7 320 104 330.7 104 344C104 357.3 114.7 368 128 368L160 368L160 512C160 529.7 174.3 544 192 544C209.7 544 224 529.7 224 512L224 368L313.5 368L421.3 529.8C429.1 541.5 443.7 546.8 457.2 542.7C470.7 538.6 480 526.1 480 512L480 368L512 368C525.3 368 536 357.3 536 344C536 330.7 525.3 320 512 320L480 320L480 128C480 110.3 465.7 96 448 96C430.3 96 416 110.3 416 128L416 320L358.5 320L218.7 110.3zM390.5 368L416 368L416 406.3L390.5 368zM281.5 320L224 320L224 233.7L281.5 320z"
  },
  ]

  const [loading, setLoading] = useState(false)
  const startPayment = async()=>{
    setLoading(true)
                // const {email, amount, contestantId, fullName, numberOfVote} = req.body;
    try{
        const res =  await axios.post("http://localhost:3000/initiate-payment", {
      email: contestantData.email,
      amount: noVote * 100,
      fullName: contestantData.fullName,
      contestantId: contestantData.userId,
      numberOfVote: noVote
    })
    console.log(res);
    setTimeout(() => {
      // navigate(res.data.authorization_url)
      window.location.href = res.data.authorization_url ;
    }, 100);
    }catch(e){
      setLoading(false)
      console.log( 'error in Payment: ', e)
    }
    
  }
  
   if (Object.keys(contestantData).length === 0) {
  return <Loading/>
} 
  return (
    <>
          <div
      className="content my-2 grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="contestant"
    >
       {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={contestantData.profilePicture}
              alt=""
            />
          </div>
          <div action=""className='flex flex-col gap-'>
          <div className='flex gap-4 justify-center items-center'>
                  <button type='button' onClick={()=>{
                    increaseDecreaseVote('decrease')
                  }} className='btn cursor-pointer bg-gray-200 border-2 border-gray-400 text-black py-7 px-6 mt-5 text-center text-[16px] font-bold '>-</button>
                  <input type="text" placeholder='votes' value={noVote}  className="input input-lg pl-2 border-2 focus:outline-none focus:placeholder:text-picto-primary -mb-5 placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-1/5 rounded-none px-0" />
                  <button type='button' onClick={()=>{
                    increaseDecreaseVote('increase')
                  }} className='cursor-pointer btn btn-primary py-7 px-6 mt-5 text-center text-[16px] font-bold'>+</button>
                  <div>
              <button href='#!' disabled={loading} className='cursor-pointer btn btn-primary py-7 px-6 mt-5 mr-3 text-center text-[16px] font-semibold' onClick={startPayment}>
                
                  {
                     loading ? <>
                      <FontAwesomeIcon icon={faCheckToSlot} />
                  Vote {contestantData.fullName.split(' ')[0]}....
                    </>
                  : <>
                    <FontAwesomeIcon icon={faCheckToSlot} />
                  Vote {contestantData.fullName.split(' ')[0]}
                    </>
                  }
             </button>
          </div>
                </div>                
        </div>
        </div>
      
      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {contestantStep.map((data, index) => {
          return (
            <ContestantStep
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}

        
         
                


      </div>
      
      </div>
      <div className=" bg-white mt-20 ">
<AllContestants/>
</div>
    </>
  )
}

export default OneContestant
