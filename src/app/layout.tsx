import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TapTaste - Parla con lo chef",
  description: "Fatti dare consigli dal nostro chef sul piatto da provare!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} bg-[url(/blob-scene-haikei-9-16.svg)] md:bg-[url(/blob-scene-haikei-16-9.svg)] bg-no-repeat bg-cover bg-center flex justify-center items-center`}>
        {children}
      </body>
    </html>
  );
}
