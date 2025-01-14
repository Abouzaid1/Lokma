import { account, ID } from "./setup"



export const appwriteSignIn = async (email: string, password: string) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        console.log(session);
    } catch (error) {
        throw error;
    }
}
export const appwriteSignUp = async (email: string, password: string, name: string) => {
    try {
        const session = await account.create(ID.unique(), email, password, name)
        console.log(session);
    } catch (error) {
        throw error;
    }
}
export const appwriteGetSession = async () => {
    const session = await account.get();
    return session;
}