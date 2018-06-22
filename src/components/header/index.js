import React from 'react';
import style from "./index.css"
import SideBar from './sideBar'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            position: 'relative',
            otherStyle: true

        }
        this.choceType = this.choceType.bind(this)


    }



    componentWillReceiveProps() {
        // if (window.location.hash.substr(1).indexOf('/') !== -1) {
        //     this.setState({position: 'relative'})
        //     this.setState({otherStyle: true})
        //     window.onscroll = null
        //     return true
        // } else {
        //     if (!window.onscroll) {
        //         this.choceType()
        //         return true
        //     }
        // }
        // return true
    }

    choceType() {
        if (window.location.hash.substr(1).indexOf('/?') !== -1) {
            this.setState({position: 'absolute'})
            this.setState({otherStyle: false})
            let dance = document.body.clientWidth * 0.46
            let danceCopy = dance
            window.onscroll = null
            window.onscroll = (e) => {
                //console.log(document.body.scrollTop)
                var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;

                if (oTop < danceCopy) {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                    return false
                }

                if (oTop - dance < 0) {
                    this.setState({position: 'fixed'})
                    this.setState({otherStyle: true})
                } else {
                    this.setState({position: 'absolute'})
                    this.setState({otherStyle: false})
                }
                dance = oTop
            }
        }
    }

    componentWillUnmount() {

    }

    onOpenChange = (...args) => {
        console.log(args);
        this.setState({open: !this.state.open});
    }

    render() {
        const Array = [ {label: '首页', link: '/'}, {label: '产品交易', link: '/forexPresentation'}, {
            label: '交易平台',
            link: '/tradingPlatform'
        }, {label: '关于海豚汇', link: '/aboutUs'}, {label: '海豚学院', link: '/school'}, {
            label: '账户出金',
            link: '/outgold'
        }, {label: '账户入金', link: '/ingold'}, {label: '用户资料', link: '/detailUserMsg'}, {
            label: '更改密码',
            link: '/modifyPwd'
        }, {label: '历史记录', link: '/history'}]
        const sidebar = (<ul style={{paddingTop: 20}}>
            {Array.map((i, index) => {
                return (<li className={style.navlist} key={index}>
                    {i.label}
                </li>);
            })}
        </ul>);
        return (
            <div className='wrap'>
                <div className='logo'>
                    <img src={require("./logo.png")}/>
                </div>
                <div onClick={this.onOpenChange} className='sider'>
                </div>
                {/*<SideBar/>*/}
            </div>
        )
    }
}

export default Header;