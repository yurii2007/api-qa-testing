export interface link {
  name: string;
  path: string;
}

export interface User {
  username: string;
  email: string;
  avatarURL: string;
  token: string;
}

export interface LoginBody {
  email: string;
  password: string;
  username?: string;
  avatarURL?: string;
}
