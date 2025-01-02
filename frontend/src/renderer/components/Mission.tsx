import { GifIcon, MapIcon, PlayIcon, TvIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";


interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <TvIcon />,
    title: "Accessibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <PlayIcon />,
    title: "Scalability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <GifIcon />,
    title: "Gamification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const MissionStatments = () => {
  return (
    <div id="mission" className="container mx-auto px-6 py-14 sm:py-28">
    <div className="bg-muted/50 border rounded-lg py-10 sm:py-16 max-w-7xl px-6 sm:px-12">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};