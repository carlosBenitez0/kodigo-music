import { Aside } from "./shared/components/Aside";
import { Header } from "./shared/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]">
      <Aside />
      <Header />
      <main className="border-2 border-black">main</main>
    </div>
  );
}
