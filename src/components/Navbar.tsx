import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b px-15">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Cloudsno
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Services
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                            Contact
                        </Link>
                        <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar