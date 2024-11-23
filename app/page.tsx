import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Code2, Laptop, Rocket } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-4 text-center">
                <div className="fade-in">
                    <h1>Transform Your Ideas</h1>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Choose Us
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Code2}
                            title="Expert Development"
                            description="Professional team with years of experience in modern technologies"
                        />
                        <FeatureCard
                            icon={Rocket}
                            title="Fast Delivery"
                            description="Efficient development process ensuring quick turnaround times"
                        />
                        <FeatureCard
                            icon={Laptop}
                            title="Full Support"
                            description="Comprehensive support and maintenance after project completion"
                        />
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Services
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="mb-8 text-lg opacity-90">
                        Join us today and transform your ideas into reality
                    </p>
                    <Link href="/auth/register">
                        <Button size="lg" variant="secondary">
                            Start Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <div className="p-6 rounded-lg border bg-card">
            <Icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
}

function ServiceCard({ title, description, features }) {
    return (
        <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-muted-foreground mb-6">{description}</p>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const services = [
    {
        title: "Web Development",
        description: "Custom websites and web applications",
        features: ["Modern Technologies", "Responsive Design", "SEO Optimized"],
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform applications",
        features: ["iOS & Android", "User-friendly UI", "Offline Support"],
    },
    {
        title: "Custom Solutions",
        description: "Tailored software solutions",
        features: [
            "Scalable Architecture",
            "Custom Features",
            "Integration Support",
        ],
    },
];
