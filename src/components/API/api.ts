import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'cdeb2d03-8fb6-43f9-b42a-f68cc3f9b75a'
    }
})

export const userAPI = {
    getUser(currentPageNumber: number, pageSize: number) {
        return instance.get( `users?page=${currentPageNumber}&count=${pageSize}`).then(response => response.data)
    },
    deleteUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    addUser(id: number) {
        return instance.post(    `follow/${id}`, {}).then(response => response.data)
    },
    setProfileUser(userID: string | undefined) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    }
}