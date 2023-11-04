// "use client";

// const apiKey = "";
// const userToken = "";

// const App = () => {
//   const chatClient = useClient({
//     sender,
//     recipient,
//     message,
//     date,
//   });

//   // const [channel, setChannel] = useState<StreamChannel>
//   useEffect(() => {
//     if (!chatClient) return;

//     const spaceChannel = chatClient.channel("livestream", "spacex", {
//       image: "https://goo.gl/Zefkbx",
//       name: "SpaceX launch discussion",
//     });

//     setChannel(spaceChannel);
//   }, [chatClient]);

//   if (!chatClient) return null;

//   return (
//     <Chat client={chatClient} theme="str-chat__theme-dark">
//       <Channel channel={channel}>
//         <Window>
//           <ChannelHeader live />
//           <VirtualizedMessageList />
//           <MessageInput focus />
//         </Window>
//       </Channel>
//     </Chat>
//   );
// };

// export default App;

export default function Page() {}
