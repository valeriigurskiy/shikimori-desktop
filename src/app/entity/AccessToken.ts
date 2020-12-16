export class AccessToken {
  access_token: string
  created_it: number
  expires_In: number
  refresh_Token: string
  _scope: string
  token_Type: string

  get accesstoken(): string {
    return this.access_token;
  }

  set accesstoken(value: string) {
    this.access_token = value;
  }

  get createdit(): number {
    return this.createdit;
  }

  set createdit(value: number) {
    this.createdit = value;
  }

  get expiresIn(): number {
    return this.expiresIn;
  }

  set expiresIn(value: number) {
    this.expiresIn = value;
  }

  get refreshToken(): string {
    return this.refreshToken;
  }

  set refreshToken(value: string) {
    this.refreshToken = value;
  }

  get scope(): string {
    return this._scope;
  }

  set scope(value: string) {
    this._scope = value;
  }

  get tokenType(): string {
    return this.tokenType;
  }

  set tokenType(value: string) {
    this.tokenType = value;
  }
}
