import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/marketing/site-footer";
import { BLOG_POSTS } from "@/constants/blog-data";
import { ArticleHeader } from "@/components/marketing/blog/article-header";
import { BlogBody } from "@/components/marketing/blog/blog-body";
import { ArticleFooter } from "@/components/marketing/blog/article-footer";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 1. Await params here for metadata
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Flow Journal`,
    description: post.description,
  };
}

// 2. Make the main component async and await params
export default async function BlogPostDetail({ params }: PostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#171717] flex flex-col relative overflow-hidden">
      <SiteNav />

      <article className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 pt-24 pb-24 relative z-10">
        
        <div className="mb-8">
          <Link href="/blog" className="text-xs font-semibold text-[#943333] hover:underline inline-flex items-center gap-1">
            ← Back to journal entries
          </Link>
        </div>

        <ArticleHeader post={post} />
        
        <BlogBody content={post.body} />
        
        <ArticleFooter tags={post.tags} />

      </article>

      <SiteFooter />
    </main>
  );
}