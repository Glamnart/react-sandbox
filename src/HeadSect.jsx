import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faNairaSign,faCircleUser} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return <div className="bg-sky-400 flex flex-row w-screen text-white">
        <div className="flex-1 flex flex-row border-r-2 border-white items-center pl-10 pr-4 py-4">
            <a href="https://hotels.ng/"><img src="/assets/logo.png" alt="Hotel.ng Logo" className="h-10"></img></a>
            <a href="https://api.whatsapp.com/send?phone=2348144084721" className="ml-auto" ><img src="/assets/whatsapp-icon.png" alt="Whatsapp logo" className="h-10"></img></a>
        </div>
        <div className="flex flex-row px-3 py-4">
            <img src="/assets/navbar-contact-min.jpg" className='rounded-full z-1 absolute top-3 right-123'></img>
            <button className='rounded-4xl bg-indigo-900 pr-4 pl-10 relative'>
                <div className='text-sm text-sky-400'>You can call us to book your hotel</div>
                <div className='text-sm'>+234 814 880 8800 <FontAwesomeIcon icon={faCaretDown}/></div>
            </button>
        </div>
        <div className='border-x-2 border-white pt-5 px-3 pb-3'>
            <button className='flex flex-row items-center'>
                <img src='/assets/nigeria-flag.svg' className='h-8'></img>
                <FontAwesomeIcon icon={faNairaSign}/>
                <FontAwesomeIcon icon={faCaretDown}/>
            </button>
        </div>
        <div className='flex flex-row items-center pr-10 pl-3 py-4'>
            <FontAwesomeIcon icon={faCircleUser}/>
            <p>Account</p>
            <FontAwesomeIcon icon={faCaretDown}/>
        </div>
    </div>
}

const Welcome = () => {

}

const Search = () => {

}

const HeadSect = () => {
 return <Header/>
}

export default HeadSect;