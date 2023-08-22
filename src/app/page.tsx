import Navbar from '@/components/Navbar'
import LeftSide from '@/components/LeftSide'
import Image from 'next/image'
import RightSide from '@/components/RightSide'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import BigProjects from '@/components/big-projects/BigProjects'
import SmallProjects from '@/components/small-projects/SmallProjects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className=" w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">

      <Navbar></Navbar>
      <div className='w-full h-[88vh] lg:flex items-center gap-10 justify-between'> 
          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </div>
          <div className='h-[88vh] w-full mx-auto p-4'>
          <Banner />
          <About />
          <Experience />
          <BigProjects />
          <SmallProjects />
          <Contact />
          <Footer /> 
 
          </div>
          <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <RightSide />
          </div>

        </div>
    </main>
  )
}
