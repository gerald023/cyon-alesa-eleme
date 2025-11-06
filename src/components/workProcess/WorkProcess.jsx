import WorkSteps from "./WorkSteps";


const workStepData = [
  {
    id: 1,
    title: "Tiktok Screening",
    description:
      "We post your video on our TikTok page, your fans will have to like, comment and follow our page to vote for you.",
    svgPath:
      "M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z",
  },
  {
    id: 2,
    title: "Online Voting",
    description:
      "Your supporters will vote for you in this round. Each vote cost just ₦100, they can vote as many times as possible.",
    svgPath:
      "M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM360 352L488 352C501.3 352 512 362.7 512 376C512 389.3 501.3 400 488 400L360 400C346.7 400 336 389.3 336 376C336 362.7 346.7 352 360 352zM336 264C336 250.7 346.7 240 360 240L488 240C501.3 240 512 250.7 512 264C512 277.3 501.3 288 488 288L360 288C346.7 288 336 277.3 336 264zM212 208C223 208 232 217 232 228L232 232L240 232C251 232 260 241 260 252C260 263 251 272 240 272L192.5 272C185.6 272 180 277.6 180 284.5C180 290.6 184.4 295.8 190.4 296.8L232.1 303.8C257.4 308 276 329.9 276 355.6C276 381.7 257 403.3 232 407.4L232 412.1C232 423.1 223 432.1 212 432.1C201 432.1 192 423.1 192 412.1L192 408.1L168 408.1C157 408.1 148 399.1 148 388.1C148 377.1 157 368.1 168 368.1L223.5 368.1C230.4 368.1 236 362.5 236 355.6C236 349.5 231.6 344.3 225.6 343.3L183.9 336.3C158.5 332 140 310.1 140 284.5C140 255.7 163.2 232.3 192 232L192 228C192 217 201 208 212 208z",
  },
  {
    id: 3,
    title: "Grand Finale",
    description:
      "Contestants will be quizzed of their knowledge of the CYON, Catholic Church and Nigeria.",
    svgPath:
      "M345 151.2C354.2 143.9 360 132.6 360 120C360 97.9 342.1 80 320 80C297.9 80 280 97.9 280 120C280 132.6 285.9 143.9 295 151.2L226.6 258.8C216.6 274.5 195.3 278.4 180.4 267.2L120.9 222.7C125.4 216.3 128 208.4 128 200C128 177.9 110.1 160 88 160C65.9 160 48 177.9 48 200C48 221.8 65.5 239.6 87.2 240L119.8 457.5C124.5 488.8 151.4 512 183.1 512L456.9 512C488.6 512 515.5 488.8 520.2 457.5L552.8 240C574.5 239.6 592 221.8 592 200C592 177.9 574.1 160 552 160C529.9 160 512 177.9 512 200C512 208.4 514.6 216.3 519.1 222.7L459.7 267.3C444.8 278.5 423.5 274.6 413.5 258.9L345 151.2z",
  },
  {
    id: 4,
    title: "Award Presentation",
    description:
      "The Winner, First Runner-up and Second Runner-up will be awarded on the GRAND FINALE!!",
    svgPath:
      "M320.3 192L235.7 51.1C229.2 40.3 215.6 36.4 204.4 42L117.8 85.3C105.9 91.2 101.1 105.6 107 117.5L176.6 256.6C146.5 290.5 128.3 335.1 128.3 384C128.3 490 214.3 576 320.3 576C426.3 576 512.3 490 512.3 384C512.3 335.1 494 290.5 464 256.6L533.6 117.5C539.5 105.6 534.7 91.2 522.9 85.3L436.2 41.9C425 36.3 411.3 40.3 404.9 51L320.3 192zM351.1 334.5C352.5 337.3 355.1 339.2 358.1 339.6L408.2 346.9C415.9 348 418.9 357.4 413.4 362.9L377.1 398.3C374.9 400.5 373.9 403.5 374.4 406.6L383 456.5C384.3 464.1 376.3 470 369.4 466.4L324.6 442.8C321.9 441.4 318.6 441.4 315.9 442.8L271.1 466.4C264.2 470 256.2 464.2 257.5 456.5L266.1 406.6C266.6 403.6 265.6 400.5 263.4 398.3L227.1 362.9C221.5 357.5 224.6 348.1 232.3 346.9L282.4 339.6C285.4 339.2 288.1 337.2 289.4 334.5L311.8 289.1C315.2 282.1 325.1 282.1 328.6 289.1L351 334.5z",
  },
];

const WorkProcess = () => {
  return ( 
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Pageantry Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          The pageantry will unfold in three phases—social media engagement, voting, and a grand finale showcasing contestants’ cultural and intellectual prowess.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          With prizes worth <span className="bg-highlight font-bold text-black italic">2,000,000 <sub className=" font-light text-xs">kobo</sub></span> to be won and funding sourced from tickets, community levies, and generous sponsors, the event promises to be a memorable celebration of youth creativity, unity, and faith.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
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
  );
};

export default WorkProcess;
