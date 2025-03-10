import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto post">
      <div
        className={`${markdownStyles["markdown"]} prose prose-lg prose-slate max-w-none leading-relaxed`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
