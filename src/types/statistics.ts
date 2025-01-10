export interface IUserStatistics {
  premiumUserCount: number;
  normalUserCount: number;
}

export interface ITopUserStatistics {
  userId: string;
  image: string;
  postCount: number;
  firstName: string;
  lastName: string;
  email: string;
}
