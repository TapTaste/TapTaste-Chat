import Image from "next/image";

export function Avatar() {
    return (
        <Image
            id="avatar"
            src="/monkey-head.webp"
            alt="Chef"
            width={300}
            height={0}
            className="max-w-[200px] md:max-w-[250px] xl:max-w-[300px]"
            style={{ width: '100%', height: 'auto' }}
        />
    );
}