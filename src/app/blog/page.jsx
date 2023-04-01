import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      <Link
        key={"life"}
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/life-of-a-student-in-ph`}
      >
        <div className="w-full flex flex-col">
          <p>Life of a Student in the Philippines</p>
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">
            3-minute read
          </p>
        </div>
      </Link>
      <Link
        key={"life"}
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/impact-of-kpop-in-ph`}
      >
        <div className="w-full flex flex-col">
          <p>The Impact of Kpop in the Philippines</p>
          <p className="font-mono text-sm text-neutral-500 tracking-tighter">
            2-minute read
          </p>
        </div>
      </Link>
    </section>
  );
}
