import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Cloud, Code, Database, Server, Shield, Star, Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import Docker and Gitlab icons that were referenced
import { Cloud as Docker, Cloud as Gitlab } from "lucide-react";

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Expert setup and management of cloud infrastructure on AWS, Azure, and Google Cloud Platform.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000"
  },
  {
    title: "DevOps Automation",
    description: "Streamline your development pipeline with cutting-edge automation tools and practices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000"
  },
  {
    title: "24/7 Server Management",
    description: "Round-the-clock monitoring and management of your server infrastructure.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000"
  },
];

const devopsFeatures = [
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Automate your infrastructure deployment with Terraform, CloudFormation, and Ansible.",
  },
  {
    icon: Code,
    title: "CI/CD Pipeline",
    description: "Streamline development with automated testing and deployment using Jenkins, GitLab CI, and GitHub Actions.",
  },
  {
    icon: Database,
    title: "Container Orchestration",
    description: "Manage containerized applications efficiently with Kubernetes and Docker Swarm.",
  },
  {
    icon: Shield,
    title: "Security Automation",
    description: "Implement security best practices with automated vulnerability scanning and compliance checks.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate your applications to AWS, Azure, or Google Cloud Platform.",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock expert support for your infrastructure needs.",
  },
];

const features = [
  {
    icon: "🚀",
    title: "Fast Deployment",
    description: "Quick and efficient deployment of your applications",
  },
  {
    icon: "🛡️",
    title: "Enhanced Security",
    description: "Advanced security measures to protect your infrastructure",
  },
  {
    icon: "⚡",
    title: "High Performance",
    description: "Optimized performance for maximum efficiency",
  },
  {
    icon: "📊",
    title: "Scalable Solutions",
    description: "Solutions that grow with your business needs",
  },
];

const reviews = [
  {
    rating: 5,
    text: "Cludsno transformed our deployment process. We've cut our deployment time by 70% and significantly reduced errors.",
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
  },
  {
    rating: 5,
    text: "Their expertise in Kubernetes and cloud infrastructure helped us scale our application seamlessly.",
    name: "Michael Chen",
    company: "StartupFlow",
  },
  {
    rating: 5,
    text: "Outstanding DevOps support! Their team's response time and problem-solving skills are exceptional.",
    name: "Emily Rodriguez",
    company: "DataTech Solutions",
  },
];

const technologies = [
  {
    name: "Docker",
    icon: <Docker className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "Containerization",
    description: "Container platform for modern applications"
  },
  {
    name: "Kubernetes",
    icon: <Cloud className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "Orchestration",
    description: "Container orchestration at scale"
  },
  {
    name: "AWS",
    icon: <Server className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "Cloud Platform",
    description: "Leading cloud infrastructure provider"
  },
  {
    name: "Azure",
    icon: <Cloud className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "Cloud Platform",
    description: "Microsoft's enterprise cloud solution"
  },
  {
    name: "Terraform",
    icon: <Database className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "Infrastructure as Code",
    description: "Infrastructure automation tool"
  },
  {
    name: "Jenkins",
    icon: <Server className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "CI/CD",
    description: "Automation server for deployments"
  },
  {
    name: "GitLab",
    icon: <Gitlab className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "Version Control",
    description: "Complete DevOps platform"
  },
  {
    name: "Google Cloud",
    icon: <Cloud className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors" />,
    category: "Cloud Platform",
    description: "Google's cloud computing services"
  }
];

const stats = [
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "24/7", label: "Support Available" },
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Expert Engineers" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transform Your Infrastructure with DevOps Excellence
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Streamline your operations, enhance security, and accelerate deployment with our comprehensive DevOps
            solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white  text-blue-600 hover:bg-white/20" asChild>
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group p-0">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Carousel */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Technologies We Work With</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our expertise spans across modern DevOps tools and cloud platforms to deliver robust, scalable solutions
          </p>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {technologies.map((tech, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <Card className="p-6 group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-blue-200">
                    <div className="aspect-square relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex flex-col items-center justify-center p-6">
                      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <h3 className="text-center font-semibold text-lg mb-2">{tech.name}</h3>
                      <p className="text-center text-sm text-gray-600">{tech.category}</p>
                      <p className="text-center text-xs text-gray-500 mt-2">{tech.description}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>

      {/* DevOps Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our DevOps Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devopsFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-t-4 border-t-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cludsno</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};