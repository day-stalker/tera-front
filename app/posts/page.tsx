import { getAllPosts } from "@/api";
import AddPost from "../../components/AddPost";
import PostList from "../../components/PostList";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <button>
        <Link href="/">Logout</Link>
      </button>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Post App</h1>
        <AddPost />
      </div>
      <PostList posts={posts} />
    </main>
  );
}
