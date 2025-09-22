import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}

        {/* --- THIS IS YOUR "ABOUT HIM" SECTION --- */}
        <section className="mt-16"> {/* Added margin-top for spacing */}
          {/* --- THIS IS THE NEW HEADING --- */}
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            About Him
          </h2>
          {/* --- END OF NEW HEADING --- */}

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            <PostPreview
              title=""
              coverImage="/assets/blog/about/stop-looking.jpg"
              date="2025-09-18T05:35:07.322Z"
              author={{
                name: "Dim.",
                picture: "/assets/blog/authors/me.jpg",
              }}
              slug="/about"
              excerpt="If Nietzsche had Wi-Fi and a gym membership."
            />
          </div>
        </section>

      </Container>
    </main>
  );
}