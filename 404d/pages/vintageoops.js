import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const vintageoops = () => {
    const crash = {
        start: {
            x: 1000,
            rotate: 0
        },
        end: {
            x: 0,
            transition: {
                delay: 0.1,
            }
        },
        exit: {
            rotate: 12,
            y: 10,
            transition: {
                delay: 1.5,
                type: "spring",
                stiffness: 300
            }
        }
    }
    return (
        <AnimatePresence>
            <Link href="/">
                <main id="vintageoops" className="h-screen font-[Limelight] overflow-hidden
                flex flex-col justify-center items-center">
                    <p className="text-zinc-50 text-4xl">page not found</p>
                    <section>
                        <div className="flex flex-row">
                            <div className="text-zinc-50 text-[6rem] md:text-[12vw] text-center"
                            >4</div>
                            <motion.div className="text-zinc-50 text-[6rem] md:text-[12vw] text-center"
                                variants={crash}
                                initial='start'
                                animate={['end', 'exit']}
                            >0</motion.div>
                            <div className="text-zinc-50 text-[6rem] md:text-[12vw] text-center"
                            >4</div>
                        </div>
                    </section>
                    <p className="text-zinc-50 text-4xl">click or tab</p>
                </main>
            </Link >
        </AnimatePresence>
    )
}

export default vintageoops
