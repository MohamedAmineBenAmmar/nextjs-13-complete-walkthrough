'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/search/${search}`)
    }
  return (
    // Trick to get the type definition
    // <form onSubmit={e => handleSearch}>...</form> (hover on the e to see the type definition)
    <form onSubmit={handleSearch}>
        <input
            type="text"
            value={search}
            placeholder='Search for a todo'
            onChange={(e) => setSearch(e.target.value)}
        />
        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg' type='submit'>Search</button>
    </form>
  )
}

export default Search