import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import { motion } from 'motion/react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
export const Navbar = () => {

  return (
    <div
        className="h-full"
    >
        <header className="mx-4 mt-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] mb-4 rounded-lg">
          <div className="flex justify-between items-center p-4">
            <motion.button 
              className="flex items-center gap-2 cursor-pointer font-mono text-sm bg-yellow-300 border-[3px] border-black shadow-[4px_4px_0px_#000] px-4 py-2 rounded-lg"
              whileHover={{ boxShadow: '6px 6px 0px #000000', x: -2, y: -2 }}
              transition={{ duration: 0.1 }}
            >
              <Link href={"/"}>
                <div className='flex items-center'>
                    <Image
                        src="/images/logo.png"
                        alt='logo'
                        width={30}
                        height={30}
                    />
                </div>
            </Link>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter">KLASMIC</h1>
            </motion.button>
            <NavItems/>
             <SignedOut>
                <SignInButton>
                  <motion.div 
              className="flex items-center gap-2 cursor-pointer font-mono text-sm bg-[#BDE7FF] border-[3px] border-black shadow-[4px_4px_0px_#000] px-4 py-2 rounded-lg"
              whileHover={{ boxShadow: '6px 6px 0px #000000', x: -2, y: -2 }}
              transition={{ duration: 0.1 }}
            >Sign In</motion.div>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn> 
          </div>
        </header>
    </div>
  )
}

export default Navbar