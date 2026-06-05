import Cursor from "@/components/cursor/cursor";
import { Header } from "@/components/sections";
import SmoothScroll from "@/components/smooth-scroll";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />

        <main className="flex-1">{children}</main>
      </div>

      <Cursor />
    </SmoothScroll>
  );
}