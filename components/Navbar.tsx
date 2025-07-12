import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link href={"/"}>
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <Image
                        src="/images/logo.png"
                        alt='logo'
                        width={80}
                        height={80}
                    />
                </div>
            </Link>
            <div className='flex items-center gap-8'>
                <NavItems/>
                <p>Sign In</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar