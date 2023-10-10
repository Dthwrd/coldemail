import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Price from '@/components/Price'

export default function Home() {
  return (
    <main className="flex bg-slate-950 text-slate-100 flex-col items-center justify-between px-72">
      <Header />
      <Hero />
      <Price />
      <Features />
      <Footer />
    </main>
  )
}
