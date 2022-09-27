import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <section className="mt-4 mx-auto grid grid-rows-auto md:grid-cols-2 gap-6 
      justify-items-center">
        <article className='flex justify-center items-center'>
          <p className="font-[Anton] text-[3rem] text-left">
            A collection of page <br />not found pages.<br />Get 404d!</p>
        </article>


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
