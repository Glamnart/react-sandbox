import Header from "./Header.jsx"

const Welcome = () => {

}

const Search = () => {

}

const HeadSect = ({dropdownCurrency, setdropdownCurrency, dropdownCall, setdropdownCall, dropdownAccount, setdropdownAccount}) => {
 return<div>
    <Header dropdownCall={dropdownCall} setdropdownCall={setdropdownCall} dropdownCurrency={dropdownCurrency} setdropdownCurrency={setdropdownCurrency} dropdownAccount={dropdownAccount} setdropdownAccount={setdropdownAccount}/>
 </div> 
}

export default HeadSect;