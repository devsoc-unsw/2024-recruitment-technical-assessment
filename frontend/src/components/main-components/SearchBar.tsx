const SearchBar = () => {
  return (
    <div className="w-full flex items-center p-1 rounded border-blue-300 border-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input type="search" placeholder="Search for a course e.g. COMP1511" className="w-full p-1" />
    </div>

  )
}

export default SearchBar
