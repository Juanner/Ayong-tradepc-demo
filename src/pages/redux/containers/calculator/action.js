import { nameSpace } from 'utils/index';

const ns = nameSpace('Calculator');
export const CLICK_AC = ns('CLICK_AC');
export const CLICK_DOT = ns('CLICK_DOT');
export const CLICK_CHANGE = ns('CLICK_CHANGE');
export const CLICK_KEY = ns('CLICK_KEY');
export const SHOW_ANIMATE = ns('SHOW_ANIMATE');
export const HIDE_ANIMATE = ns('HIDE_ANIMATE');
export const SEND_LOG_DATA = ns('SEND_LOG_DATA');

/**
 * 点击AC触发清除事件
 */
export const clickAC = () => ({ type: CLICK_AC });
/**
 * @param {小数点} value
 */
export const clickDot = (value) => {
    return { type: CLICK_DOT, value };
};
/**
 * 点击+/-
 */
export const clickChange = () => ({ type: CLICK_CHANGE });
/**
 * 点击计算器的键
 * @param {} value
 */
export const clickKey = (value) => {
    return { type: CLICK_KEY, value };
};
/**
 * 显示动画
 * @param {*} value
 */
export const showAnimate = (value) => {
    return { type: SHOW_ANIMATE, value };
};
/**
 * 隐藏动画
 */
export const hideAnimate = () => ({ type: HIDE_ANIMATE });
/**
 * 增加日志记录
 * @param {计算的表达式} express
 * @param {计算结果} res
 */
export const addLog = (express, res) => {
    return (dispatch) => {
        fetch('http://127.0.0.1/log.php', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            body: new URLSearchParams({ expression: express, result: res }).toString()
        }).then(() => {
            dispatch(showAnimate(res));
        }).catch(error => {console.log(error);} )
    }
}