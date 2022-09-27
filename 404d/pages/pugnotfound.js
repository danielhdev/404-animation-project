import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaPaw } from 'react-icons/fa'

const pugnotfound = () => {
  const paw = {
    start: {
      scale: 100,
      opacity: 0,
    },
    end: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duaration: 0.5,
      }
    }
  }
  const four = {
    start: {
      opacity: 0,
    },
    end: {
      scale: [1, 1.2, 1],
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    }
  }

  return (
    <Link href="/">
      <main id="pugfour" className="bg-neutral-400 h-screen font-[impact] overflow-hidden">
        <div className="flex flex-col justify-center items-center h-[90vh]">
          <motion.div className="text-[10rem] xl:text-[15rem] text-orange-400 py-10"
            variants={paw}
            initial='start'
            animate='end'
          ><FaPaw /></motion.div>
          <motion.div
            variants={four}
            initial='start'
            animate='end'
          >
            <div className="text-zinc-50 text-[3rem] md:text-[4rem] text-center">404</div>
            <p className='text-zinc-50 text-[2.5rem] md:text-[3rem]'>I ate the page</p>
            <p className='text-zinc-50 text-[1.5rem] text-center'>(click or tap)</p>
          </motion.div>
        </div>
      </main>
    </Link >
  )
}

export default pugnotfound