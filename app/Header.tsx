import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='p-5 bg-blue-500'>
      <Link href='/' className='font-bold text-white'>Home Page</Link>        
    </header>
  )
}

export default Header