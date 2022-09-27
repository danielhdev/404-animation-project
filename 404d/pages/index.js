import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <section className="mt-4 mx-auto grid grid-rows-auto md:grid-cols-2 gap-5 justify-items-center">
        <div id="card" className="cardcss">
        </div>
        <div id="card" className="cardcss">
        </div>
        <div id="card" className="cardcss">
        </div>
        <div id="card" className="cardcss">
        </div>
        <div id="card" className="cardcss">
        </div>
        <div id="card" className="cardcss">
        </div>
        <div id="card" className="cardcss">
        </div>
        <div id="card" className="cardcss">
        </div>
      </section>


    </>
  )
}
