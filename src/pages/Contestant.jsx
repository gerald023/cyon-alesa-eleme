import ContestantFooter from "../components/common/footer/ContestantFooter"
import ContestantNavBar from "../components/common/navbar/ContestantNavBar"
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop"
import OneContestant from "../components/contestant/OneContestant"

function Contestant() {
  return (
    <>
    <ScrollToTop />
    <ContestantNavBar />
    <div className="bg-soft-white">
        <OneContestant />
    </div>
    <div className="bg-[#2A374A]">
        <ContestantFooter />
    </div>
    
    </>
  )
}

export default Contestant
