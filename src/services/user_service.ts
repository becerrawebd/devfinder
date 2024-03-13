import { IUserResponse } from "../types/types";

const API_URL = 'https://api.github.com/users'


export async function getUserInfoByUsername(username: string): Promise<IUserResponse> {
    const res = await fetch(`${API_URL}/${username}`, { 
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
        } 
    })
    console.log(res)
    if(res.status < 200 || res.status > 299){
        throw Error('User not found')
    }
    return res.json() as Promise<IUserResponse>
}