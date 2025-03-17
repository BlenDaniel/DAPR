import { NextResponse } from "next/server";

export async function GET() {
  // Dummy data for company logos with more reliable image URLs
  const companies = [
    {
      id: 1,
      name: "Google",
      logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png",
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png",
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://cdn.pixabay.com/photo/2013/10/01/10/29/ebay-189064_1280.png",
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://cdn.pixabay.com/photo/2022/01/21/06/58/apple-6953755_1280.png",
    },
    {
      id: 5,
      name: "Facebook",
      logo: "https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_1280.png",
    },
    {
      id: 6,
      name: "IBM",
      logo: "https://cdn.pixabay.com/photo/2013/01/29/22/53/ibm-76703_1280.png",
    },
    {
      id: 7,
      name: "Intel",
      logo: "https://cdn.pixabay.com/photo/2013/02/12/09/07/intel-80757_1280.png",
    },
    {
      id: 8,
      name: "Samsung",
      logo: "https://cdn.pixabay.com/photo/2015/11/29/19/25/samsung-1069843_1280.jpg",
    },
  ];

  return NextResponse.json(companies);
}
