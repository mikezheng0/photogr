export interface IUser {
    id: string
    firstName: string
    lastName: string
    type: string
    rating: number
    photos: {}
    followers: number
    following: number
}

export interface IUserList {
    items: {}
    loading: boolean
    error: any
}

export const fromServer = (record: any): IUser => ({
    id: record.id,
    firstName: record.firstName,
    lastName: record.lastName,
    type: record.type,
    rating: record.rating,
    photos: {},
    followers: record.followers,
    following: record.following
})