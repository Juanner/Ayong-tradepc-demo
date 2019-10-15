import React, { Component } from 'react';
import './index.scss';
/**
 * 收入页面
 */
class Income extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: {
                app: 'trade',
                start: '2019-09-09',
                end: '2019-09-25',
                pageno: 1,
                pagesize: 7,
            },
            totalpage: '',
            currentdata: [],
        };
    }

    componentDidMount() {
        this.findData();
    }

    /**
     * 获取数据
     */
    findData = () => {
        fetch('http://ittool.aiyongbao.com/api/getdayreport', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
            }),
            body: new URLSearchParams(this.state.params).toString()
        }).then(res => {
            this.setState({
                currentdata: res.data.content,
                totalpage: Math.ceil(res.data.num / this.state.params.pagesize),
            });
        }).catch(error => {
            console.log(error);
        })
    }

    // 表单数据双向绑定
    formChange = (attr, e) => {
        const { params } = this.state;
        params[attr] = e.target.value;
        this.setState({ params });
    }

    // 查询事件
    query = () => {
        const { params } = this.state;
        params.pageno = 1;
        this.setState({ params });
        this.findData();
    }

    // 页条数改变
    psizeChange = (e) => {
        const { params } = this.state;
        params.pagesize = e.target.value;
        params.pageno = 1;
        this.setState({ params });
        this.findData();
    }

    // 上一页事件
    prepage = () => {
        const { params } = this.state;
        if (params.pageno > 1) {
            params.pageno -= 1;
            this.setState({ params });
            this.findData();
        }
    }

    // 下一页事件
    nextpage = () => {
        const { params } = this.state;
        if (params.pageno < this.state.totalpage) {
            params.pageno += 1;
            this.setState({ params });
            this.findData();
        }
    }
    /**
     * 渲染页面
     */
    render() {
        const { params } = this.state;
        return (
            <div>
                <div id="operate">
                    <select className="mySelect" value={params.app} onChange={this.formChange.bind(this, 'app')}>
                        <option value="">交易</option>
                    </select>
                    <select className="mySelect" value={params.pagesize} onChange={this.psizeChange}>
                        <option>7</option>
                        <option>6</option>
                        <option>5</option>
                    </select>
                    日期选择 <input className="selectDate" type="date" value={params.start} onChange={this.formChange.bind(this, 'start')} /> - 
                    <input className="selectDate" type="date" value={params.end} onChange={this.formChange.bind(this, 'end')} />
                    <button id="query" onClick={this.query}>查询</button>
                    <button id="syn">同步</button>
                    <span>交易上次手动同步时间： 2019-09-25 10:09:36</span>
                </div>
                <div id="data">
                    <table>
                        <thead>
                            <tr>
                                <th>日期</th>
                                <th>付费人数</th>
                                <th>免费人数</th>
                                <th>客单价</th>
                                <th>总收入</th>
                                <th>到期（人）</th>
                                <th>新订（单）</th>
                                <th>续订（单）</th>
                                <th>升级（单）</th>
                                <th>后台（单）</th>
                                <th>续订率</th>
                                <th>一个月（单）</th>
                                <th>一季度（单）</th>
                                <th>半年（单）</th>
                                <th>一年（单）</th>
                                <th>来源</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.currentdata.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.day}</td>
                                            <td>{item.payorder}</td>
                                            <td>{item.freeorder}</td>
                                            <td>{item.singleprice}</td>
                                            <td>{item.totalprice}</td>
                                            <td>{item.vipafterdatenum}</td>
                                            <td>{item.neworder}({item.neworderpay}元)</td>
                                            <td>{item.againorder}({item.againorderpay}元)</td>
                                            <td>{item.updateorder}({item.updateorderpay}元)</td>
                                            <td>{item.autoagainorder}</td>
                                            <td>{item.vipagainpaynum}%</td>
                                            <td>{item.monthcycle}({item.monthcyclepay}元)</td>
                                            <td>{item.aquartercycle}({item.aquartercyclepay}元)</td>
                                            <td>{item.sixmonthscycle}({item.sixmonthscyclepay}元)</td>
                                            <td>{item.ayearcycle}({item.ayearcyclepay}元)</td>
                                            <td>分析</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <div id="page">
                        <div id="prepage" onClick={this.prepage}>上一页</div>
                        <div id="pagenum">
                            <span>{this.state.params.pageno}</span> /
                            <span>{this.state.totalpage}</span>
                        </div>
                        <div id="nextpage" onClick={this.nextpage}>下一页</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Income;
