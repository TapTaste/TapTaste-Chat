import { Avatar } from "./_components/avatar"
import { Chat } from "./_components/chat";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center max-w-sm p-1">
      <Avatar/>
      <Chat/>
    </div>
  );
}
