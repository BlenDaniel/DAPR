import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Get the URL from the request
  const url = new URL(request.url);

  // Get the limit parameter from the URL, default to 6
  const limit = parseInt(url.searchParams.get("limit") || "6", 10);

  // Sample projects data
  const allProjects = [
    {
      id: "project-1",
      slug: "urban-skyline-tower",
      title: "Urban Skyline Tower",
      description:
        "A 35-story mixed-use skyscraper featuring commercial space, luxury apartments, and a rooftop garden.",
      location: "San Francisco, CA",
      year: "2022",
      category: "Commercial",
      coverImage: "/images/projects/urban-skyline.jpg",
      images: [
        "/images/projects/urban-skyline-1.jpg",
        "/images/projects/urban-skyline-2.jpg",
        "/images/projects/urban-skyline-3.jpg",
      ],
      details:
        "This landmark project transformed the city skyline with its innovative design and sustainable features. The building includes 20 floors of premium office space, 10 floors of luxury apartments, and a 5-floor retail podium. The rooftop garden provides a green oasis in the urban environment.",
    },
    {
      id: "project-2",
      slug: "eco-friendly-residence",
      title: "Eco-Friendly Residence",
      description:
        "A sustainable single-family home designed to minimize environmental impact while maximizing comfort.",
      location: "Portland, OR",
      year: "2021",
      category: "Residential",
      coverImage: "/images/projects/eco-residence.jpg",
      images: [
        "/images/projects/eco-residence-1.jpg",
        "/images/projects/eco-residence-2.jpg",
        "/images/projects/eco-residence-3.jpg",
      ],
      details:
        "This 3,500 sq ft residence features solar panels, rainwater harvesting, passive heating and cooling, and locally sourced materials. The design seamlessly integrates with the natural surroundings while providing modern amenities and comfort.",
    },
    {
      id: "project-3",
      slug: "central-public-library",
      title: "Central Public Library",
      description:
        "A modern library designed to serve as both an educational resource and community gathering space.",
      location: "Chicago, IL",
      year: "2020",
      category: "Public",
      coverImage: "/images/projects/central-library.jpg",
      images: [
        "/images/projects/central-library-1.jpg",
        "/images/projects/central-library-2.jpg",
        "/images/projects/central-library-3.jpg",
      ],
      details:
        "This 75,000 sq ft library features flexible learning spaces, digital media labs, community meeting rooms, and outdoor reading gardens. The design emphasizes natural light, acoustic comfort, and accessibility for all users.",
    },
    {
      id: "project-4",
      slug: "waterfront-hotel-resort",
      title: "Waterfront Hotel & Resort",
      description:
        "A luxury hotel and resort complex situated on a pristine waterfront location.",
      location: "Miami, FL",
      year: "2019",
      category: "Hospitality",
      coverImage: "/images/projects/waterfront-hotel.jpg",
      images: [
        "/images/projects/waterfront-hotel-1.jpg",
        "/images/projects/waterfront-hotel-2.jpg",
        "/images/projects/waterfront-hotel-3.jpg",
      ],
      details:
        "This 250-room resort includes multiple restaurants, spa facilities, conference center, and private beach access. The design draws inspiration from the natural surroundings while providing world-class amenities and services.",
    },
    {
      id: "project-5",
      slug: "tech-innovation-campus",
      title: "Tech Innovation Campus",
      description:
        "A corporate campus designed to foster collaboration, innovation, and employee well-being.",
      location: "Austin, TX",
      year: "2018",
      category: "Corporate",
      coverImage: "/images/projects/tech-campus.jpg",
      images: [
        "/images/projects/tech-campus-1.jpg",
        "/images/projects/tech-campus-2.jpg",
        "/images/projects/tech-campus-3.jpg",
      ],
      details:
        "This 15-acre campus includes 4 interconnected buildings with flexible workspaces, research labs, recreational facilities, and landscaped courtyards. The design emphasizes sustainability, collaboration, and work-life balance.",
    },
    {
      id: "project-6",
      slug: "urban-renewal-plaza",
      title: "Urban Renewal Plaza",
      description:
        "A revitalized urban space that transforms a former industrial area into a vibrant community hub.",
      location: "Detroit, MI",
      year: "2017",
      category: "Urban Design",
      coverImage: "/images/projects/urban-plaza.jpg",
      images: [
        "/images/projects/urban-plaza-1.jpg",
        "/images/projects/urban-plaza-2.jpg",
        "/images/projects/urban-plaza-3.jpg",
      ],
      details:
        "This 5-acre development includes mixed-use buildings, public art installations, performance spaces, and green areas. The project has catalyzed economic revitalization while preserving the area's industrial heritage.",
    },
    {
      id: "project-7",
      slug: "mountain-retreat",
      title: "Mountain Retreat",
      description:
        "A private residence nestled in the mountains, designed to harmonize with the natural landscape.",
      location: "Aspen, CO",
      year: "2016",
      category: "Residential",
      coverImage: "/images/projects/mountain-retreat.jpg",
      images: [
        "/images/projects/mountain-retreat-1.jpg",
        "/images/projects/mountain-retreat-2.jpg",
        "/images/projects/mountain-retreat-3.jpg",
      ],
      details:
        "This 4,200 sq ft residence features floor-to-ceiling windows with panoramic mountain views, natural stone and timber construction, and indoor-outdoor living spaces. The design respects the topography and minimizes environmental impact.",
    },
    {
      id: "project-8",
      slug: "healthcare-wellness-center",
      title: "Healthcare & Wellness Center",
      description:
        "A modern medical facility designed to promote healing through architecture.",
      location: "Seattle, WA",
      year: "2015",
      category: "Healthcare",
      coverImage: "/images/projects/healthcare-center.jpg",
      images: [
        "/images/projects/healthcare-center-1.jpg",
        "/images/projects/healthcare-center-2.jpg",
        "/images/projects/healthcare-center-3.jpg",
      ],
      details:
        "This 100,000 sq ft medical center includes outpatient clinics, diagnostic facilities, rehabilitation spaces, and healing gardens. The design prioritizes patient comfort, staff efficiency, and evidence-based design principles.",
    },
    {
      id: "project-9",
      slug: "coastal-education-center",
      title: "Coastal Education Center",
      description:
        "An educational facility focused on marine conservation and environmental awareness.",
      location: "Monterey, CA",
      year: "2014",
      category: "Educational",
      coverImage: "/images/projects/coastal-center.jpg",
      images: [
        "/images/projects/coastal-center-1.jpg",
        "/images/projects/coastal-center-2.jpg",
        "/images/projects/coastal-center-3.jpg",
      ],
      details:
        "This 25,000 sq ft center includes interactive exhibits, research laboratories, classrooms, and observation decks. The building itself serves as a teaching tool for sustainable design and environmental stewardship.",
    },
    {
      id: "project-10",
      slug: "historic-theater-renovation",
      title: "Historic Theater Renovation",
      description:
        "A careful restoration and modernization of a landmark theater building.",
      location: "Boston, MA",
      year: "2013",
      category: "Historic Preservation",
      coverImage: "/images/projects/historic-theater.jpg",
      images: [
        "/images/projects/historic-theater-1.jpg",
        "/images/projects/historic-theater-2.jpg",
        "/images/projects/historic-theater-3.jpg",
      ],
      details:
        "This project involved restoring the ornate 1920s architecture while upgrading technical systems, accessibility, and audience amenities. The renovation has revitalized this cultural landmark for future generations.",
    },
    {
      id: "project-11",
      slug: "transit-hub",
      title: "Multi-Modal Transit Hub",
      description:
        "An integrated transportation center connecting various modes of public transit.",
      location: "Denver, CO",
      year: "2012",
      category: "Transportation",
      coverImage: "/images/projects/transit-hub.jpg",
      images: [
        "/images/projects/transit-hub-1.jpg",
        "/images/projects/transit-hub-2.jpg",
        "/images/projects/transit-hub-3.jpg",
      ],
      details:
        "This 150,000 sq ft facility serves as a nexus for rail, bus, bicycle, and pedestrian transportation. The design emphasizes efficient circulation, clear wayfinding, and a memorable sense of place.",
    },
    {
      id: "project-12",
      slug: "sports-complex",
      title: "Community Sports Complex",
      description:
        "A multi-purpose athletic facility serving diverse community needs.",
      location: "Minneapolis, MN",
      year: "2011",
      category: "Sports & Recreation",
      coverImage: "/images/projects/sports-complex.jpg",
      images: [
        "/images/projects/sports-complex-1.jpg",
        "/images/projects/sports-complex-2.jpg",
        "/images/projects/sports-complex-3.jpg",
      ],
      details:
        "This 85,000 sq ft complex includes indoor courts, swimming pools, fitness areas, and outdoor playing fields. The design promotes physical activity, social interaction, and community pride.",
    },
  ];

  // Return the limited number of projects
  return NextResponse.json(allProjects.slice(0, limit));
}
