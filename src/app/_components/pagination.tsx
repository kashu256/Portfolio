"use client";
import React, { useState } from "react";
import { PostCard } from "@/app/_components/postcard";

type PaginationProps = {
  posts: Array<{
    slug: string;
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: {
      name: string;
      picture: string;
    };
  }>;
  postsPerPage: number;
};

export function Pagination({ posts, postsPerPage }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      {/* 記事一覧表示 */}
      <div>
        {currentPosts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            coverImage={post.coverImage}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            author={post.author}
          />
        ))}
      </div>

      {/* ページネーション */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            disabled={page === currentPage}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-blue-700 transition-colors disabled:bg-blue-500"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}