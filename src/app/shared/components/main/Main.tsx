import { CardSong } from "./Cards";

export const Main = () => {
  return (
    <main className="border-2 border-black p-8">
      <div className="flex items-center gap-8 ">
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
      </div>
    </main>
  );
};
