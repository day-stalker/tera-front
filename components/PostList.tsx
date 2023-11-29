"use client"

import { IPost } from "@/types/posts";
import React, { useEffect, useState } from "react";
import Post from "./Post";

interface PostListProps {
  posts: IPost[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [user, setUser] = useState()
  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      setUser(user);
    }
  }, []);
  
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr className="grid-cols-5 items-center justify-center">
            <th>Id</th>
            <th>ImageUrl</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
