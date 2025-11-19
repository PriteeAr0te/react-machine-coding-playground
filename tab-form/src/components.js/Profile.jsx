import React from 'react'

const Profile = ({ data, setData, errors }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className='max-w-7xl w-full h-full mx-auto min-h-full'>
      <form className='max-w-7xl mx-auto w-full h-full mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        <div className='w-full mb-3'>
          <div className='w-full flex gap-2 items-center'>
            <label className='font-semibold text-gray-900'>Name: </label>
            <input
              className="py-2 px-3 border border-[#D0D5DD] text-gray-900 placeholder:text-gray-700 rounded-lg mx-4 focus:border-blue-500 focus:outline-none focus:ring-0 "
              type='text'
              value={data.user}
              placeholder="Enter Your Name"
              name="user"
              onChange={handleChange}
            />
          </div>
          {errors.user && <p className='text-red-500 my-2 text-sm'>{errors.user}</p>}
        </div>


        <div className='w-full mb-3'>
          <div className='w-full flex gap-2 items-center'>
            <label className='font-semibold text-gray-900'>Age: </label>
            <input
              className="py-2 px-3 border border-[#D0D5DD] text-gray-900 placeholder:text-gray-700 rounded-lg mx-4 focus:border-blue-500 focus:outline-none focus:ring-0 "
              type='number'
              name="age"
              placeholder='Enter Your Age'
              onChange={handleChange}
              value={data.age}
            />
          </div>
          <p className='text-red-500 my-2 text-sm'>{errors.age}</p>
        </div>

        <div className='w-full mb-3'>
          <div className='w-full flex gap-2 items-center'>
            <label className='font-semibold text-gray-900'>Email: </label>
            <input
              className="py-2 px-3 border border-[#D0D5DD] text-gray-900 placeholder:text-gray-700 rounded-lg mx-4 focus:border-blue-500 focus:outline-none focus:ring-0 "
              type='email'
              placeholder='Enter Your Email'
              name='email'
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <p className='text-red-500 my-2 text-sm'>{errors.email}</p>
        </div>
      </form>
    </div>
  )
}

export default Profile