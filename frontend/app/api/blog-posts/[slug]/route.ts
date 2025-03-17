import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  // Sample blog posts data (same as in the main blog posts API)
  const allPosts = [
    {
      id: "post-1",
      slug: "sustainable-architecture-trends",
      title: "Sustainable Architecture Trends for 2023",
      description:
        "Exploring the latest innovations in sustainable building design and how they're shaping the future of architecture.",
      content:
        "<p>Sustainable architecture has evolved significantly over the past decade, moving from a niche interest to a mainstream necessity. As we navigate the challenges of climate change, architects and engineers are at the forefront of developing innovative solutions that reduce environmental impact while creating beautiful, functional spaces.</p><p>In 2023, we're seeing several key trends emerge in sustainable architecture:</p><h3>1. Mass Timber Construction</h3><p>Cross-laminated timber (CLT) and other engineered wood products are revolutionizing mid-rise and high-rise construction. These materials store carbon rather than emit it, can be sourced sustainably, and create warm, inviting spaces that connect occupants with nature.</p><h3>2. Net-Zero Energy Buildings</h3><p>Advances in renewable energy systems, building envelope design, and energy management have made net-zero energy buildings increasingly feasible. These buildings produce as much energy as they consume, typically through a combination of energy efficiency measures and on-site renewable energy generation.</p><h3>3. Biophilic Design</h3><p>Incorporating natural elements and patterns into the built environment has proven benefits for human health and wellbeing. From living walls to natural materials and daylight optimization, biophilic design principles are becoming standard practice in sustainable architecture.</p>",
      date: "April 15, 2023",
      tags: ["Sustainability", "Design", "Innovation"],
      coverImage: "/images/blog/sustainable-architecture.jpg",
      author: "John Smith",
    },
    {
      id: "post-2",
      slug: "commercial-vs-residential-design",
      title: "Commercial vs. Residential Design: Key Differences",
      description:
        "A comprehensive comparison of commercial and residential architectural design principles and considerations.",
      content:
        "<p>While the fundamental principles of good design apply to all architectural projects, there are significant differences between commercial and residential design that architects must consider. Understanding these differences is crucial for delivering successful projects that meet client needs and regulatory requirements.</p><h3>Scale and Complexity</h3><p>Commercial projects typically involve larger scales, more complex systems, and higher occupancy loads than residential projects. This affects everything from structural design to mechanical systems and emergency egress requirements.</p><h3>Regulatory Requirements</h3><p>Commercial buildings are subject to more stringent building codes, accessibility requirements (such as ADA compliance), and zoning regulations. These requirements can significantly impact design decisions and project timelines.</p><h3>Durability and Maintenance</h3><p>Commercial buildings generally need to withstand more intensive use and have longer expected lifespans than residential buildings. This influences material selection, detailing, and system design to minimize maintenance and replacement costs over time.</p>",
      date: "March 22, 2023",
      tags: ["Commercial", "Residential", "Design"],
      coverImage: "/images/blog/commercial-residential.jpg",
      author: "John Smith",
    },
    {
      id: "post-3",
      slug: "building-your-dream-home",
      title: "Building Your Dream Home: An Architect's Perspective",
      description:
        "Essential insights and advice for homeowners embarking on a custom home building journey.",
      content:
        "<p>Designing and building a custom home is one of the most significant investments most people will make in their lifetime. As an architect who has guided numerous clients through this process, I've gathered some key insights to help homeowners navigate the journey successfully.</p><h3>Start with a Clear Vision</h3><p>Before diving into design details, take time to articulate your lifestyle needs, aesthetic preferences, and long-term goals. Create inspiration boards, visit homes you admire, and document features that resonate with you. This groundwork will provide valuable direction for your architect.</p><h3>Understand the Full Process</h3><p>Custom home projects typically follow a sequence: programming, schematic design, design development, construction documents, bidding, and construction administration. Each phase has its own timeline, deliverables, and decision points. Understanding this process helps set realistic expectations.</p><h3>Budget Realistically</h3><p>Construction costs vary widely based on location, size, complexity, and finish level. Be transparent with your architect about your budget from the beginning, and include contingencies for unexpected expenses. Remember that custom homes typically cost more per square foot than production homes.</p>",
      date: "February 10, 2023",
      tags: ["Residential", "Custom Homes", "Client Advice"],
      coverImage: "/images/blog/dream-home.jpg",
      author: "John Smith",
    },
    {
      id: "post-4",
      slug: "technology-in-modern-architecture",
      title: "The Role of Technology in Modern Architecture",
      description:
        "How advanced technologies like BIM, VR, and AI are revolutionizing architectural design and construction processes.",
      content:
        "<p>Technology has transformed every aspect of architectural practice, from design and documentation to construction and building operation. As these technologies continue to evolve, they're creating new possibilities for innovation, efficiency, and collaboration in the built environment.</p><h3>Building Information Modeling (BIM)</h3><p>BIM has revolutionized how buildings are designed, documented, and constructed. By creating a digital 3D model that contains not just geometry but also spatial relationships, geographic information, and component properties, BIM enables better coordination, more accurate documentation, and improved decision-making throughout the project lifecycle.</p><h3>Virtual and Augmented Reality</h3><p>VR and AR technologies allow clients and design teams to experience spaces before they're built. This immersive visualization helps non-architects understand spatial relationships, material selections, and design intent, leading to better-informed decisions and fewer changes during construction.</p><h3>Computational Design</h3><p>Parametric modeling and generative design tools allow architects to explore complex geometries and optimize designs based on multiple variables simultaneously. These approaches can lead to innovative forms, improved performance, and more efficient use of materials.</p>",
      date: "January 5, 2023",
      tags: ["Technology", "Innovation", "BIM"],
      coverImage: "/images/blog/architecture-technology.jpg",
      author: "John Smith",
    },
    {
      id: "post-5",
      slug: "adaptive-reuse-projects",
      title: "The Art of Adaptive Reuse in Architecture",
      description:
        "Exploring the challenges and opportunities of transforming existing buildings for new purposes.",
      content:
        "<p>Adaptive reuse—the process of repurposing existing buildings for new functions—has become increasingly important in sustainable urban development. These projects preserve architectural heritage, reduce waste, and often create unique, character-rich spaces that new construction cannot replicate.</p><h3>Preservation vs. Transformation</h3><p>One of the central challenges in adaptive reuse is finding the right balance between preserving historical elements and accommodating new functions. Successful projects respect the building's original character while making necessary modifications for contemporary use.</p><h3>Technical Challenges</h3><p>Older buildings often present technical challenges related to structural capacity, energy performance, code compliance, and hazardous materials. Creative problem-solving and specialized expertise are essential for addressing these issues effectively.</p><h3>Economic Considerations</h3><p>While adaptive reuse can sometimes cost more than new construction initially, it often offers long-term benefits through embodied energy savings, tax incentives, and marketing advantages. Understanding these economic factors is crucial for project feasibility.</p>",
      date: "December 12, 2022",
      tags: ["Adaptive Reuse", "Preservation", "Sustainability"],
      coverImage: "/images/blog/adaptive-reuse.jpg",
      author: "John Smith",
    },
    {
      id: "post-6",
      slug: "designing-for-climate-change",
      title: "Designing for Climate Change: Resilient Architecture",
      description:
        "How architects are addressing climate challenges through resilient design strategies.",
      content:
        "<p>As climate change intensifies, architects have a responsibility to design buildings and communities that can withstand and adapt to changing environmental conditions. Resilient design goes beyond sustainability to address specific climate risks and ensure long-term functionality.</p><h3>Site-Specific Climate Analysis</h3><p>Understanding local climate projections is the foundation of resilient design. This includes analyzing potential changes in temperature, precipitation, sea levels, and extreme weather events over the building's expected lifespan.</p><h3>Passive Survivability</h3><p>Buildings should maintain habitable conditions during extended power outages or infrastructure failures. Strategies include optimized thermal mass, natural ventilation, daylighting, and water collection/storage systems.</p><h3>Flood Resilience</h3><p>In flood-prone areas, strategies such as elevated first floors, wet floodproofing of lower levels, deployable flood barriers, and water-resistant materials can minimize damage and recovery time after flooding events.</p>",
      date: "November 8, 2022",
      tags: ["Resilience", "Climate Change", "Adaptation"],
      coverImage: "/images/blog/climate-resilience.jpg",
      author: "John Smith",
    },
    {
      id: "post-7",
      slug: "architecture-and-wellbeing",
      title: "Architecture and Wellbeing: Designing for Human Health",
      description:
        "How thoughtful architectural design can promote physical and mental wellbeing.",
      content:
        "<p>The built environment has profound effects on human health and wellbeing. As we spend approximately 90% of our time indoors, architects have significant opportunities to create spaces that support physical health, mental wellbeing, and social connection.</p><h3>Indoor Air Quality</h3><p>Poor indoor air quality has been linked to numerous health problems, from respiratory issues to cognitive impairment. Strategies for improving IAQ include proper ventilation, low-VOC materials, air filtration, and biophilic elements like indoor plants.</p><h3>Natural Light and Circadian Rhythms</h3><p>Exposure to natural light helps regulate our circadian rhythms, improving sleep quality, mood, and productivity. Designing for appropriate daylight levels and views to the outdoors should be a priority in all occupied spaces.</p><h3>Acoustic Comfort</h3><p>Unwanted noise can cause stress, reduce concentration, and impair communication. Thoughtful acoustic design—including appropriate sound absorption, isolation, and masking—creates more comfortable and functional environments.</p>",
      date: "October 15, 2022",
      tags: ["Wellbeing", "Health", "Design"],
      coverImage: "/images/blog/wellbeing-architecture.jpg",
      author: "John Smith",
    },
    {
      id: "post-8",
      slug: "future-of-urban-housing",
      title: "The Future of Urban Housing: Trends and Innovations",
      description:
        "Exploring emerging approaches to housing design in increasingly dense urban environments.",
      content:
        "<p>As cities continue to grow and evolve, innovative approaches to urban housing are emerging to address challenges of affordability, density, sustainability, and changing lifestyle preferences. These innovations are reshaping how we think about residential architecture in urban contexts.</p><h3>Micro-Units and Efficient Design</h3><p>Smaller, more efficient living spaces are becoming increasingly common in high-cost urban areas. Thoughtful design strategies—such as multifunctional furniture, built-in storage, and flexible spaces—can make these compact units feel spacious and comfortable.</p><h3>Co-Living Models</h3><p>Co-living arrangements, which combine private bedrooms with shared common spaces and amenities, offer alternatives to traditional apartments. These models can provide community, flexibility, and affordability for urban residents.</p><h3>Adaptive Housing</h3><p>Housing that can adapt to changing needs over time—through movable walls, convertible spaces, or modular components—offers long-term value and sustainability. These approaches accommodate different household compositions, working patterns, and life stages.</p>",
      date: "September 20, 2022",
      tags: ["Housing", "Urban Design", "Innovation"],
      coverImage: "/images/blog/urban-housing.jpg",
      author: "John Smith",
    },
  ];

  // Find the post with the matching slug
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return new NextResponse(JSON.stringify({ error: "Blog post not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return NextResponse.json(post);
}
