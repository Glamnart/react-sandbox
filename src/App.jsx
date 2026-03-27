import { useState } from "react"
import HeadSect from "./HeadSect.jsx"

export default function App(){
  const [dropdownCall,setdropdownCall] = useState(false)
  const [dropdownCurrency,setdropdownCurrency] = useState(false);
  const [dropdownAccount, setdropdownAccount] = useState(false)
  return <div onClick={()=>{dropdownAccount? setdropdownAccount((dropdownAccount?false:true)):dropdownCall? setdropdownCall(dropdownCall?false:true): dropdownCurrency&& setdropdownCurrency(dropdownCurrency?false:true);}}>
      <HeadSect dropdownCall={dropdownCall} setdropdownCall={setdropdownCall} dropdownCurrency={dropdownCurrency} setdropdownCurrency={setdropdownCurrency} dropdownAccount={dropdownAccount} setdropdownAccount={setdropdownAccount}/>
    </div>
}
