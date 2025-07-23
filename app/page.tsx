import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions();

  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        {companions.map(companion => (
          <CompanionCard 
            key={companion.id} 
            id={companion.id} 
            name={companion.name}
            topic={companion.topic}
            subject={companion.subject}
            duration={companion.duration}
            color={getSubjectColor(companion.subject)}
          />
        ))}
        <CompanionCard 
          id="123" 
          name="Neura the Brainy Explorer"
          topic="Neuroscience"
          subject="Biology"
          duration={45}
          color="#ffda6e"
        />
        
      </section>
      <section className='home-section'>
        <CompanionsList
          title="Recent Sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
        
      </section>
    </main> 
  )
}

export default Page