import Image from "next/image";

export function SelfIntro() {
  return (
    <aside className="w-1/4 min-w-[200px] mt-4 flex flex-col items-center">
      <div className="border border-gray-200 p-4 rounded shadow hover:shadow-lg transition-shadow mb-8 w-full max-w-sm">
        <div className="flex items-center space-x-4 mb-4">
          <Image
            src="/assets/blog/authors/KASHU.png" // 画像のパスを指定してください
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h2 className="text-xl font-bold">自己紹介</h2>
        </div>
        <p>川上佳修です。<br></br>普段はご飯を食べたりゲームをしたりしています。 <br></br>作成した作品の紹介や日々の記録を残して行くので、興味があったら是非読んでみてください。</p>
      </div>
    </aside>
  );
}