import { create } from 'zustand'


interface BaseState {
    baseApiUrl: string
    baseFrontUrl: string
}


export const configStore = create<BaseState>()(() => ({
    baseApiUrl: "http://localhost:3000/api",
    baseFrontUrl: "http://localhost:3001"

}))