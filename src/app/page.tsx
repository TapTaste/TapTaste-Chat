import { Avatar } from "./_components/avatar"
import { Chat } from "./_components/chat";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-8 justify-items-start items-center max-w-sm p-1 mt-20">
      <Avatar/>
      <Chat/>
    </div>
  );
}
