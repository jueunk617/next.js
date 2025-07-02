"use client"; 

import Link from "next/link";
import { useEffect, useState } from "react";

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Page() {
    const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

    useEffect(() => {
        fetch(`${NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`)
          .then((res) => res.json())
          .then(setPosts);
      }, []);

    return (
      <>
        <h1>글 목록</h1>

        {posts.length == 0 && <div>로딩중...</div>}
  
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }