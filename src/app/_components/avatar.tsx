import Image from "next/image";

export function Avatar() {
    return (
        <Image
            id="avatar"
            src="/monkey-head.webp"
            alt="Chef"
            width={384}
            height={0}
            className="max-w-[192px] md:max-w-[256px]"
            style={{ width: '100%', height: 'auto' }}
        />
    );
}