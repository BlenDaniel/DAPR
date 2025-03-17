"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@/app/helpers/styled";
import { tw } from "@/app/helpers/tw";
import Layout from "@/app/components/Layout/index";
import Container from "@/app/components/ui/Container";
import TitleSection from "@/app/components/ui/TitleSection";
import FormatHtml from "@/app/components/utils/FormatHtml";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  coverImage: string;
  author: string;
}

const PostHeader = styled.div`
  ${tw(`mb-8`)}
`;

const PostMeta = styled.div`
  ${tw(`flex flex-wrap items-center gap-4 mb-6 text-gray-600`)}
`;

const PostDate = styled.span`
  ${tw(`text-sm`)}
`;

const PostAuthor = styled.span`
  ${tw(`text-sm font-semibold`)}
`;

const PostContent = styled.div`
  ${tw(`prose prose-lg max-w-none mb-12`)}

  h3 {
    ${tw(`text-xl font-bold mt-6 mb-3`)}
  }

  p {
    ${tw(`mb-4`)}
  }
`;

const CoverImage = styled.div`
  ${tw(`relative rounded-lg overflow-hidden shadow-md mb-8`)}
  aspect-ratio: 16/9;
`;

const TagsContainer = styled.div`
  ${tw(`flex flex-wrap gap-2 mt-6`)}
`;

const Tag = styled.span`
  ${tw(`px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm`)}
`;

const BackButton = styled.a`
  ${tw(
    `inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded mb-8`
  )}
`;

const BlogPostPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const unwrappedParams = React.use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blog-posts/${unwrappedParams.slug}`);

        if (!response.ok) {
          throw new Error("Blog post not found");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [unwrappedParams.slug]);

  if (loading) {
    return (
      <Layout>
        <Container section>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </Container>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <Container section>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
            <p className="mb-6">{error || "Blog post not found"}</p>
            <Link href="/blog" passHref legacyBehavior>
              <BackButton>← Back to Blog</BackButton>
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container section>
        <Link href="/blog" passHref legacyBehavior>
          <BackButton>← Back to Blog</BackButton>
        </Link>

        <PostHeader>
          <TitleSection title={post.title} subtitle={post.description} center />

          <PostMeta>
            <PostDate>{post.date}</PostDate>
            <span>•</span>
            <PostAuthor>By {post.author}</PostAuthor>
          </PostMeta>
        </PostHeader>

        <CoverImage>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </CoverImage>

        <PostContent>
          <FormatHtml content={post.content} />
        </PostContent>

        <TagsContainer>
          {post.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
      </Container>
    </Layout>
  );
};

export default BlogPostPage;
