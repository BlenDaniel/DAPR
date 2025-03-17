import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";
import FormatHtml from "../../components/utils/FormatHtml";
import * as Styled from "./styles";
import Layout from "../../components/Layout";

interface Post {
  html: string;
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  };
}

interface Props {
  post: Post;
  previous: Post | null;
  next: Post | null;
}

const BlogPost: React.FC<Props> = ({ post, previous, next }) => {
  return (
    <Layout>
      <>
        {/* <SEO title={post.frontmatter.title} /> */}
        <Container section>
          <TitleSection
            title={post.frontmatter.date}
            subtitle={post.frontmatter.title}
          />
          <FormatHtml content={post.html} />
          <Styled.Links>
            <span>
              {previous && (
                <Link href={`/blog/${previous.slug}`}>
                  <a rel="previous">← {previous.frontmatter.title}</a>
                </Link>
              )}
            </span>
            <span>
              {next && (
                <Link href={`/blog/${next.slug}`}>
                  <a rel="next">{next.frontmatter.title} →</a>
                </Link>
              )}
            </span>
          </Styled.Links>
        </Container>
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the post data based on the slug
  const res = await fetch(`/api/posts/${params?.slug}`);
  const post = await res.json();

  // Fetch previous and next post data
  const prevRes = await fetch(`/api/posts/${params?.slug}/previous`);
  const previous = await prevRes.json();

  const nextRes = await fetch(`/api/posts/${params?.slug}/next`);
  const next = await nextRes.json();

  return {
    props: {
      post,
      previous,
      next,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all post slugs
  const res = await fetch("/api/posts/slugs");
  const slugs = await res.json();

  const paths = slugs.map((slug: string) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default BlogPost;
