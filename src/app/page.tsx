import { Chat } from "./_components/chat";

export default function Home() {
  return (
    <div className="relative w-full h-full max-h-[100vh] overflow-hidden flex flex-col gap-8 justify-items-start items-center max-w-md p-8">
      <Chat/>
    </div>
  );
}
