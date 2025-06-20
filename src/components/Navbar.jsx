import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="https://github.com/khalilurehman-masood" className="font-mono text-xl font-bold text-white "><span className="text-blue-500">🐙 Go to my GitHub</span></a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=>setMenuOpen(!menuOpen)}>
                        {menuOpen ? "" : "☰"}
                    </div>
                    <div className=" hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hove:text-white transition-color">Home </a>
                        <a href="#about" className="text-gray-300 hove:text-white transition-color">About </a>
                        <a href="#projects" className="text-gray-300 hove:text-white transition-color">Projects </a>
                        <a href="#Contact" className="text-gray-300 hove:text-white transition-color">Contact </a>

                    </div>
                </div>
            </div>
        </nav>
    )
}