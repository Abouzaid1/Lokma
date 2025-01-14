import { appwriteGetSession } from '@/appwrite/auth'
import { create } from 'zustand'

interface UserState {
    user: any
    getUser: () => void
}

export const useUserStore = create<UserState>()((set) => ({
    user: null,
    getUser: async () => {
        const user = await appwriteGetSession()
        console.log('User:', user)
        if (user != null) {
            set(() => ({ user: user }))
        }
    },
}))
