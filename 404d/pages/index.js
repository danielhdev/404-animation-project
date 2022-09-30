import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <section className="mt-[100px] mx-auto grid grid-rows-auto md:grid-cols-2 gap-y-[50px] 
      justify-items-center">
        <article className='flex justify-center items-center'>
          <p className="font-[Anton] text-[2.5rem] text-zinc-50 text-left">
            A collection of page <br />not found pages.<br />Get 404d!</p>
        </article>
        <Link href="http://localhost:3000/pugnotfound">
          <div id="card1" className="cardcss md:mt-20">
            <a><h2 className="font-[Anton] text-sky-300">PUG!</h2></a>
          </div>
        </Link>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss md:mt-20">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss md:mt-20">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss md:mt-20">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
        <div id="card" className="cardcss md:mt-20">
          <h2 className="font-[Anton] text-zinc-50">PUG!</h2>
        </div>
      </section>
    </>
  )
}
