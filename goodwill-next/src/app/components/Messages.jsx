import MessageCard from "../components/MessageCard";

export default function Messages() {
  return (
    <div className="flex flex-col justify-center mt-40">
      <h1 className="text-black text-7xl text-center font-semibold">
        Messages
      </h1>
      <button className="mt-5 ml-60 mr-60 text-goodwill-blue text-center trounded-lg mr-10 border-2 p-2 border-goodwill-blue hover:bg-goodwill-blue hover:text-white w-15 md:w-1/8 lg:1/4 ">
        New Message
      </button>
      <MessageCard FriendName="Kevin" Date="11/03/2023" />
      <MessageCard FriendName="Nick" Date="11/03/2023" />
    </div>
  );
}
