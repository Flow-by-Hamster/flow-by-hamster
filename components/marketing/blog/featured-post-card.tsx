import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/constants/blog-data";

interface FeaturedPostCardProps {
  post: BlogPost;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <div className="mb-16">
      <Link 
        href={`/blog/${post.slug}`} 
        className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-[#e7e2d8] p-6 md:p-8 rounded-3xl hover:border-[#d94f24]/30 hover:shadow-[0_12px_40px_rgba(23,23,23,0.02)] transition-all duration-300"
      >
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-2.5 text-[11px] font-bold text-[#8c877d]">
            <span className="text-[#d94f24] uppercase tracking-wider bg-[#fcfaf7] border border-[#e7e2d8] px-2.5 py-0.5 rounded-full">
              Featured Article
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171717] group-hover:text-[#d94f24] font-serif transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-xs md:text-sm text-[#6f6b63] leading-relaxed">
            {post.description}
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs">
            <span className="font-semibold text-[#171717]">{post.author}</span>
            <span className="text-[#9c968e]">/</span>
            <span className="text-[#6f6b63]">{post.publishedAt}</span>
          </div>
        </div>
        
        {/* Optimized Image Wrapper with Aesthetic Blurring and Color Treatment */}
        <div className="md:col-span-5 h-48 md:h-64 w-full bg-[#f4efe8] rounded-2xl border border-[#e7e2d8] relative overflow-hidden">
          {/* Subtle Burnt Orange Blend Layer to unify tone and mask low-quality noise */}
          <div className="absolute inset-0 bg-[#d94f24]/10 mix-blend-multiply z-10 pointer-events-none transition-colors duration-300 group-hover:bg-[#d94f24]/5" />
          
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover filter contrast-[1.02] brightness-[0.98] saturate-[0.9] blur-[0.3px] transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
    </div>
  );
}