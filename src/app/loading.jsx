

import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex justify-center mt-16'>
      <Image src='/spinner.svg' alt='Loading...' width={64} height={64} />
    </div>
  )
}
