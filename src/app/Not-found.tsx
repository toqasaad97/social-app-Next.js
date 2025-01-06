import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-red-400">Return Home</Link>
    </div>
  )
}