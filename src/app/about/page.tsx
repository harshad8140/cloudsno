import Link from 'next/link';
import { Button } from '@/components/ui/button';

const values = [
    {
        title: "Innovation",
        description:
            "We constantly evolve and adapt to the latest technologies to provide cutting-edge solutions.",
    },
    {
        title: "Reliability",
        description:
            "Our commitment to excellence ensures your infrastructure remains stable and secure.",
    },
    {
        title: "Customer Focus",
        description:
            "We prioritize understanding and meeting our clients' unique needs and challenges.",
    },
];

const About = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">About Cludsno</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            We&apos;re on a mission to revolutionize server management and DevOps practices for businesses worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with a vision to simplify server management and DevOps
                                processes, Cludsno has grown into a trusted partner for businesses
                                seeking reliable infrastructure solutions.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Our team of experts brings years of experience in cloud
                                infrastructure, automation, and server management to help businesses
                                thrive in the digital age.
                            </p>
                            <Button asChild>
                                <Link href="/contact">Work With Us</Link>
                            </Button>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4">
                                    <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                                    <p className="text-gray-600">Clients Served</p>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                                    <p className="text-gray-600">Projects Completed</p>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                                    <p className="text-gray-600">Support Available</p>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="text-3xl font-bold text-blue-600">99.9%</h3>
                                    <p className="text-gray-600">Uptime Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
