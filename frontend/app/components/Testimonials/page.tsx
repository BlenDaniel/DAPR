// app/testimonials/page.tsx (Server Component)
import Testimonials from "../../components/Testimonials";
import { headers } from "next/headers";

async function getTestimonialsData() {
  // Fetch section title data
  const sectionTitleRes = await fetch(
    process.env.URL + "/api/testimonials-section",
    {
      headers: (await headers()) as unknown as HeadersInit,
      cache: "no-store",
      method: "GET",
    }
  );
  const sectionTitle = await sectionTitleRes.json();

  // Fetch testimonials data
  const testimonialsRes = await fetch(process.env.URL + "/api/testimonials", {
    headers: (await headers()) as unknown as HeadersInit,
    cache: "no-store",
    method: "GET",
  });
  const testimonials = await testimonialsRes.json();

  return { sectionTitle, testimonials };
}

export default async function TestimonialsPage() {
  const { sectionTitle, testimonials } = await getTestimonialsData();

  return (
    <Testimonials sectionTitle={sectionTitle} testimonials={testimonials} />
  );
}
