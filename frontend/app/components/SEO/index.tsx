import Head from "next/head";
import { usePathname } from "next/navigation";

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<
    { name: string; content: string } | { property: string; content: string }
  >;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "",
  lang = "en",
  meta = [],
}) => {
  const pathname = usePathname();
  const siteMetadata = {
    title: "Your Site Title",
    description: "Your site description",
    author: "Your Name",
  };

  const metaDescription = description || siteMetadata.description;

  const defaultMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: `https://yourdomain.com${pathname}`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  const fullMeta = [...defaultMeta, ...meta];

  return (
    <Head>
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {fullMeta.map((m, index) => (
        <meta key={index} {...m} />
      ))}
      <html lang={lang} />
    </Head>
  );
};

export default SEO;
