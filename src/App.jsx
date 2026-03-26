import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="p-10 flex gap-4">
      {/* Basic usage */}
      <FontAwesomeIcon icon={faHouse} className="text-blue-500 size-6" />
      
      {/* With Tailwind classes for styling */}
      <FontAwesomeIcon 
        icon={faMagnifyingGlass} 
        className="text-gray-400 hover:text-black cursor-pointer transition-colors" 
      />
    </div>
  )

}

export default App