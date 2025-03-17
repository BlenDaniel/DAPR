import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

import Container from "../../components/ui/Container";
import TitleSection from "../../components/ui/TitleSection";

import { SectionTitle } from "../../helpers/definitions";

import * as Styled from "./styles";

interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
}

interface PostsProps {
  sectionTitle: SectionTitle;
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ sectionTitle, posts }) => {
  return (
    <Container section={true}>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Posts>
        {posts.map((post) => (
          <Styled.Post key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                <Styled.Card>
                  <Styled.Image>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Styled.Image>
                  <Styled.Content>
                    <Styled.Date>{post.date}</Styled.Date>
                    <Styled.Title>{post.title}</Styled.Title>
                    <Styled.Description>{post.description}</Styled.Description>
                  </Styled.Content>
                  <Styled.Tags>
                    {post.tags.map((tag) => (
                      <Styled.Tag key={tag}>{tag}</Styled.Tag>
                    ))}
                  </Styled.Tags>
                </Styled.Card>
              </motion.div>
            </Link>
          </Styled.Post>
        ))}
      </Styled.Posts>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch section title data
  const sectionTitleRes = await fetch("/api/blog-section");
  const sectionTitle: SectionTitle = await sectionTitleRes.json();

  // Fetch posts data
  const postsRes = await fetch("/api/posts");
  const posts: Post[] = await postsRes.json();

  return {
    props: {
      sectionTitle,
      posts,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default Posts;
