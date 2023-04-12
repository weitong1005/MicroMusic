import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useCounterStore = defineStore('counterStore', {
    state: () => {
        return {
            counter: 0,
        }
    },
    actions: {
        increment() {
            this.counter++;
        },
        async add100(): Promise<number> {
            const result = <number>await new Promise((resolve) => {
                setTimeout(() => { resolve(100) }, 2000)
            })
            this.counter += result
            return this.counter
        }

    },
    getters: {
        doubleCount: (state) => state.counter * 2
    }
})