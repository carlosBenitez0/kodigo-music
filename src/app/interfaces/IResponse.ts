export interface Song {
  data: SongData;
}

export interface SearchFormData {
  input_search: string;
}

// Definición de la interfaz para la estructura de una canción
export interface SongData {
  data: {
    name: string;
    albumOfTrack: {
      coverArt: {
        sources: { url: string }[];
      };
    };
    artists: {
      items: { profile: { name: string } }[];
    };
  };
}

// Definición de la interfaz para la estructura de un artista
export interface ArtistData {
  name: string;
  image: string;
}

// Definición de la interfaz para la respuesta de todas las canciones
export interface AllSongs {
  tracks: {
    items: SongData[];
  };
}

// Definición de la interfaz para la respuesta de todos los artistas
export interface AllArtists {
  artists: ArtistData[];
}

/* // Tipo para un Artista
type Artist = {
  id: number;
  name: string;
  image: string; // URL de la imagen del artista
};

// Tipo para un Álbum
type Album = {
  id: number;
  title: string;
  coverImage: string; // URL de la portada del álbum
  releaseDate: string; // Fecha de lanzamiento en formato ISO
  artist: Artist; // Relación con el artista
};

// Tipo para una Canción
type Track = {
  id: number;
  title: string;
  duration: number; // Duración en segundos
  album: Album; // Relación con el álbum
  artists: Artist[]; // Lista de artistas que participan en la canción
};

// Tipo para la Lista de Canciones (Playlist)
type Playlist = {
  id: number;
  name: string;
  description: string;
  tracks: Track[]; // Lista de canciones en la playlist
};

const exampleArtist: Artist = {
  id: 1,
  name: "John Doe",
  image: "https://example.com/john.jpg",
};

const exampleAlbum: Album = {
  id: 1,
  title: "Greatest Hits",
  coverImage: "https://example.com/album.jpg",
  releaseDate: "2023-10-23",
  artist: exampleArtist,
};

const exampleTrack: Track = {
  id: 1,
  title: "Amazing Song",
  duration: 240, // en segundos (4 minutos)
  album: exampleAlbum,
  artists: [exampleArtist],
};

const examplePlaylist: Playlist = {
  id: 1,
  name: "My Favorite Songs",
  description: "A collection of my favorite tracks.",
  tracks: [exampleTrack],
};

console.log(examplePlaylist);
 */
