import { useEffect, useState } from "react"
import ContestantFooter from "../components/common/footer/ContestantFooter"
import ContestantNavBar from "../components/common/navbar/ContestantNavBar"
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop"
import OneContestant from "../components/contestant/OneContestant"
import { getOneContestant } from "../server/services/contestant_service"
import { useLocation } from "react-router-dom"

function Contestant() {
    const location = useLocation()
    const [contestant, setContestant] = useState({});
    
    const getTheContestant = async()=>{
         const queryParams = new URLSearchParams(location.search);
         const contestant = queryParams.get("contestant");
         console.log(contestant)
        const res = await getOneContestant(contestant);
        setContestant(res);
        console.log(res)
    }
    useEffect(()=>{
        getTheContestant()
    }, 1000)
  return (
    <>
    <ScrollToTop />
    <ContestantNavBar />
    <div className="bg-soft-white">
        <OneContestant  data={contestant} />
    </div>
    <div className="bg-[#2A374A]">
        <ContestantFooter />
    </div>
    
    </>
  )
}

export default Contestant
