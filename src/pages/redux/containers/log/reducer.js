import { SHOW_LOG } from './action';

// 对页面prop 数据进行管理
const initialState = { totalLogData: [] };
const defaultAction = { type: 'doNothing' };
/**
 * @param {*} state
 * @param {*} action
 */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case SHOW_LOG:
        return {
            ...state,
            totalLogData: action.value,
        };
    default:
        return state;
    }
}
