export class WhoAmI{
  private _avatar: string;
  private _birth_on: string;
  private _id: number;
  private _image: {
    x160: string
    x148: string
    x80: string
    x64: string
    x48: string
    x32: string
    x16: string
  };
  private _last_online_at: string;
  private _locale: string;
  private _username: string;
  private _nickname: string;
  private _sex: string;
  private _url: string;
  private _website: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get image(): { x160: string; x148: string; x80: string; x64: string; x48: string; x32: string; x16: string } {
    return this._image;
  }

  set image(value: { x160: string; x148: string; x80: string; x64: string; x48: string; x32: string; x16: string }) {
    this._image = value;
  }

  get last_online_at(): string {
    return this._last_online_at;
  }

  set last_online_at(value: string) {
    this._last_online_at = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get birth_on(): string {
    return this._birth_on;
  }

  set birth_on(value: string) {
    this._birth_on = value;
  }

  get locale(): string {
    return this._locale;
  }

  set locale(value: string) {
    this._locale = value;
  }
}
