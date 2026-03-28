import Header from "./Header.jsx"

const Welcome = () => {
return <div className="flex flex-col h-118 items-center justify-center bg-[url(/assets/v7-homepage1.jpg)] bg-cover bg-center bg-black/30 bg-blend-overlay text-white bg-no-repeat">
    <p className="text-4xl font-bold">Find and book hotels in Nigeria.</p>
    <p className="text-xl pt-2">Search through 13,722 hotels in Nigeria</p>
</div>
}

const Search = () => {

}

const HeadSect = ({dropdownCurrency, setdropdownCurrency, dropdownCall, setdropdownCall, dropdownAccount, setdropdownAccount}) => {
 return<div className="flex flex-col">
    <Header dropdownCall={dropdownCall} setdropdownCall={setdropdownCall} dropdownCurrency={dropdownCurrency} setdropdownCurrency={setdropdownCurrency} dropdownAccount={dropdownAccount} setdropdownAccount={setdropdownAccount}/>
    <Welcome/>
 </div> 
}

export default HeadSect;