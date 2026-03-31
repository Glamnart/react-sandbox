import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'

const Contact = ()=>{
    return <div className="flex flex-col items-center bg-gray-100/40 h-60 justify-center">
        <p className="font-bold text-3xl text-gray-700">Special Hotel Deals and Offers</p>
        <p className="my-4 text-gray-700">Enter your email address to recieve secret hotels deals</p>
        <form >
            <input
            className="border border-gray-300 rounded-sm pl-6 pr-60 py-2"
            placeholder="Enter your email address"
            type="email"
            ></input>
            <button  type="reset" className="bg-sky-400 text-white ml-4 px-6 py-2 rounded-md group" >Subscribe</button>
        </form>
    </div>
}

const Features = ()=>{
    return<div className="flex flex-col items-center h-80 mt-15">
        <p className="text-2xl font-bold text-gray-700">We've been featured in</p>
        <div className={`bg-sky-400 pt-1 w-25 mt-3`}></div>
        <div className="mt-15 flex flex-row justify-between w-6xl">
            <a href="http://www.bbc.co.uk/news/business-24381684"><img src="/assets/bbc.png"></img></a>
            <a href="http://www.forbes.com/sites/mfonobongnsehe/2015/02/05/30-most-promising-young-entrepreneurs-in-africa-2015/3/"><img src="/assets/forbes.png"></img></a>
            <a href="https://www.newsweek.com/2014/05/30/money-move-251883.html"><img src="/assets/newsweek.png"></img></a>
            <a href="https://itweb.africa/content/mQwkoq6Kxnlv3r9A"><img src="/assets/itweb.png"></img></a>
        </div>
    </div>
}

const Add = ()=>{
    return<div className="flex flex-col items-center gap-8">
        <p className="text-3xl text-gray-700">Get More Bookings for Your Hotel</p>
        <p className="text-gray-600">Find out why over 13,137 hotels managers trust Hotels.ng</p>
        <button className="bg-sky-400 text-white rounded-sm px-10 py-2">Add Your Hotel</button>
    </div>
}

const Download = ()=>{
    return<div className="bg-sky-100/50 flex items-center justify-center gap-15 mt-5">
        <img src="/assets/app-image.png"></img>
        <div>
            <p className="text-blue-400 font-bold text-6xl w-100 mb-6">Get the Hotels.ng app</p>
            <p className="text-gray-700 font-bold text-3xl w-100">Download the hotels.ng app and book a hotel instantly</p>
            <p className="text-gray-700 text-md w-90 my-4">Book your hotel instantly with our Android and iOS Apps.</p>
            <div className="flex flex-row justify-between">
                <img src="/assets/google-play-min.png"/>
                <img src="/assets/apple-store.png"/>
            </div>
        </div>
    </div>
}

const Email = ()=>{
    return<div className="bg-blue-950 flex flex-row items-center h-fit justify-center py-8">
        <div className="bg-white rounded-full w-fit p-2 mr-1 ">
            <FontAwesomeIcon icon={faLock} className='text-sky-400'/>
        </div>
        <div className='flex flex-col justify-around items-start mr-6'>
            <p className='text-white '>Enter your email address to unlock hotel deals</p>
            <p className='text-blue-400 text-sm'>Sign up to start receiving exclusive offers</p>
        </div>
        <form>
            <input
            className="rounded-l-sm pl-6 pr-20 py-2 bg-white"
            placeholder="Enter your email address"
            type="email"
            >
            </input>
            <button  type="reset" className="bg-sky-400 text-white px-6 py-2 rounded-r-sm" onClick={()=>{scrollTo(20,3000)}} >Unlock</button>
        </form>
    </div>
}

const InfoSect = ()=>{
    return <div>
        <Contact/>
        <Features/>
        <Add/>
        <Download/>
        <Email/>
    </div>
}

export default InfoSect