import { BlogPost } from "@/constants/blog-data";

interface ArticleHeaderProps {
  post: BlogPost;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="mb-10 space-y-4">
      <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#8c877d]">
        <span className="text-[#943333]">{post.category}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#171717] font-serif leading-[1.2]">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-xs pt-2 text-[#6f6b63]">
        <span className="font-medium text-[#171717]">{post.author}</span>
        <span>·</span>
        <span>Published on {post.publishedAt}</span>
      </div>
    </header>
  );
}