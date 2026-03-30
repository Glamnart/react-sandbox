import { deal, cityHotels, citiesInfo, hotelReview } from "./neededInfo.js"

const Title = ({h1,h2,m}) => {
    return <div flexName="flex flex-col items-center">
        <p className="text-center font-bold text-2xl text-gray-700 my-2">{h1}</p>
        <div className="relative mb-15">
        <p className="text-center text-gray-600">{h2}</p>
        <div className={`bg-sky-400 pt-1 w-25 absolute -bottom-5 ${m}`}></div>
        </div>
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

    const destinationRow = (cityHotels)=>{
        const row = Array(6).fill(null);

        const destinations = row.map((city,cityNo)=>{
            const {place,num,link} = cityHotels[cityNo];
            return <Destination city={place} num={num} link={link}/>
        })
        return <div className="flex flex-row justify-center gap-5"> 
         {destinations}
        </div>
    }

    return<div className="m-10">
        <Title 
        h1="Suggested Destinations in Nigeria" 
        h2="Below are the most popular travel destinations in Nigeria"
        m="left-123"/>
        {destinationRow(cityHotels)}
    </div>
}

const Deal = ({link,image,name,city,state,deal,cityLink,stateLink})=>{
    return <div>
        <div className="flex flex-col relative">
            <a className="group" href={link}>
                <img className="w-85 relative h-50" src={image} alt={name}/>
                <div className="absolute top-0 bg-black/23 w-85 h-50 hidden group-hover:flex"></div>
            </a>
            <div className="border border-gray-400 border-t-0 flex flex-col gap-2 pl-4 pt-6 pb-4 w-85 rounded-b-md">
            <a className="text-sky-400 font-bold w-52 overflow-hidden text-nowrap text-ellipsis text-xl" href={link}>{name}</a>
            <div>
                <a className="text-gray-700" href={`https://hotels.ng/hotels-in-${cityLink}`}>{city},</a>
                <a className="text-gray-700" href={`https://hotels.ng/hotels-in-${stateLink}`}>{state}</a>
            </div>
            </div>
            <div className="absolute top-3 -left-4">
                <div className="text-white bg-orange-400 z-9 text-nowrap overflow-hidden text-sm py-1 px-3 flex items-center w-45">
                    Up to <div className="text-xl font-bold mx-1">{deal}%</div> off
                </div>
                <div className="bg-orange-600 absolute left-1.5 -z-1 -bottom-3 w-5.5 rotate-45 py-3"> 
                </div>
            </div>
        </div>
    </div>
}

const Deals = ()=>{

    const printDeals = (deal) => {
        let table = Array(2).fill(Array(3).fill(null));

        let rows = table.map((row,rowNo)=>{
            const index = rowNo*3;

            let tags = row.map((box, boxNo)=>{
                const {link,image,name,city,state,dealNo,cityLink,stateLink} = deal[index+boxNo]
                return <Deal link = {link} image={image} name={name} city={city} state={state} deal={dealNo} cityLink={cityLink} stateLink={stateLink}/>
            })

            return <div className="flex gap-7.5 my-8">
                {tags}
            </div>
        }) 
        return rows;
    }


    return <div>
        <Title 
        h1="Today's Top Hotel Deals"
        h2="A selection of the best hotel deals, only available today"
        m="left-123"/>
        {printDeals(deal)}
    </div>
}

const Popular = ({place,no,link,bgPic}) =>{
    return <div className="relative group overflow-hidden">
        <div className={`${bgPic} bg-black/40 bg-blend-overlay bg-cover w-80 h-60 rounded-md text-white flex flex-col items-center bg-no-repeat bg-center justify-center`}>
            <p className="text-xl">{no}</p>
            <p className="text-2xl font-bold">{place + " Hotels"}</p>
        </div>
        
        <div className="bg-black/50 h-20 w-80 items-center justify-center absolute bottom-0 group-hover:translate-y-0 flex ease-in-out transform transition-transform duration-300 origin-bottom translate-y-full">
            <a href={`https://hotels.ng/hotels-in-${link}`} className="border-white border text-white p-3 rounded-md hover:bg-sky-400 hover:border-0">
                <button className="cursor-pointer">{"Book Hotels in " + place}</button>
            </a>
        </div>
    </div>
}

const Populars = ()=>{

    const printCities = (citiesInfo) => {
        let table = Array(2).fill(Array(3).fill(null));

        let rows = table.map((row,rowNo)=>{
            const index = rowNo*3;

            let tags = row.map((box, boxNo)=>{
                const {place, no, link, bgPic} = citiesInfo[index+boxNo]
                return <Popular place={place} no={no} link={link} bgPic={bgPic}/>
            })

            return <div className="flex gap-7.5 my-8">
                {tags}
            </div>
        }) 
        return rows;
    }

    return<div>
        <Title 
        h1="Popular cities with Hotels.ng travellers"
        h2="See the top destinations people are traveling to"
        m="left-115"/>
        {printCities(citiesInfo)}
    </div>
}

const City = ({city,numHotel,numReview})=>{
    return <div className="flex flex-col text-wrap w-40 items-start"  >
        <a href={`https://hotels.ng/hotels-in-${city.toLowerCase()}`} className="font-bold text-sky-400 ">{`Hotels in ${city}`}</a>
        <div className="text-sm text-gray-700">{`${numHotel} hotels in ${city} with over ${numReview} hotel reviews`}</div>
    </div>
}

const Cities = () => {

    const printList = (hotelReview) => {
        let table = Array(8).fill(Array(5).fill(null));

        let rows = table.map((row,rowNo)=>{
            const index = rowNo*5;

            let places = row.map((place, placeNo)=>{
                const {city,numHotel,numReview} = hotelReview[index+placeNo]
                if((index+placeNo) > 37)
                    return  <></>
                else     
                    return <City city={city} numHotel={numHotel} numReview={numReview}/>
            })

            return <div className="flex gap-x-8 my-4">
                {places}
            </div>
        }) 
        return rows;
    }

    return<div>
        <Title 
        h1="Which City Do You Want To Book A Hotel?"
        h2="13,728 hotels in 1483 cities/ towns in Nigeria"
        m="left-106"/>
        {printList(hotelReview)}
    </div>
}

const SuggestSect=()=>{
    return <div className="flex flex-col items-center justify-around m-20">
        <Destinations/>
        <Deals/>
        <Populars/>
        <Cities/>
    </div>
}

export default SuggestSect