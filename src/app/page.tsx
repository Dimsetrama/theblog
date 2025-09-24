import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { HomePageClient } from "@/app/_components/home-page-client"; // Import the new client component

export default function Index() {
  const allPosts = getAllPosts(); // This runs on the server

  return (
    <main>
      <Container>
        <Intro />
        <HomePageClient allPosts={allPosts} /> {/* Pass the posts as a prop */}
      </Container>
    </main>
  );
}