import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faNairaSign,faCircleUser,faPhone,faEuroSign,faDollarSign,faPoundSign,faIndianRupeeSign,faWonSign,faYenSign} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Currencies = [
    <><img src='/assets/nigeria-flag.svg' className='h-6'></img><FontAwesomeIcon icon={faNairaSign}/></>,
    <><img src='/assets/euro.png' className='h-6'></img><FontAwesomeIcon icon={faEuroSign}/></>,
    <><img src='/assets/usa.png' className='h-6'></img><FontAwesomeIcon icon={faDollarSign}/></>,
    <><img src='/assets/pounds.png' className='h-6'></img><FontAwesomeIcon icon={faPoundSign}/></>,
    <><img src='/assets/rupee.png' className='h-6'></img><FontAwesomeIcon icon={faIndianRupeeSign}/></>,
    <><img src='/assets/Korea.png' className='h-6'></img><FontAwesomeIcon icon={faWonSign}/></>,
    <><img src='/assets/China.png' className='h-6'></img><FontAwesomeIcon icon={faYenSign}/></>
]

const ContactDropDown = ({show})=>{
    const display = show ? "flex" : "hidden"
    return <div className= {`absolute top-18 z-2 right-79 ${display} flex-col items-center h-50 border bg-white text-black rounded-md`} >
        <a className= "hover:bg-gray-100 py-2 " href='https://api.whatsapp.com/send?phone=2348144084721&text=I%27m%20interested%20in%20booking%20a%20hotel'><button className='flex cursor-pointer flex-row'><img className='h-6'src="/assets/whatsapp-icon.png"/>+234 814 408 4721</button></a>
        <a className= "hover:bg-gray-100 py-2 " href='tel:+2348089530980'><button className='cursor-pointer'><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 814 880 8800</button></a>
        <a className= "hover:bg-gray-100 py-2 " href='tel:+2348089530980'><button className='cursor-pointer'><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 808 953 0980</button></a>
        <a className= "hover:bg-gray-100 py-2 " href='tel:+2348089530980'><button className='cursor-pointer'><FontAwesomeIcon icon={faPhone} className='text-indigo-700'/>+234 813 697 1836</button></a>
        <a className= "hover:bg-gray-100 pt-2 " href='tel:+2349161180666'><button className='flex flex-row cursor-pointer items-center'><img className='h-7' src="/assets/social-media-logo-design.png"/>+234 916 118 0666</button></a>
    </div>
}

const CurrencyDropDown = ({show,currentCurrency,setcurrentCurrency})=>{
    const display = show ? "flex" : "hidden"
    return <div className= {`absolute top-18 z-2 right-37 ${display} flex-col items-start h-50 border bg-white text-black rounded-md justify-between`} >
        <button onClick={()=>{setcurrentCurrency(1)}} className= {`hover:bg-gray-100 pr-1 cursor-pointer ${currentCurrency === 1 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faNairaSign}/>Nigerian Naira</button>
        <button onClick={()=>{setcurrentCurrency(2)}} className= {`hover:bg-gray-100 cursor-pointer ${currentCurrency === 2 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faEuroSign}/>European Euro</button>
        <button onClick={()=>{setcurrentCurrency(3)}}className= {`hover:bg-gray-1 00 pr-8 cursor-pointer ${currentCurrency === 3 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faDollarSign}/>U.S. Dollar </button>
        <button onClick={()=>{setcurrentCurrency(4)}} className= {`hover:bg-gray-100 pr-3 cursor-pointer ${currentCurrency === 4 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faPoundSign}/>British Pound</button>
        <button onClick={()=>{setcurrentCurrency(5)}} className= {`hover:bg-gray-100 pr-3 cursor-pointer ${currentCurrency === 5 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faIndianRupeeSign}/>Indian Rupee</button>
        <button onClick={()=>{setcurrentCurrency(6)}} className= {`hover:bg-gray-100 pr-5 cursor-pointer ${currentCurrency === 6 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faWonSign}/>Korean Won</button>
        <button onClick={()=>{setcurrentCurrency(7)}} className= {`hover:bg-gray-100 pr-5 cursor-pointer ${currentCurrency === 7 && "bg-sky-400 text-white"}`}><FontAwesomeIcon icon={faYenSign}/>Chinese Yen</button>
    </div>
}

const AccountDropDown = ({show})=>{
    const display = show ? "flex" : "hidden"
    return <div className= {`absolute top-18 z-2 right-2 ${display} flex-col items-center w-37 h-45 justify-between border bg-white text-black`} >
        <p className='text-wrap text-center'>Sign in to access exclusive member deals</p>
        <a href='https://hotels.ng/signin' ><button className='cursor-pointer bg-sky-400 text-white rounded-sm py-2 px-8'>Sign in</button></a>
        <p>New here? <a className='text-sky-400' href="https://hotels.ng/signup">Sign up</a></p>
    </div>
}

const Header = ({dropdownCurrency, setdropdownCurrency, dropdownCall, setdropdownCall, dropdownAccount, setdropdownAccount}) => {
    const [currentCurrency,setcurrentCurrency] = useState(1);
    return <div className="bg-sky-400 flex items-center flex-row w-screen text-white">
        <div className="flex-1 flex flex-row border-r-2 border-white items-center pl-10 pr-4 py-4">
            <a href="https://hotels.ng/"><img src="/assets/logo.png" alt="Hotel.ng Logo" className="h-10"></img></a>
            <a href="https://api.whatsapp.com/send?phone=2348144084721" className="ml-auto" ><img src="/assets/whatsapp-icon.png" alt="Whatsapp logo" className="h-10"></img></a>
        </div>
        <div className="flex flex-row px-3 py-4">
            <img src="/assets/navbar-contact-min.jpg" className='rounded-full z-1 absolute top-3 right-123'></img>
            <button onClick={() => setdropdownCall(!dropdownCall)} className='rounded-4xl bg-indigo-900 pr-4 pl-10 relative cursor-pointer'>
                <div className='text-sm text-sky-400'>You can call us to book your hotel</div>
                <div className='text-sm'>+234 814 880 8800 <FontAwesomeIcon icon={faCaretDown}/></div>
            </button>
        </div>
        <div className='border-x-2 border-white px-3 py-6'>
            <button onClick={() => setdropdownCurrency(!dropdownCurrency)} className='flex flex-row cursor-pointer items-center'>
                {Currencies[currentCurrency-1]}
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </div>
        <div className='flex flex-row items-center pr-10 pl-3 py-4'>
            <FontAwesomeIcon icon={faCircleUser}/>
            <button onClick={()=>setdropdownAccount(!dropdownAccount)} className="flex flex-row justify-around items-center cursor-pointer ml-2">
            <p>Account</p>
            <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </div>
        <ContactDropDown show ={dropdownCall}/>
        <CurrencyDropDown show={dropdownCurrency} currentCurrency={currentCurrency} setcurrentCurrency={setcurrentCurrency}/>
        <AccountDropDown show={dropdownAccount}/>
    </div>
}

export default Header