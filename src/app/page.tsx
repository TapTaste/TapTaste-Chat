import { Chat } from "./_components/chat";

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col gap-8 justify-items-start items-center max-w-md p-8 xl:py-12 2xl:py-16">
      <Chat/>
    </div>
  );
}
