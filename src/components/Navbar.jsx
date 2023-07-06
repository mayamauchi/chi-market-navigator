
function Navbar() {

    return (
      <>
        <div className="bg-white flex" >
        <h1 className="text-5xl/[54px] font-black font-montserrat ml-4">Market Navigator</h1>
        <ul className="flex ml-auto">
          <li className="list-none mr-10 mt-3 font-montserrat text-20">Market Schedule</li>
          <li className="list-none mr-10 mt-3 font-montserrat text-20">Market Map</li>
          <li className="list-none mr-10 mt-3 font-montserrat text-20">Articles</li>
        </ul>
        </div>
      </>
    )
  }
  
  export default Navbar