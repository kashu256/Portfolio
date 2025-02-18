import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { getAllPosts } from "@/lib/api";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  const allPosts = getAllPosts();
  const morePosts = allPosts.slice(1,3);
  return (
    <>
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post)=>(
          <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
    </>
  );
}
