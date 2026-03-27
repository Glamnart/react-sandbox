import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faNairaSign,faCircleUser,faPhone,faEuroSign,faDollarSign,faPoundSign,faIndianRupeeSign,faWonSign,faYenSign} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Currencies = [
    <><img src='/assets/nigeria-flag.svg' className='h-8'></img><FontAwesomeIcon icon={faNairaSign}/></>,
    <><img src='/assets/euro.png' className='h-8'></img><FontAwesomeIcon icon={faEuroSign}/></>,
    <><img src='/assets/dollar.png' className='h-10'></img><FontAwesomeIcon icon={faDollarSign}/></>,
    <><img src='/assets/pounds.png' className='h-8'></img><FontAwesomeIcon icon={faPoundSign}/></>,
    <><img src='/assets/rupee.png' className='h-10'></img><FontAwesomeIcon icon={faIndianRupeeSign}/></>,
    <><img src='/assets/dollar.png' className='h-10'></img><FontAwesomeIcon icon={faWonSign}/></>,
    <><img src='/assets/dollar.png' className='h-10'></img><FontAwesomeIcon icon={faYenSign}/></>
]

const ContactDropDown = ({show})=>{
    const display = show ? "flex" : "hidden"
    return <div className= {`absolute top-18 z-2 right-76 ${display} flex-col items-center h-50 border bg-white text-black rounded-md`} >
        <a className= "hover:bg-gray-200 py-2 " href='https://api.whatsapp.com/send?phone=2348144084721&text=I%27m%20interested%20in%20booking%20a%20hotel'><button className='flex flex-row'><img className='h-6'src="/assets/whatsapp-icon.png"/>+234 814 408 4721</button></a>
        <a className= "hover:bg-gray-200 py-2 " href='tel:+2348089530980'><button><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 814 880 8800</button></a>
        <a className= "hover:bg-gray-200 py-2 " href='tel:+2348089530980'><button><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 808 953 0980</button></a>
        <a className= "hover:bg-gray-200 py-2 " href='tel:+2348089530980'><button><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 813 697 1836</button></a>
        <a className= "hover:bg-gray-200 pt-2 " href='tel:+2349161180666'><button className='flex flex-row items-center'><img className='h-7' src="/assets/social-media-logo-design.png"/>+234 916 118 0666</button></a>
    </div>
}

const CurrencyDropDown = ({show,currentCurrency,setcurrentCurrency})=>{
    const display = show ? "flex" : "hidden"
    return <div className= {`absolute top-18 z-2 right-34 ${display} flex-col items-start h-50 border bg-white text-black rounded-md justify-between`} >
        <button onClick={()=>{setcurrentCurrency(1)}} className= {`hover:bg-gray-200 pr-1 ${currentCurrency === 1 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faNairaSign}/>Nigerian Naira</button>
        <button onClick={()=>{setcurrentCurrency(2)}} className= {`hover:bg-gray-200 ${currentCurrency === 2 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faEuroSign}/>European Euro</button>
        <button onClick={()=>{setcurrentCurrency(3)}}className= {`hover:bg-gray-200 pr-8 ${currentCurrency === 3 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faDollarSign}/>U.S. Dollar </button>
        <button onClick={()=>{setcurrentCurrency(4)}} className= {`hover:bg-gray-200 pr-3 ${currentCurrency === 4 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faPoundSign}/>British Pound</button>
        <button onClick={()=>{setcurrentCurrency(5)}} className= {`hover:bg-gray-200 pr-3 ${currentCurrency === 5 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faIndianRupeeSign}/>Indian Rupee</button>
        <button onClick={()=>{setcurrentCurrency(6)}} className= {`hover:bg-gray-200 pr-5 ${currentCurrency === 6 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faWonSign}/>Korean Won</button>
        <button onClick={()=>{setcurrentCurrency(7)}} className= {`hover:bg-gray-200 pr-5 ${currentCurrency === 7 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faYenSign}/>Chinese Yen</button>
    </div>
}

/*const ContactDropDown = ({show})=>{
    const display = show ? "flex" : "hidden"
    return <div className= {`absolute top-18 z-2 right-75 ${display} flex-col items-center h-50 border bg-white text-black`} >
        <a className= "hover:bg-gray-200 py-2 " href='https://api.whatsapp.com/send?phone=2348144084721&text=I%27m%20interested%20in%20booking%20a%20hotel'><button className='flex flex-row'><img className='h-6'src="/assets/whatsapp-icon.png"/>+234 814 408 4721</button></a>
        <a className= "hover:bg-gray-200 py-2 " href='tel:+2348089530980'><button><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 814 880 8800</button></a>
        <a className= "hover:bg-gray-200 py-2 " href='tel:+2348089530980'><button><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 808 953 0980</button></a>
        <a className= "hover:bg-gray-200 py-2 " href='tel:+2348089530980'><button><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 813 697 1836</button></a>
        <a className= "hover:bg-gray-200 pt-2 " href='tel:+2349161180666'><button className='flex flex-row items-center'><img className='h-7' src="/assets/social-media-logo-design.png"/>+234 916 118 0666</button></a>
    </div>
}*/

const Header = () => {
    const [dropdownCall,setdropdownCall] = useState(false)
    const [dropdownCurrency,setdropdownCurrency] = useState(false);
    const [currentCurrency,setcurrentCurrency] = useState(1);
    return <div className="bg-sky-400 flex flex-row w-screen text-white">
        <div className="flex-1 flex flex-row border-r-2 border-white items-center pl-10 pr-4 py-4">
            <a href="https://hotels.ng/"><img src="/assets/logo.png" alt="Hotel.ng Logo" className="h-10"></img></a>
            <a href="https://api.whatsapp.com/send?phone=2348144084721" className="ml-auto" ><img src="/assets/whatsapp-icon.png" alt="Whatsapp logo" className="h-10"></img></a>
        </div>
        <div className="flex flex-row px-3 py-4">
            <img src="/assets/navbar-contact-min.jpg" className='rounded-full z-1 absolute top-3 right-123'></img>
            <button onClick={() => setdropdownCall(!dropdownCall)} className='rounded-4xl bg-indigo-900 pr-4 pl-10 relative'>
                <div className='text-sm text-sky-400'>You can call us to book your hotel</div>
                <div className='text-sm'>+234 814 880 8800 <FontAwesomeIcon icon={faCaretDown}/></div>
            </button>
        </div>
        <div className='border-x-2 border-white pt-5 px-3 pb-3'>
            <button onClick={() => setdropdownCurrency(!dropdownCurrency)} className='flex flex-row items-center'>
                {Currencies[currentCurrency-1]}
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </div>
        <div className='flex flex-row items-center pr-10 pl-3 py-4'>
            <FontAwesomeIcon icon={faCircleUser}/>
            <p>Account</p>
            <FontAwesomeIcon icon={faCaretDown}/>
        </div>
        <ContactDropDown show ={dropdownCall}/>
        <CurrencyDropDown show={dropdownCurrency} currentCurrency={currentCurrency} setcurrentCurrency={setcurrentCurrency}/>
    </div>
}

const Welcome = () => {

}

const Search = () => {

}

const HeadSect = () => {
 return<div>
    <Header/>
 </div> 
}

export default HeadSect;