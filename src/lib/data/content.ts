export interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  type: "mixtape" | "album" | "magik-tapes" | "series" | "hiphop" | "international" | "culture";
  platform: "youtube";
  duration?: string;
  tags?: string[];
}

export const content: ContentItem[] = [
  {
    id: "magik-tapes-vol1",
    title: "THE MAGIK TAPES VOL 1 — FT P SQUARE | VYBZ KARTEL | AVRIL | WSTRN | STL",
    thumbnail: "/content/magik-tapes-1.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "magik-tapes",
    platform: "youtube",
    duration: "30:58",
    tags: ["magik-tapes", "afrobeats", "dancehall"]
  },
  {
    id: "lowki-once-upon-a-rhyme",
    title: "LOWKI THE GREAT — ONCE UPON A RHYME (FULL ALBUM)",
    thumbnail: "/content/lowki.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "album",
    platform: "youtube",
    duration: "38:50",
    tags: ["kenya", "hiphop", "album"]
  },
  {
    id: "wakadinali-victims-madness",
    title: "WAKADINALI — VICTIMS OF MADNESS FULL ALBUM",
    thumbnail: "/content/vom.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "album",
    platform: "youtube",
    duration: "57:12",
    tags: ["drill", "kenyan hiphop"]
  },
  {
    id: "best-lil-maina",
    title: "BEST OF LIL MAINA MIXTAPE",
    thumbnail: "/content/maina.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "mixtape",
    platform: "youtube",
    duration: "23:39",
    tags: ["kenya", "afrobeats", "pop"]
  },
  {
    id: "254-hiphop",
    title: "KENYAN HIP HOP IS NOT DEAD #001",
    thumbnail: "/content/254-hiphop.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "hiphop",
    platform: "youtube",
    duration: "16:36",
    tags: ["kenyan hiphop", "culture"]
  },
  {
    id: "24-min-bien",
    title: "24 MIN MIXTAPES — FT BIEN",
    thumbnail: "/content/bien.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "series",
    platform: "youtube",
    duration: "25:01",
    tags: ["afropop", "kenya", "series"]
  },
  {
    id: "24-min-octopizzo",
    title: "24 MIN MIXTAPES — FT OCTOPIZZO",
    thumbnail: "/content/octo.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "series",
    platform: "youtube",
    duration: "26:02",
    tags: ["hiphop", "kenya", "series"]
  },
  {
    id: "sewer-man-a-driller",
    title: "SEWERSYDDA — MAN A DRILLER (MIXTAPE)",
    thumbnail: "/content/sewer.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "mixtape",
    platform: "youtube",
    duration: "24:33",
    tags: ["drill", "kenyan hiphop"]
  },
  {
    id: "21-savage-american-dream",
    title: "21 SAVAGE — AMERICAN DREAM FULL ALBUM",
    thumbnail: "/content/21savage.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "international",
    platform: "youtube",
    duration: "46:42",
    tags: ["trap", "international"]
  },
  {
    id: "best-of-nas",
    title: "THE BEST OF NAS — MIX BY DJ MAGIK",
    thumbnail: "/content/nas.jpg",
    url: "https://www.youtube.com/watch?v=XXXXXXX",
    type: "international",
    platform: "youtube",
    duration: "1:13:46",
    tags: ["hiphop", "usa"]
  }
];
