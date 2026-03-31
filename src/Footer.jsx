import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

const Titles = ()=>{
    return <div className="text-gray-400 flex justify-around w-250 text-sm mt-10 p-1 border-b border-gray-200 ">
        <p>Company</p>
        <p>Community</p>
        <p className="ml-10">Top Cities</p>
        <p>Top Destinations</p>
        <p>Top Hotels</p>
    </div>
}

const Company = ()=>{
    return<div className="text-sky-400 text-sm flex flex-col items-start ml-5">
        <a href="https://hotels.ng/visa">Visa</a>
        <a href="https://blog.hotels.ng/">Blog</a>
        <a href="https://hotels.ng/about">About Us</a>
        <a href="https://hotels.ng/press">Press Page</a>
        <a href="https://hotels.ng/jobs">Job Openings</a>
        <a href="https://hotels.ng/privacy">Privacy Policy</a>
        <a href="https://hotels.ng/terms">Terms of Service</a>
        <a href="https://hotels.ng/how-it-works">How It Works</a>
        <a href="https://hng.tech/internship">HNG Internship</a>
    </div>
}

const Community = ()=>{
    return<div className="text-sky-400 text-sm flex flex-col items-start">
        <a href="https://www.twitter.com/hotelsng">Twitter</a>
        <a href="https://www.facebook.com/hotelsng">Facebook</a>
        <a href="https://instagram.com/hotelsng">Instagram</a>
        <a href="https://hotels.ng/travel">Travel Blog</a>
        <a href="https://hotels.ng/places">Tourist Attractions</a>
        <a href="https://hotels.ng/guides">Travel guide</a>
        <a href="https://hotels.ng/top-hotels">Top Hotels in Nigeria</a>
        <a href="https://hotels.ng/places/top_places">Top Places in Nigeria</a>
        <a href="https://cars.ng/">Cars in Nigeria</a>
    </div>
}

const TopCities = ()=>{
    return<div className="text-sky-400 text-sm flex flex-col items-start">
        <a href="https://hotels.ng/hotels-in-lagos">Hotels in Lagos</a>
        <a href="https://hotels.ng/hotels-in-cross-river/calabar">Hotels in Calabar</a>
        <a href="https://hotels.ng/hotels-in-abuja">Hotels in Abuja</a>
        <a href="https://hotels.ng/hotels-in-lagos/ikoyi">Hotels in Ikoyi</a>
        <a href="https://hotels.ng/hotels-in-rivers/port-harcourt">Hotels in Port Harcourt</a>
        <a href="https://hotels.ng/hotels-in-imo/owerri">Hotels in Owerri</a>
        <a href="https://hotels.ng/hotels-in-lagos/maryland">Hotels in Maryland</a>
        <a href="https://hotels.ng/hotels-in-abia">Hotels in Abia</a>
        <a href="https://hotels.ng/hotels-in-plateau/jos">Hotels in Jos</a>
    </div>
}

const TopDestinations = ()=>{
    return<div className="text-sky-400 text-sm flex flex-col items-start">
         <a href="https://hotels.ng/places/abuja">Abuja</a>
        <a href="https://hotels.ng/places/calabar">Calabar</a>
        <a href="https://hotels.ng/places/lagos">Lagos</a>
        <a href="https://hotels.ng/places/enugu">Enugu</a>
        <a href="https://hotels.ng/places/port-harcourt">Port Harcourt</a>
        <a href="https://hotels.ng/places/benin">Benin city</a>
        <a href="https://hotels.ng/places/ibadan">Ibadan</a>
        <a href="https://hotels.ng/places/abeokuta">Abeokuta</a>
    </div>
}

const TopHotels = ()=>{
    return<div className="text-sky-400 text-sm flex flex-col items-start w-50 -mr-18">
        <a href="https://hotels.ng/hotel/26241-ibis-lagos-airport-lagos">Delta Continental Hotel &amp; Suites</a>
        <a href="https://hotels.ng/hotel/52497-hotel-ibis-lagos-ikeja-lagos">Hotel Ibis Lagos Ikeja</a>
        <a href="https://hotels.ng/hotel/98947-eko-hotel-suites-lagos">Eko Hotel </a>
        <a href="https://hotels.ng/hotel/1470720-the-safron-hotel">The Safron Hotel</a>
        <a href="https://hotels.ng/hotel/34353-grand-ibro-hotel-abuja">Grand Ibro Hotel</a>
        <a href="https://hotels.ng/hotel/59691-intercontinental-lagos-hotel-lagos">The Lagos Continental Hotel </a>
        <a href="https://hotels.ng/hotel/55821-beni-apartments-lagos">Beni Apartments</a>
        <a href="https://hotels.ng/hotel/1008541-shore-gate-hotel-lagos">Shoregate Hotel</a>
        <a href="https://hotels.ng/hotel/HN365015S-rosewood-inn">Rosewood Inn</a>
        <a href="https://hotels.ng/hotel/HN351355S-academy-guest-house">Academy Guest House</a>
        <a href="https://hotels.ng/hotel/HN351364S-tranquil-oasis-ltd">Tranquil Oasis Ltd</a>
        <a href="https://hotels.ng/hotel/1015136-citiheight-hotel">CitiHeight Hotel</a>
        <a href="https://hotels.ng/hotel/49373-catholic-guest-house-abuja">Pope John Paul Catholic Guest House</a>
        <a href="https://hotels.ng/hotel/998818-chantella-suites-lagos">Choice Suites (Formerly Chantella Suites)</a>
        <a href="https://hotels.ng/hotel/92856-the-avenue-suites-lagos">Avenue Suites</a>
    </div>
}

const Links = ()=>{
    return<div className="flex justify-center flex-row w-225 border-b border-gray-200 gap-25" >
        <Company/>
        <Community/>
        <TopCities/>
        <TopDestinations/>
        <TopHotels/>
    </div>
}

const Bottom = ()=>{
    return <div className='flex flex-row justify-between w-225 items-center py-3 text-gray-600'>
        <p>Copyright <FontAwesomeIcon icon={faCopyright} className='text-gray-500'/> 2026 Hotel Booking Limited All Rights Reserved</p>
        <div className='flex flex-row gap-3 items-center'>
            <p className='text-nowrap'>Certified by:</p>
            <img src='/assets/nanta.svg' className='h-10'></img>
            <img src='assets/ntdc.svg' className='h-10'></img>
        </div>
    </div>
}

const Footer = ()=>{
    return<div className="flex justify-center flex-col items-center w-screen">
        <Titles/>
        <Links/>
        <Bottom/>
    </div>
}

export default Footer