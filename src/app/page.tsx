import { Aside } from "./shared/components/Aside";
import { Header } from "./shared/components/Header";
import { Main } from "./shared/components/main/Main";

export default function Home() {
  return (
    <div className="min-h-screen w-full grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]">
      <Aside />
      <Header />
      <Main />
    </div>
  );
}
