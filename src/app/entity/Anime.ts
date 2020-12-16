export class Anime{
  _chapters: number
  _createdAt: string
  _episodes: number
  _id: number
  _rewatches: number
  _score: number
  _status: string
  _targetId: number
  _targetType: string
  _text: string
  _text_html: string
  _updatedAt: string
  _user_id: number
  _volumes: number


  get chapters(): number {
    return this._chapters;
  }

  set chapters(value: number) {
    this._chapters = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get episodes(): number {
    return this._episodes;
  }

  set episodes(value: number) {
    this._episodes = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get rewatches(): number {
    return this._rewatches;
  }

  set rewatches(value: number) {
    this._rewatches = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get targetId(): number {
    return this._targetId;
  }

  set targetId(value: number) {
    this._targetId = value;
  }

  get targetType(): string {
    return this._targetType;
  }

  set targetType(value: string) {
    this._targetType = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get text_html(): string {
    return this._text_html;
  }

  set text_html(value: string) {
    this._text_html = value;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get volumes(): number {
    return this._volumes;
  }

  set volumes(value: number) {
    this._volumes = value;
  }


}
