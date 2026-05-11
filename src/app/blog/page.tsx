import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development and systems thinking.",
};

export default function BlogPage() {
  return (
    <main>
      <section style={{ marginTop: "60px", marginBottom: "80px" }}>
        <h1>Blog</h1>
        <p>Coming soon. My thoughts on software development, systems thinking, and problem-solving.</p>
        <p>
          <Link href="/">← Back home</Link>
        </p>
      </section>
    </main>
  );
}
