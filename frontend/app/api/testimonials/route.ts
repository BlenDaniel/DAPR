// app/api/site-metadata/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = [
    {
      id: "1",
      html: "John's architectural expertise transformed our commercial space into a stunning, functional environment that perfectly represents our brand. His attention to detail and innovative approach exceeded our expectations.",
      title: "Sarah Johnson",
      company: "CEO, Innovate Solutions",
      coverImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: "2",
      html: "Working with John on our sustainable office building was a game-changer. His knowledge of eco-friendly design principles and ability to balance aesthetics with functionality resulted in a space that inspires our team daily.",
      title: "Michael Chen",
      company: "Founder, GreenTech Enterprises",
      coverImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: "3",
      html: "John's structural engineering expertise was crucial for our complex renovation project. His solutions were creative, cost-effective, and delivered on time. I wouldn't hesitate to recommend him for any architectural challenge.",
      title: "Emily Rodriguez",
      company: "Director, Urban Development Corp",
      coverImage:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      id: "4",
      html: "As a residential developer, I've worked with many architects, but John stands out for his ability to blend modern design with practical living spaces. His projects always attract premium buyers and receive outstanding feedback.",
      title: "David Thompson",
      company: "Principal, Luxury Homes Group",
      coverImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
  ];

  return NextResponse.json(testimonials);
}
