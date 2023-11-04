export default function Home() {
  return (
    <div className='flex flex-col justify-center mt-40'>
      <h1 className='text-black text-7xl text-center font-semibold'>
        Feedback
      </h1>
      <form className='flex flex-col justify-center mt-40'>
        <label className='text-black text-2xl text-center font-semibold'>
          Feedback
        </label>
        <input
          className='border-2 border-black rounded-lg p-2'
          type='text'
          name='feedback'
          placeholder='Enter feedback here'
        />
        <label className='text-black text-2xl text-center font-semibold'>
          Email
        </label>
        <input
          className='border-2 border-black rounded-lg p-2'
          type='text'
          name='email'
          placeholder='Enter email here'
        />
        <button className='mt-5 ml-60 mr-60 text-goodwill-blue text-center trounded-lg border-2 p-2 border-goodwill-blue hover:bg-goodwill-blue hover:text-white w-15 md:w-1/8 lg:1/4 '>
          Submit
        </button>
        <br />
      </form>
    </div>
  )
}
