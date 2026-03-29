const Title = ({h1,h2,m}) => {
    return <div flexName="flex flex-col items-center">
        <p className="text-center font-bold text-2xl text-gray-700 my-2">{h1}</p>
        <p className="text-center text-gray-600">{h2}</p>
        <div className={`bg-sky-400 pt-1 w-20 my-5 ${"ml-" + m}`}></div>
    </div>
}

const Destination = ({city, num, link})=>{
    return <a href={`https://hotels.ng/hotels-in-${link}`} className="border-2 flex flex-col items-center border-sky-500 w-fit rounded-sm hover:bg-sky-500 cursor-pointer">
        <button className=" group cursor-pointer py-2 w-40">
            <p className= {`text-sky-400 font-bold text-l group-hover:text-white`}>Hotels in</p>
            <p className={`text-sky-400 font-bold text-l group-hover:text-white`}>{city}</p>
            <p className={`text-gray-500 text-md mt-2 group-hover:text-white`}>{num} hotels</p>
        </button>
    </a>
}

const Destinations = ()=>{
    return<div className="m-10">
        <Title 
        h1="Suggested Destinations in Nigeria" 
        h2="Below are the most popular travel destinations in Nigeria"
        m={125}/>
        <div className="flex flex-row justify-center gap-5"> 
            <Destination city="Lagos" num="3,642" link="lagos"/>
            <Destination city="Abuja" num="1,290" link="abuja"/>
            <Destination city="Port Harcourt" num="449" link="rivers/port-harcourt"/>
            <Destination city="Kaduna" num="331" link="kaduna"/>
            <Destination city="Uyo" num="223" link="akwaibom/uyo"/>
            <Destination city="Ibadan" num="518" link="oyo/ibadan"/>
        </div>
    </div>
}


const SuggestSect=()=>{
    return <div className="flex flex-col items-center justify-around m-20">
        <Destinations/>
    </div>
}

export default SuggestSect