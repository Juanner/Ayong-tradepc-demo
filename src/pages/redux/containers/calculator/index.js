import React, { Component } from 'react';
import './index.scss';
import { evaluate } from 'mathjs';

import { connect } from 'react-redux';
import { clickAC, clickDot, clickChange, clickKey, addLog, hideAnimate } from './action';
/**
 * 计算器页面
 */
class Calculator extends Component {
    /**
    * 计算器实现
    */
    calculate = (e) => {
        const { clickAC, clickDot, clickChange, clickKey, addLog, hideAnimate, result } = this.props;
        const key = e.target.innerText;
        switch (key) {
        case 'AC':
            clickAC();
            break;
        case '.':
            clickDot(key);
            break;
        case '+/-':
            clickChange();
            break;
        case '=':
        {
            let res = result;
            res = res.replace(/×/g, '*');
            res = res.replace(/÷/g, '/');
            const express = res;
            try {
                res = String(evaluate(res));
            } catch (event) {
                res = 'Wrong';
            }
            // 增加日志方法，传入需计算的表达式以及计算结果
            addLog(express, res);
            // 1.5s后隐藏动画
            setTimeout(() => {
                hideAnimate();
            }, 1500);
            break;
        }
        default:
            clickKey(key);
        }
    }

    /**
     * 渲染
     */
    render() {
        const { opacity, display, result } = this.props;
        const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
        return (
            <div id="calculator">
                <div id="head">
                    <div id="delete" className="circle" />
                    <div id="hide" className="circle" />
                    <div id="extend" className="circle" />
                </div>
                <div id="result" style={{ opacity }}>{result}</div>
                <div onClick={this.calculate} id="mainCell">
                    {
                        keys.map((item, index) => (
                            <div className={`cell${index}`} key={index}>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div id="loading" style={{ display }}>
                    <div className="loading-container container1">
                        <div className="circle1" />
                        <div className="circle2" />
                        <div className="circle3" />
                        <div className="circle4" />
                    </div>
                    <div className="loading-container container2">
                        <div className="circle1" />
                        <div className="circle2" />
                        <div className="circle3" />
                        <div className="circle4" />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.Calculator,
    { clickAC, clickDot, clickChange, clickKey, addLog, hideAnimate },
)(Calculator);
