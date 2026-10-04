import { Post } from "@/types/post";

export const PostList = async () => {
  const response = await fetch("https://api.vercel.app/blog");
  if (!response.ok) {
    throw new Error("Data fetching fail");
  }
  const posts: Post[] = await response.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
