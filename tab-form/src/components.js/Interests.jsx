import React from 'react'

const Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData(prevState => ({
      ...prevState,
      interests: e.target.checked ?
        [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name)
    }));
  };


  return (
    <div className='max-w-7xl w-full h-full mx-auto min-h-full'>
      <form className='max-w-7xl mx-auto w-full h-full mt-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          <div className='w-full mb-3 flex gap-2 items-center'>
            <label className='font-semibold text-gray-900 cursor-pointer'>
              <input
                className="py-2 px-3 border border-[#D0D5DD] text-gray-900 placeholder:text-gray-700 rounded-lg mx-4 focus:border-blue-500 focus:outline-none focus:ring-0 "
                type='checkbox'
                checked={interests.includes("coding")}
                name="coding"
                onChange={handleChange}
              />
              Coding
            </label>
          </div>
          <div className='w-full mb-3 flex gap-2 items-center'>
            <label className='font-semibold text-gray-900 cursor-pointer'>
              <input
                className="py-2 px-3 border border-[#D0D5DD] text-gray-900 placeholder:text-gray-700 rounded-lg mx-4 focus:border-blue-500 focus:outline-none focus:ring-0 "
                type='checkbox'
                checked={interests.includes("reading")}
                name="reading"
                onChange={handleChange}
              />
              Reading
            </label>
          </div>
          <div className='w-full mb-3 flex gap-2 items-center'>
            <label className='font-semibold text-gray-900 cursor-pointer'>
              <input
                className="py-2 px-3 border border-[#D0D5DD] text-gray-900 placeholder:text-gray-700 rounded-lg mx-4 focus:border-blue-500 focus:outline-none focus:ring-0 "
                type='checkbox'
                checked={interests.includes("listening-music")}
                name="listening-music"
                onChange={handleChange}
              />
              Listening Music
            </label>
          </div>
        </div>
        <p className='text-red-500 my-2 text-sm'>{errors.interests}</p>
      </form>
    </div>
  )
}

export default Interests