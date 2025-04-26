import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Cloudsno
                        </h3>
                        <p className="text-gray-600">
                            Your shield in the cloud, Your partner in Success
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-600 hover:text-blue-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-600">Cloud Infrastructure</li>
                            <li className="text-gray-600">DevOps Automation</li>
                            <li className="text-gray-600">Server Management</li>
                            <li className="text-gray-600">24/7 Support</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-600">contact@cloudsno.com</li>
                            <li className="text-gray-600">+91 9999999999</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Cloudsno. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
