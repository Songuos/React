// 导入createSlice函数，该函数用于将reducer和action creator生成Redux slice
import { createSlice } from "@reduxjs/toolkit"

// 创建一个名为tab的Redux slice，用于管理tab相关的状态
const tabSlice = createSlice({
    // 定义slice的唯一名称
    name: 'tab',
    // 定义slice的初始状态，这里初始侧边栏未折叠
    initialState: {
        isCollapse: false
    },
    // 定义slice中的reducer，用于处理状态变更
    reducers: {
        // 定义一个名为collapseMenu的action，用于切换侧边栏折叠状态
        collapseMenu: state => {
            // 切换isCollapse的布尔值，以达到折叠或展开侧边栏的效果
            state.isCollapse = !state.isCollapse
        }
    }
})

// 导出collapseMenu action creator，供外部调用以触发侧边栏折叠状态的变更
export const { collapseMenu } = tabSlice.actions
// 导出tabSlice的reducer，供Redux store使用以管理侧边栏的状态
export default tabSlice.reducer