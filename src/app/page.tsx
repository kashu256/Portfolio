import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { SelfIntro } from "@/app/_components/SelfIntro";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);


  return (
    <main>
      <Container>
        <Intro />
        <div className="flex">
          <div className="flex-auto pr-4">
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            <div className="flex justify-center my-8">
              <Link
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                href="/posts"
              >
                一覧はこちら
              </Link>
            </div>
          </div>
          <SelfIntro />
        </div>
      </Container>
    </main>
  );
}
