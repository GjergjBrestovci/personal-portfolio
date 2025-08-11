// 404 Not Found page
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4 gradient-text">404</h1>
      <h2 className="text-xl font-semibold mb-2">Page not found</h2>
      <p className="text-sm text-gray-400 max-w-md mb-6">The page you are looking for doesn\'t exist or has been moved. Check the URL or return to the homepage.</p>
      <Link href="/" className="btn btn-primary">Return Home</Link>
    </div>
  )
}
