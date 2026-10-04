// import { Suspense } from "react";
import Link from "next/link";

// import { PostList } from "@/components";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center p-24">
      <h2 className="text-3xl">Hello World - Home</h2>
      <Link className="hover:underline hover:text-blue-500" href="/about">
        Go to About Page
      </Link>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense> */}
    </div>
  );
}
