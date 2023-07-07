import {useState} from "react";
import '../App.css'


function Searchbar() {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
      };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/3">
        <input
          className="px-2 py-3 w-full rounded-full bg-white border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 search-input"
          type="text"
          value={input}
          placeholder="Search for your market here"
          onChange={handleChange}
        />
      </div>
    </div>
    )
}

export default Searchbar