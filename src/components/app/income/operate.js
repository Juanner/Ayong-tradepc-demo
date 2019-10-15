import React from 'react';
/**
 * 操作，选择日期或pagesize
 */
function Operate(props) {
    const { params, formChange, psizeChange, query } = props;
    return (
        <div id="operate">
            <select className="mySelect" value={params.app} onChange={(e) => { formChange('app', e); }}>
                <option value="">交易</option>
            </select>
            <select className="mySelect" value={params.pagesize} onChange={psizeChange}>
                <option>7</option>
                <option>6</option>
                <option>5</option>
            </select>
            日期选择
            {' '}
            <input className="selectDate" type="date" value={params.start} onChange={(e) => { formChange('start', e); }} />
            {' '}
            -
            <input className="selectDate" type="date" value={params.end} onChange={(e) => { formChange('end', e); }} />
            <button id="query" onClick={query} type="button">查询</button>
            <button id="syn" type="button">同步</button>
            <span>交易上次手动同步时间： 2019-09-25 10:09:36</span>
        </div>
    );
}

export default Operate;
