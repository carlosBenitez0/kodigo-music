/* 
import { IResponse } from "../interfaces/IResponse";

export const getAllData = async () => {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
    "top"
  )}&type=mutli&offset=0&limit=20&numberOfTopResults=20`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "94aa133bb8msh7ce1e94598f1f27p1f38ccjsnde4f08b81105",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
getAllData();

export const getAllSongs = async () => {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
    "popular"
  )}&type=multi&offset=0&limit=20&numberOfTopResults=20`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "94aa133bb8msh7ce1e94598f1f27p1f38ccjsnde4f08b81105",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result: Promise<IResponse> = await response.json();
    console.log((await result).tracks.items.map((item) => item.data.name));
    return result;
  } catch (error) {
    console.error(error);
  }
};
 */

export const allSongs = {
  tracks: {
    items: [
      {
        data: {
          name: "Blinding Lights",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/drzytp5soxfqgrczw09b.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "The Weeknd",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Watermelon Sugar",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607206/Kodigo%20Music/lo2glii2ff2tvhtflkjl.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Harry Styles",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Levitating",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/knacazpkdybfgjsz898m.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Dua Lipa",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Peaches",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/olva3ancjcrpiagat1in.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Mario Theme Movie",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Save Your Tears",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/hsebzlfwvldgfaeqw0qh.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "The Weeknd",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Montero (Call Me By Your Name)",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/u8bxlxjczvlcfsvzgmna.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Lil Nas X",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "good 4 u",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/wnkosveplecwdyfxnrt1.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Olivia Rodrigo",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Stay",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/jhfmg7lh1woxml3xwik4.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "The Kid LAROI",
                },
              },
              {
                profile: {
                  name: "Justin Bieber",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Drivers License",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/ncegg2wqaomw1sujadzd.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Olivia Rodrigo",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Kiss Me More",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/xbtzzyck5fpg9zqhmxzw.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Doja Cat",
                },
              },
              {
                profile: {
                  name: "SZA",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Butter",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/y554yye3trxmn2bks3er.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "BTS",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Heat Waves",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/f7ctzmrehocb4gt0t5me.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Glass Animals",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Leave The Door Open",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607206/Kodigo%20Music/u4v1jpdzcqbeja6w0f44.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Bruno Mars",
                },
              },
              {
                profile: {
                  name: "Anderson .Paak",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Industry Baby",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607205/Kodigo%20Music/pfefxhlnwevh039fxesj.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Lil Nas X",
                },
              },
              {
                profile: {
                  name: "Jack Harlow",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Deja Vu",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/y0jezfhngjrbgqbe1bnr.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Olivia Rodrigo",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Positions",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/wcqiyom99saahcx4rj3g.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Ariana Grande",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Happier Than Ever",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/qdzpulnzjbs3kgagyghk.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Billie Eilish",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Astronaut In The Ocean",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/i1x4rdrgzeidpgauojfw.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Masked Wolf",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Bad Habits",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/p2evxkhassfs0idqtklb.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Ed Sheeran",
                },
              },
            ],
          },
        },
      },
      {
        data: {
          name: "Shivers",
          albumOfTrack: {
            coverArt: {
              sources: [
                {
                  url: "https://res.cloudinary.com/dc69f3e0o/image/upload/v1729607204/Kodigo%20Music/vsltivdp5joveep11cat.jpg",
                },
              ],
            },
          },
          artists: {
            items: [
              {
                profile: {
                  name: "Ed Sheeran",
                },
              },
            ],
          },
        },
      },
    ],
  },
};
