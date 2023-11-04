import NewsCard from "./NewsCard";
export default function NewsCardContain() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-1/2 mx-auto">
      <NewsCard
        info="there is some info here there is some info here there is some info herethere is some info here there is some info herethere is some info here"
        title="TEST"
      />
      <NewsCard
        info="there is some info here there is some info here there is some info herethere is some info here there is some info herethere is some info here"
        title="TEST"
      />
      <NewsCard
        info="there is some info here there is some info here there is some info herethere is some info here there is some info herethere is some info here"
        title="TEST"
      />
    </div>
  );
}
