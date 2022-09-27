import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className="bg-gray-400 flex justify-center">
            <Link href='/'>
                <a><div className=" bg-gray-400 px-3 py-1 text-5xl font-bold font-[Nabla]
            border-2 border-orange-200 tracking-wider text-orange-100">GET 404d!</div></a>
            </Link>
        </nav>
    )
}

export default Navbar