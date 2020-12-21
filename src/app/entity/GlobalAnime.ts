import {Anime} from "./Anime";

export class User {
  avatar: string
  id: number
  image: {
    x16: string
    x32: string
    x48: string
    x64: string
    x80: string
    x148: string
    x160: string
  }
  last_online_at: string
  nickname: string
  url: string
}

export class GlobalAnime{
  anime: Anime
  chapters: number
  createdAt: string
  episodes: number
  id: number
  rewatches: number
  score: number
  status: string
  targetId: number
  targetType: string
  text: string
  text_html: string
  updatedAt: string
  user_id: number
  volumes: number
  user: User

}
