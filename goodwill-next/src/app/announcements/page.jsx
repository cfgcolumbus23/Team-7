import NewsCard from "./../components/NewsCard";

/**
 * Renders a page with a grid of NewsCard components.
 * @returns {JSX.Element} The Page component.
 */
export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-20 gap-y-10 w-2/3">
        <NewsCard
        info="Click here for more information about the "
        title="TEST"
        />
        <NewsCard
        info="Click here for more information about the "
        title="TEST"
        />
        <NewsCard
        info="Click here for more information about the "
        title="TEST"
        />
        <NewsCard
        info="Click here for more information about the "
        title="TEST"
         />
         <NewsCard
        info="Click here for more information about the "
        title="TEST"
         />
         <NewsCard
        info="Click here for more information about the "
        title="TEST"
         />
         <NewsCard
        info="Click here for more information about the "
        title="TEST"
         />
         <NewsCard
        info="Click here for more information about the "
        title="TEST"
         />
         <NewsCard
        info="Click here for more information about the "
        title="TEST"
         />
      </div>
    </div>
  );
}
