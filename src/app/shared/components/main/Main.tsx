import { Slide, SlideArtists } from "../Slide";

export const Main = () => {
  return (
    <main className="p-4 pt-8 min-w-full overflow-hidden ">
      <h2 className="text-2xl mb-8 ml-4">Canciones</h2>
      <Slide />
      <h2 className="text-2xl mb-8 mt-8 ml-4 ">Artistas</h2>
      <SlideArtists />
    </main>
  );
};
