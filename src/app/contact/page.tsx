import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Contact Hero */}
            <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-600">
                            Get in touch with our team to discuss how we can help transform your
                            infrastructure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <form action="/api/contact" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <Input id="name" name="name" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help you?"
                                        className="min-h-[150px]"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                                    <p className="text-gray-600">contact@cludsno.com</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                                    <p className="text-gray-600">+91 9999999999</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                                    <address className="text-gray-600">
                                        <p>109, Madhav Shopping Center</p>
                                        <p>Maharana Pratap Chowk, near Gyanjyot School</p>
                                        <p>Surat, Gujarat, India 395010</p>
                                    </address>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                                        24/7 Technical Support Available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;