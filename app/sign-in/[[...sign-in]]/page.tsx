import { SignIn } from '@clerk/nextjs'
export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <main className='flex items-center h-[70vh] justify-center'>
      <SignIn />
    </main>   
  )
}