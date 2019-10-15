import React from 'react';
/**
 * 表格数据
 */
function Tabledata(props) {
    const { currentdata } = props;
    return (
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
                    currentdata.map(item => (
                        <tr key={item.id}>
                            <td>{item.day}</td>
                            <td>{item.payorder}</td>
                            <td>{item.freeorder}</td>
                            <td>{item.singleprice}</td>
                            <td>{item.totalprice}</td>
                            <td>{item.vipafterdatenum}</td>
                            <td>
                                {item.neworder}
                                (
                                {item.neworderpay}
                                元)
                            </td>
                            <td>
                                {item.againorder}
                                (
                                {item.againorderpay}
                                元)
                            </td>
                            <td>
                                {item.updateorder}
                                (
                                {item.updateorderpay}
                                元)
                            </td>
                            <td>{item.autoagainorder}</td>
                            <td>
                                {item.vipagainpaynum}
                                %
                            </td>
                            <td>
                                {item.monthcycle}
                                (
                                {item.monthcyclepay}
                                元)
                            </td>
                            <td>
                                {item.aquartercycle}
                                (
                                {item.aquartercyclepay}
                                元)
                            </td>
                            <td>
                                {item.sixmonthscycle}
                                (
                                {item.sixmonthscyclepay}
                                元)
                            </td>
                            <td>
                                {item.ayearcycle}
                                (
                                {item.ayearcyclepay}
                                元)
                            </td>
                            <td>分析</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Tabledata;
