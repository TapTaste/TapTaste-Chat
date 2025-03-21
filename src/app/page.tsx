import { Avatar } from "./_components/avatar"
import { Chat } from "./_components/chat";

export default function Home() {
  return (
    <div className="relative h-full max-h-[100vh] overflow-hidden flex flex-col gap-8 justify-items-start items-center max-w-sm p-1 py-8">
      <Avatar/>
      <Chat/>
    </div>
  );
}
