import Image from "next/image";
import pic from "../../../public/monkey-head.webp"

export function Avatar() {
    return (
        <Image
            id="avatar"
            src={pic}
            alt="Chef"
            width={350}
        />
    );
}