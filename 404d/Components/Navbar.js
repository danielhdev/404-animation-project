import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className="z-10 flex justify-center w-screen fixed top-0">
            <Link href='/'>
                <a><div className=" bg-gray-400/30 px-3 py-1 text-3xl font-bold font-[Nabla]
            border-2 border-orange-200 tracking-widest text-orange-100">GET 404d!</div></a>
            </Link>
        </nav>
    )
}

export default Navbar