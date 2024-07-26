//引入Count的UI组件
import CountUI from '../../components/Count'
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'



/*
    1.mapStateToProps是一个函数，返回一个对象，
    2.对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——状态
    3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
    return {
        count: state
    }
}


/*
    1.mapDispatchToProps是一个函数，返回一个对象，
    2.对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——操作状态的方法
    3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
            //通知redux执行加法
            dispatch(createIncrementAction(number))
        },
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => createIncrementAsyncAction(number, time)
    }
}







/*
    1.使用connect()()创建并暴露一个Count的容器组件
    2.connect(mapStateToProps, mapDispatchToProps)(CountUI)
*/
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)