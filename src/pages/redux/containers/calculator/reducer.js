import { CLICK_AC, CLICK_DOT, CLICK_CHANGE, CLICK_KEY, SHOW_ANIMATE, HIDE_ANIMATE } from './action';

// 对页面prop 数据进行管理
const initialState = {
    result: '0',
    opacity: 1,
    display: 'none',
};
const defaultAction = { type: 'doNothing' };
/**
 * @param {*} state
 * @param {*} action
 */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case CLICK_AC:
        return Object.assign({}, state, { result: '0' });
    case CLICK_DOT:
        return {
            ...state,
            result: state.result === '0' ? `0${action.value}` : state.result + action.value,
        };
    case CLICK_CHANGE:
        return {
            ...state,
            result: state.result.substr(0, 1) === '-' ? state.result.substr(1) : `-${state.result}`,
        };
    case CLICK_KEY:
        return {
            ...state,
            result: state.result === '0' ? action.value : state.result + action.value,
        };
    case SHOW_ANIMATE:
        return {
            ...state,
            opacity: 0,
            display: 'block',
            result: action.value,
        };
    case HIDE_ANIMATE:
        return {
            ...state,
            opacity: 1,
            display: 'none',
        };
    default:
        return state;
    }
}
