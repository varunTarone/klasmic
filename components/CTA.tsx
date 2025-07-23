import Image from 'next/image'
import Link from 'next/link'
const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>
        Start learning your way!
      </div>
      <h2 className='text-3xl font-bold'>
        Build and Customize AI Companion Today!
      </h2>
      <p>
        Pick a name, subject, voice & personality for your AI companion - and start learning through voice conversations.
      </p>
      <Image src="/images/cta.svg" alt="AI Companion" width={362} height={232} />
      <button className='btn-primary'>
        <Image src="/icons/plus.svg" alt="Plus Icon" width={12} height={12} />
        <Link href="/companions/new" className='ml-2'>Create Companion</Link>
      </button>
    </section>
  )
}

export default CTA