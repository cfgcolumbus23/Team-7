import MessageCard from "../components/MessageCard";

export default function Messages() {
  return (
    <div className="flex flex-col justify-center mt-40">
      <h1 className="text-black text-7xl text-center font-semibold">
        Messages
      </h1>
      <MessageCard FriendName="Kevin" Date="11/03/2023" />
      <MessageCard FriendName="Nick" Date="11/03/2023" />
      <MessageCard FriendName="Nick" Date="11/03/2023" />
      <MessageCard FriendName="Nick" Date="11/03/2023" />
      <MessageCard FriendName="Nick" Date="11/03/2023" />
      <MessageCard FriendName="Nick" Date="11/03/2023" />
    </div>
  );
}
