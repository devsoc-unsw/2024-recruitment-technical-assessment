const Sort = () => {
  return (
    <select className="w-48 overflow-auto py-2 px-3 rounded bg-white border-2 border-gray-300 text-gray-500 mb-10">
      <option value="">Sort by</option>
      <option value="a-z">Alphabetical (A-Z)</option>
      <option value="z-a">Alphabetical (Z-A)</option>
      <option value="overall rating">Overall Rating</option>
      <option value="enjoyability">Enjoyability</option>
      <option value="usefulness">Usefulness</option>
      <option value="manageability">Manageability</option>
    </select>

  )
}

export default Sort
