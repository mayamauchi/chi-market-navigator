import {useState} from "react";
import '../App.css'
import magnifyingGlassIcon from "/images/magnifying-glass-icon-26762.png"; 


function Searchbar() {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
      };

    return (
        <div className="flex items-center flex-start h-screen bg-gray-100 flex-col">
      <div className="w-1/3">
        <input
          className="px-4 py-3 w-3/4 rounded-full bg-white border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 search-input"
          type="text"
          value={input}
          placeholder="Search for your market here"
          onChange={handleChange}
          style={{
            background: `url(${magnifyingGlassIcon}) no-repeat right`,
            backgroundSize: "20px",
          }}
        />
      </div>
    </div>
    )
}

export default Searchbar