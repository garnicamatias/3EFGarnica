import { LoginUser } from './loginUser';
export interface Session {
    isSessionActive : boolean,
    activeUser ?: LoginUser
}