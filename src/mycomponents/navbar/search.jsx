const search = ({search_button}) => {

  return (
    <div className='gap-1'>
      <input id="search-text" type="search" placeholder="Search Latest " className="p-2 rounded-lg  focus:outline-none focus:ring focus:border-blue-300 shadow-lg shadow-blue-500/50 " />
      <button id="search-button" className="search-button rounded-sm bg-blue-300 shadow-sm border"onClick={search_button}>Search</button>
    </div>
  )
}

export default search

