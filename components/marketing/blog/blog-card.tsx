import Link from "next/link";
import { BlogPost } from "@/constants/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group flex flex-col justify-between bg-white border border-[#e7e2d8] p-6 rounded-2xl hover:border-[#d94f24]/30 hover:shadow-[0_8px_30px_rgba(23,23,23,0.02)] transition-all duration-300"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-[#8c877d]">
          <span className="text-[#171717]">{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h4 className="text-lg font-semibold tracking-tight text-[#171717] group-hover:text-[#d94f24] font-serif transition-colors duration-200 line-clamp-2">
          {post.title}
        </h4>
        <p className="text-xs leading-relaxed text-[#6f6b63] line-clamp-3">
          {post.description}
        </p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-[#f4efe8] flex items-center justify-between text-[11px] text-[#6f6b63]">
        <span>By {post.author}</span>
        <span className="text-[#d94f24] font-semibold group-hover:translate-x-0.5 transition-transform">Read Article →</span>
      </div>
    </Link>
  );
}