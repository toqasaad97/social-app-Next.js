import Link from 'next/link'

export default function Error() {
  return (
    <div className='flex justify-center align-center'>
      <h2>Error</h2>
        <p>The page you are looking for does not exist,</p>
      <Link href="/" className='text-red-400'>Return Home .</Link>
    </div>
  )
}