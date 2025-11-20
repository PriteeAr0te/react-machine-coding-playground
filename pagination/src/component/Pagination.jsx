
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

    return (
        <div className="w-full justify-center items-center m-auto flex gap-2">
            <button
                disabled={currentPage === 0}
                className={`text-black py-2 px-2.5 border border-[#D0D5DD] rounded-lg focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed`}
                onClick={handlePrevClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
            </button>
            {[...Array(totalPages).keys()].map((page) => (
                <button
                    onClick={() => handlePageChange(page)}
                    className={`text-black py-2 px-4 border border-[#D0D5DD] rounded-lg cursor-pointer focus:border-blue-500 focus:outline-none ${currentPage === page ? 'bg-blue-500 text-white' : ''}`} key={page}
                >
                    {page + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages - 1}
                className={`text-black py-2 px-2.5 border border-[#D0D5DD] rounded-lg focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed`}
                onClick={handleNextClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
            </button>
        </div>
    )
}

export default Pagination