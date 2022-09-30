import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <section className="mt-[100px] mx-auto grid grid-rows-auto grid-cols-1 gap-y-[50px] 
      md:gap-y-[150px] justify-items-center">
        <article className='flex justify-center items-center'>
          <p className="font-[Anton] text-[2.5rem] text-zinc-50 text-left px-20 ">
            A collection of animated 404 pages.</p>
        </article>
        <Link href="http://localhost:3000/pugnotfound">
          <motion.div id="card1" className="cardcss"
            whileHover={{ x: [-5, 2, -12, 0] }}
            transition={{ duration: 1.5, times: [0.1, 0.2, 0.1, 0.3] }}
          >
            <h2 className="font-[Anton] text-sky-300">PUG!</h2>
          </motion.div>
        </Link>
        <Link href="http://localhost:3000/vintageoops">
          <motion.div id="card2" className="cardcss"
            whileHover={{ y: [-5, 2, -12, 0] }}
            transition={{ duration: 1.5, times: [0.1, 0.2, 0.1, 0.3] }}
          >
            <h2 className="font-[Anton] text-orange-400">VINTAGE!</h2>
          </motion.div>
        </Link>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
      </section>
    </>
  )
}
