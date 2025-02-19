import { Avatar } from "./_components/avatar"
import { Input } from "./_components/input"
import { Response } from "./_components/response"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center max-w-sm p-1">
      <Avatar/>
      <Response/>
      <Input/>
    </div>
  );
}
