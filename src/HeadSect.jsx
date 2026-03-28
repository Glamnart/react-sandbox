import Header from "./Header.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faCalendar} from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {
return <div className="flex flex-col w-screen h-118 items-center justify-center bg-[url(/assets/v7-homepage1.jpg)] bg-cover bg-center bg-black/30 bg-blend-overlay text-white bg-no-repeat">
    <p className="text-4xl font-bold">Find and book hotels in Nigeria.</p>
    <p className="text-xl pt-2">Search through 13,722 hotels in Nigeria</p>
</div>
}

const Search = () => {
 return<form action="https://hotels.ng/hotels/search?" className="z-3 flex flex-row justify-around items-center border border-gray-300 w-fit py-8 px-10 shadow-2xl absolute top-120 bg-white ">
    <div className="flex flex-row justify-start border border-gray-500 items-center rounded-md h-10 w-120">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500 mx-2"/>
        <input
            placeholder="Search for a city or particular hotel"
            name="query"
            className="outline-0 w-70"
            id="query"
            type="text"
            required
            />
        </div>
        <div className="flex flex-row justify-start border border-gray-500 items-center rounded-md mx-2 w-70 h-10">
            <FontAwesomeIcon icon={faCalendar} className="text-gray-500 mx-2"/>
            <input 
                placeholder="Check In - Check Out"
                className="outline-0"
            />
        </div>
        <button type="submit" className="bg-sky-400 text-white rounded-md px-10 py-2">Find Hotels</button>
 </form>
}

const HeadSect = ({dropdownCurrency, setdropdownCurrency, dropdownCall, setdropdownCall, dropdownAccount, setdropdownAccount}) => {
 return<div className="flex flex-col items-center">
    <Header dropdownCall={dropdownCall} setdropdownCall={setdropdownCall} dropdownCurrency={dropdownCurrency} setdropdownCurrency={setdropdownCurrency} dropdownAccount={dropdownAccount} setdropdownAccount={setdropdownAccount}/>
    <Welcome/>
    <Search/>
 </div> 
}

export default HeadSect;