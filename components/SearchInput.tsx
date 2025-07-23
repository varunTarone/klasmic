'use client'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useState } from 'react'

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
        <Image
            src="/icons/search.svg"
            alt="Search Icon"
            width={15}
            height={15}
        />
        <input
            type="text"
            placeholder="Search..."
            className='outline-none'
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    router.push(`${pathname}?query=${searchQuery}`);
                }
            }}
        />
    </div>
  )
}

export default SearchInput