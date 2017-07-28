import { User} from '../users/User'

export class Repository {
    id: number;
    name: string;
    html_url: string;
    url: string;
    language: string;
    stargazers_count: number;
    contributors: User[];
    contributorsShow: boolean;
}