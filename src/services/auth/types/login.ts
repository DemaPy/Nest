export interface LoginResponse {
    accessToken: string
    user: {
        name: string
        age: number
        email: string
    }
}