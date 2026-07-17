import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/marketing/site-footer";
import { BLOG_POSTS } from "@/constants/blog-data";
import { EditorialHeader } from "@/components/marketing/blog/editorial-header";
import { FeaturedPostCard } from "@/components/marketing/blog/featured-post-card";
import { BlogCard } from "@/components/marketing/blog/blog-card";

export const metadata = {
  title: "The Flow Journal | Insights by Hamster",
  description: "Systems, analytics, and operational strategies for scaling modern African service businesses.",
};

export default function BlogPage() {
  // Find the true designated featured post
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#171717] flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_top_right,_rgba(217,79,36,0.04),_transparent_60%)] pointer-events-none" />
      
      <SiteNav />

      <section className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
        <EditorialHeader />

        {featuredPost && <FeaturedPostCard post={featuredPost} />}

        <div className="mt-16">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c877d] mb-6">
            Recent Publications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}