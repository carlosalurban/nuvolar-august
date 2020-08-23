export interface UserProfile {
    id: number;
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
    bio?: string;
    followers: number;
    following: number;
    created_at: string;
    public_repos: number;
}