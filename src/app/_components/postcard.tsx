import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";


type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostCard({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
  }: Props) {
    return (
      <section className="border border-gray-200 p-4 rounded shadow hover:shadow-lg transition-shadow mb-8 flex flex-col md:flex-row">
      {/* 左側：カバー画像 */}
      <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      {/* 右側：タイトル・日付・抜粋文・アバター */}
      <div className="flex flex-col justify-between md:w-2/3">
        <div>
          <h3 className="mb-2 text-2xl font-bold">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-2 text-sm text-gray-500">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-gray-700 mb-4">{excerpt}</p>
        </div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
    );
  }
  