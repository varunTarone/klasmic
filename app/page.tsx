import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123" 
          name="Neura the Brainy Explorer"
          topic="Neuroscience"
          subject="Biology"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard 
          id="456" 
          name="Verba the Vocabulary Virtuoso"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#BD#7FF"
        />
        <CompanionCard 
          id="789" 
          name="Countsy the Number Wizard"
          topic="Derivatives"
          subject="Science"
          duration={30}
          color="#e5d0ff"
        />
      </section>
      <section className='home-section'>
        <CompanionsList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
        
      </section>
    </main> 
  )
}

export default Page