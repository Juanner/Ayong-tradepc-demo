import React, { Component } from 'react';
import './index.scss';

import { connect } from 'react-redux';
import { getLog } from './action';
/**
 * 日志页面
 */
class Log extends Component {
    /**
     * 组件挂载完调用getLog，获取日志数据
     */
    componentDidMount() {
        const { getLog } = this.props;
        getLog();
    }

    /**
     * 渲染
     */
    render() {
        const { totalLogData } = this.props;
        return (
            <table id="table">
                <thead id="thead">
                    <tr>
                        <td>输入的表达式</td>
                        <td>计算结果</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        totalLogData.map(item => (
                            <tr key={item.id}>
                                <td>{item.expression}</td>
                                <td>{item.result}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}
export default connect(
    state => state.Log,
    { getLog },
)(Log);
