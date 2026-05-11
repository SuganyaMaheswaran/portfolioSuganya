import Link from "next/link";

export default function BlogPost({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <main>
      <section style={{ marginTop: "60px", marginBottom: "80px" }}>
        <h1>Blog Post: {params.slug}</h1>
        <p>Coming soon.</p>
        <p>
          <Link href="/blog">← Back to blog</Link>
        </p>
      </section>
    </main>
  );
}
