import { IUser, IUserResponse } from "../types/types";

export function adaptUserResponse(userResponse: IUserResponse): IUser{
    return {
        avatar_url: userResponse.avatar_url,
        bio: userResponse.bio,
        blog: userResponse.blog,
        company: userResponse.company,
        created_at: userResponse.created_at,
        followers: userResponse.followers,
        following: userResponse.following,
        location: userResponse.location,
        login: userResponse.login,
        name: userResponse.name,
        public_repos: userResponse.public_repos,
        twitter_username: userResponse.twitter_username,
        html_url: userResponse.html_url
    }
}