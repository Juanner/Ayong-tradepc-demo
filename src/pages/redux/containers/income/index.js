import React, { Component } from 'react';
import './index.scss';
import Tabledata from '../../../../components/app/income/tabledata';
import Operate from '../../../../components/app/income/operate';
/**
 * 收入页面
 */
class Income extends Component {
    /**
     * @param {*} props
     */
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

    /**
     * 组件挂载完成调用获取数据
     */
    componentDidMount() {
        this.findData();
    }

    /**
     * 获取数据
     */
    findData = () => {
        const { params } = this.state;
        fetch('http://ittool.aiyongbao.com/api/getdayreport', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            body: new URLSearchParams(params).toString(),
        }).then((res) => {
            this.setState({
                currentdata: res.data.content,
                totalpage: Math.ceil(res.data.num / params.pagesize),
            });
        });
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
        const { params, totalpage } = this.state;
        if (params.pageno < totalpage) {
            params.pageno += 1;
            this.setState({ params });
            this.findData();
        }
    }

    /**
     * 渲染页面
     */
    render() {
        const { params, currentdata, totalpage } = this.state;
        return (
            <div>
                <Operate params={params} formChange={this.formChange} psizeChange={this.psizeChange} query={this.query} />
                <div id="data">
                    <Tabledata currentdata={currentdata} />
                    <div id="page">
                        <div id="prepage" onClick={this.prepage}>上一页</div>
                        <div id="pagenum">
                            <span>{params.pageno}</span>
                            {' '}
                            /
                            <span>{totalpage}</span>
                        </div>
                        <div id="nextpage" onClick={this.nextpage}>下一页</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Income;
