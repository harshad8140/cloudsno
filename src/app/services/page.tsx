import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Server,
    Cloud,
    Code,
    Database,
    Shield,
    Users,
    ArrowRight,
} from "lucide-react";
import Image from "next/image";

const detailedServices = [
    {
        title: "Cloud Infrastructure",
        description: "Modern cloud solutions designed for scalability and reliability",
        icon: Cloud,
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000",
        features: [
            "Multi-cloud architecture design and implementation",
            "Cloud migration and modernization",
            "Infrastructure as Code (IaC) implementation",
            "Cost optimization and resource management",
            "High-availability architecture design"
        ]
    },
    {
        title: "DevOps Automation",
        description: "Streamline your development workflow with cutting-edge automation",
        icon: Code,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000",
        features: [
            "CI/CD pipeline implementation",
            "Automated testing and deployment",
            "Container orchestration with Kubernetes",
            "Configuration management",
            "Release automation and management"
        ]
    },
    {
        title: "Server Management",
        description: "Comprehensive server solutions for optimal performance",
        icon: Server,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000",
        features: [
            "24/7 server monitoring and maintenance",
            "Performance optimization",
            "Security hardening and updates",
            "Backup and disaster recovery",
            "Load balancing and scaling"
        ]
    },
    {
        title: "Security & Compliance",
        description: "Enterprise-grade security for your infrastructure",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000",
        features: [
            "Security assessments and audits",
            "Compliance management (SOC2, ISO27001, GDPR)",
            "Identity and access management",
            "Vulnerability scanning and management",
            "Security monitoring and incident response"
        ]
    }
];

const benefits = [
    {
        icon: Cloud,
        title: "Cloud Expertise",
        description: "Deep expertise across AWS, Azure, and Google Cloud Platform"
    },
    {
        icon: Code,
        title: "Automation First",
        description: "Reduce manual work and errors through comprehensive automation"
    },
    {
        icon: Shield,
        title: "Security Focus",
        description: "Built-in security practices and compliance management"
    },
    {
        icon: Server,
        title: "24/7 Support",
        description: "Round-the-clock monitoring and expert support"
    },
    {
        icon: Database,
        title: "Scalable Solutions",
        description: "Infrastructure that grows with your business needs"
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description: "Experienced DevOps engineers at your service"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-purple-600/95" />
                    <img
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000"
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Enterprise DevOps Solutions
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Accelerate your digital transformation with our comprehensive DevOps services
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact" className="gap-2 flex items-center">
                                Schedule a Consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {detailedServices.map((service, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-500 p-0">
                                <div className="h-64 relative overflow-hidden group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                                </div>
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-blue-100">
                                            <service.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">{service.description}</p>
                                    <div className="space-y-4">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                </div>
                                                <p className="text-gray-600">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Our DevOps Services?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We deliver excellence through modern DevOps practices and cutting-edge technologies
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                                            <benefit.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your DevOps Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our DevOps services can help accelerate your business growth
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600" asChild>
                            <Link href="/contact">Get Started</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 hover:bg-white/20" asChild>
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
