/*
    该文件专门为Count组建生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'


export const createIncrementAction = (data) => {
    return { type: INCREMENT, data }
}

export const createDecrementAction = data => ({ type: DECREMENT, data })