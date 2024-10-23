export interface IResponse {
  albums: Albums;
  artists: Albums;
  episodes: Episodes;
  genres: Albums;
  playlists: Playlists;
  podcasts: Podcasts;
  topResults: TopResults;
  tracks: Tracks;
  users: Albums;
}

export interface Albums {
  totalCount: number;
  items: AlbumsItem[];
}

export interface AlbumsItem {
  data: PurpleData;
}

export interface PurpleData {
  uri: string;
  name: string;
  artists: Artists;
  coverArt: CoverArt;
  date: DateClass;
}

export interface Artists {
  items: PurpleItem[];
}

export interface PurpleItem {
  uri: string;
  profile: Publisher;
}

export interface Publisher {
  name: string;
}

export interface CoverArt {
  sources: Source[];
}

export interface Source {
  url: string;
  width: number | null;
  height: number | null;
}

export interface DateClass {
  year: number;
}

export interface Episodes {
  totalCount: number;
  items: EpisodesItem[];
}

export interface EpisodesItem {
  data: FluffyData;
}

export interface FluffyData {
  uri: string;
  name: string;
  coverArt: CoverArt;
  duration: Duration;
  releaseDate: ReleaseDate;
  podcast: Podcast;
  description: string;
  contentRating: ContentRating;
}

export interface ContentRating {
  label: Label;
}

export enum Label {
  Explicit = "EXPLICIT",
  None = "NONE",
}

export interface Duration {
  totalMilliseconds: number;
}

export interface Podcast {
  coverArt: CoverArt;
}

export interface ReleaseDate {
  isoString: Date;
}

export interface Playlists {
  totalCount: number;
  items: PlaylistsItem[];
}

export interface PlaylistsItem {
  data: any[] | DataData;
}

export interface DataData {
  uri: string;
  name: string;
  description: string;
  images: Images;
  owner: Publisher;
}

export interface Images {
  items: CoverArt[];
}

export interface Podcasts {
  totalCount: number;
  items: PodcastsItem[];
}

export interface PodcastsItem {
  data: TentacledData;
}

export interface TentacledData {
  uri: string;
  name: string;
  coverArt: CoverArt;
  type: string;
  publisher: Publisher;
  mediaType: string;
}

export interface TopResults {
  items: TopResultsItem[];
  featured: any[];
}

export interface TopResultsItem {
  data: StickyData;
}

export interface StickyData {
  uri: string;
  id?: string;
  name: string;
  albumOfTrack?: AlbumOfTrack;
  artists?: Artists;
  contentRating?: ContentRating;
  duration?: Duration;
  playability?: Playability;
  description?: string;
  images?: Images;
  owner?: Publisher;
  coverArt?: CoverArt;
  date?: DateClass;
}

export interface AlbumOfTrack {
  uri: string;
  name: string;
  coverArt: CoverArt;
  id: string;
  sharingInfo: SharingInfo;
}

export interface SharingInfo {
  shareUrl: string;
}

export interface Playability {
  playable: boolean;
}

export interface Tracks {
  totalCount: number;
  items: TracksItem[];
}

export interface TracksItem {
  data: IndigoData;
}

export interface IndigoData {
  uri: string;
  id: string;
  name: string;
  albumOfTrack: AlbumOfTrack;
  artists: Artists;
  contentRating: ContentRating;
  duration: Duration;
  playability: Playability;
}
