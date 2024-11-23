"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, Settings, Search, Palette, FileCode, Wrench } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites built with modern technologies",
    price: "Starting from $2,999",
    link: "/services/website",
  },
  {
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Scalable software as a service applications",
    price: "Starting from $4,999",
    link: "/services/saas",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    price: "Starting from $5,999",
    link: "/services/mobile",
  },
  {
    icon: Settings,
    title: "IoT Solutions",
    description: "Connected device ecosystems and platforms",
    price: "Starting from $3,999",
    link: "/services/iot",
  },
  {
    icon: Search,
    title: "SEO Solutions",
    description: "Comprehensive search engine optimization",
    price: "Starting from $1,499",
    link: "/services/seo",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design and experiences",
    price: "Starting from $2,499",
    link: "/services/design",
  },
  {
    icon: FileCode,
    title: "Prototypes",
    description: "Rapid prototyping and proof of concepts",
    price: "Starting from $1,999",
    link: "/services/prototype",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored solutions for unique requirements",
    price: "Custom quote",
    link: "/services/custom",
  },
];

export function ServiceCatalog() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service) => (
        <Card key={service.title} className="flex flex-col">
          <CardHeader>
            <div className="mb-2">
              <service.icon className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-lg font-semibold text-primary">{service.price}</p>
            <Link href={service.link} className="mt-4 block">
              <Button className="w-full">Learn More</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}