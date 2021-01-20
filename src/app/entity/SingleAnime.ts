export class SingleAnime {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: string;
  episodes_aired: string;
  aired_on: string;
  released_on: string;
  rating: string;
  english: [];
  japanese: [{
    name: string;
  }];
  synonyms: [{
    name: string;
  }];
  license_name_ru: string;
  duration: number;
  description: string;
  description_source: string;
  franchise: string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: [{
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }, {
    name: number;
    value: number;
  }];
  rates_statuses_stats: [{
    "name": string;
    "value": number;
  }, {
    "name": string;
    "value": number;
  }, {
    "name": string;
    "value": number;
  }, {
    "name": string;
    "value": number;
  }]
  updated_at: string;
  next_episode_at: string;
  fansubbers: [];
  fandubbers: [];
  licensors: [];
  genres: [{
    id: number;
    name: string;
    russian: string;
    kind: string;
  }];
  studios: [{
    id: number;
    url: string;
    image_url: string;
    player_url: string;
    name: string;
    kind: string;
    hosting: string;
  }];

  screenshots: [{
    original: string;
    preview: string;
  }];

}
