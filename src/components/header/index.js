import Tools from 'utils/index';
import React from 'react';
import { Navigation, Icon } from 'qnui';

const { Item } = Navigation;
/**
    @author Mothpro
    导航条
* */
class Header extends React.Component {
    render() {
        const linkConfig = {
            // 本地localhost或127.0.0.1环境下的路径设置
            local: {
                reduxCalculator: '/dist/redux.html#/calculator',
                reduxLog: '/dist/redux.html#/log',
                reduxIncome: '/dist/redux.html#/income',
            },
            onLine: {// 自行根据服务端路径定义
                reduxCalculator: '/dist/redux.html#/calculator',
                reduxLog: '/dist/redux.html#/log',
                reduxIncome: '/dist/redux.html#/income',
            },
        };

        const links = Tools.isLocal() ? linkConfig.local : linkConfig.onLine;

        return (
            <Navigation
                type="filling"
                activeDirection="bottom"
            >
                <li className="navigation-logo-zone">
                    <Icon type="email" />
                    <span>爱用交易</span>
                </li>
                <Item
                    itemid="1"
                    text="计算器"
                    icon="calendar"
                    link={links.reduxCalculator}
                    />                         
                <Item
                    itemid="2"
                    text="日志"
                    icon="form"
                    link={links.reduxLog}
                    />               
                <Item
                    itemid="3"
                    text="收入分析"
                    icon="training"
                    link={links.reduxIncome}
                />
                <li className="navigation-toolbar">
                    <ul>
                        <li>
                            <Icon type="atm" />
                            <span>帮助</span>
                        </li>
                        <li>
                            <Icon type="set" />
                            <span>设置</span>
                        </li>
                    </ul>
                </li>
            </Navigation>
        );
    }
}
export default Header;
