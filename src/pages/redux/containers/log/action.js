import { nameSpace } from 'utils/index';

const ns = nameSpace('Log');
export const SHOW_LOG = ns('SHOW_LOG');
/**
 * 展示数据
 * @param {日志数据}} value
 */
export const showLog = (value) => {
    return { type: SHOW_LOG, value };
};
/**
 * 获取日志数据
 */
export const getLog = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1/log.php', { method: 'POST' }).then(res => res.json()).then((res) => {
            dispatch(showLog(res));
        });
    };
};
