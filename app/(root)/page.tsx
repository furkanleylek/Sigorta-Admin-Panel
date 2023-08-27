import Image from 'next/image'
import AllCards from '@/components/dashboard/all-cards'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <AllCards />
    </main>
  )
}
