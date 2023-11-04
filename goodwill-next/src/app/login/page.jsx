'use client'
import { validateUser, authenticate } from '../auth/server'
import { useRouter } from 'next/navigation'
import cookie from 'cookie'

export default function Page() {
  const router = useRouter()

  async function onSubmit(event) {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const data = { username, password }
    const valid = validateUser(data)
    // if there was an error, show a popup
    if (!valid) {
      alert('Invalid username or password')
      return
    } else if (valid) {
      let res = await authenticate(username, password)
      if (res) {
        console.log('success')

        // set cookie
        document.cookie = cookie.serialize('token', username, {
          maxAge: 60 * 60, // 1 hour
          path: '/',
        })

        // redirect to home page
        router.push('/')
      } else if (!res) {
        alert('Invalid username or password')
        return
      }
    }
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen bg-goodwill-blue'>
        <div className='bg-white p-8 rounded-xl'>
          <h1 className='text-3xl font-bold my-10 text-black text-center'>
            Sign in
          </h1>
          <form className='flex flex-col gap-10' onSubmit={(e) => onSubmit(e)}>
            <input
              name='username'
              className='text-black p-4 rounded-lg bg-white border border-gray-300 border-width-19 focus:outline-none'
              type='text'
              placeholder='Username...'
            />
            <input
              name='password'
              className='text-black p-4 rounded-lg bg-white focus:outline-none border border-gray-300 border-width-19'
              type='password'
              placeholder='Password...'
            />
            <div className='w-full flex justify-center'>
              <button
                name='submit'
                className='bg-goodwill-blue p-3 rounded-lg text-white w-1/2 '
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
