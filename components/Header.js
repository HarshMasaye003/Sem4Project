import Link from 'next/link'
import {useState} from 'react'

// function NavLink({ to, children }) {
//     return <a href={to} className={`mx-4`}>
//         {children}
//     </a>
// }
function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-black h-20"> {/*logo container*/}
                <a className="text-xl font-semibold text-purple-700" href="/">VPPCollab</a>
            </div>
            <div className="flex flex-col ml-4 ">
                <Link className="text-xl font-medium my-4 ml-4 text-white" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </Link>
                <Link className="text-xl font-medium my-4 ml-4 text-white" href="/docs" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Docs
                </Link>
                <Link className="text-xl font-medium my-4 ml-4 text-white" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    FAQs
                </Link>
                <Link className="text-xl font-medium my-4 ml-4 text-white" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </Link>
            </div>  
        </div>
    )
}

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-black px-4 py-4 h-15 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2x font-semibold text-white" href="/">VPPCollab</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex justify-between bg-black text-white">
                    <Link className='mr-4' href="/">
                        Home
                    </Link>
                    <Link className='mr-4' href="/docs">
                        Docs
                    </Link>
                    <Link className='mr-4' href="/contact">
                        FAQs
                    </Link>
                    <Link className='mr-4' href="/about">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}