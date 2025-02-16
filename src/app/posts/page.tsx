import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Pagination } from "@/app/_components/pagination";
import Header from "@/app/_components/header";
import { PostCard } from "../_components/postcard";


export default function Index() {
  const allPosts = getAllPosts();
  const postsPerPage = 10;

  return (
    <main>
      <Container>
        <Header />
        <Pagination posts={allPosts} postsPerPage={postsPerPage} />
      </Container>
    </main>
  );
}
