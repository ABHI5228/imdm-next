import Image from 'next/image'
import Link from 'next/link'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card({ result }) {
  const posterSrc = result.Poster === 'N/A' ? '/no-image.svg' : result.Poster;

  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.imdbID}`}>
        <Image
          src={posterSrc}
          alt={result.Title || 'Movie poster'}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
          unoptimized
        />
        <div className='p-2'>
            <h2 className='text-lg font-bold truncate'>{result.Title}</h2>
            <p className='text-sm text-gray-500'>{result.Year}</p>
        </div>
      </Link>
    </div>
  )
}
