export default function MessageCard(props) {
  return (
    <div className="ml-60 mr-60 mt-5 border-black border-4 flex justify-between w-100 rounded-lg ">
      <p className="font-semibold text-md text-3xl ml-10">{props.FriendName}</p>
      <p className="font-semibold text-md text-2xl ml-10">{props.Date}</p>
      <button className="text-goodwill-blue text-right trounded-lg mr-10 border-2 p-2 border-goodwill-blue hover:bg-goodwill-blue hover:text-white w-15 md:w-1/8 lg:1/4 ">
        Read
      </button>
    </div>
  );
}
