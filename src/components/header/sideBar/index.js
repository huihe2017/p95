import React, {Component} from 'react'
import style from './sideBar.css'


class SideBar extends Component {

    onClickHandle(e) {
        if (localStorage.userName === 'null') {
            e.preventDefault()
            this.props.userCenterClick(true)
        }

    }

    checkedForPath(sidePath) {

    }

    render() {
        // let isHide = this.props.show ? '' : style.hide

        return (
            <div>
                <div className={style.sideBar }>
                    <a href="#sectionOne">
                        <div className={(() => {
                            return this.checkedForPath('/')
                        })()}>首页
                        </div>
                    </a>
                    <a href="#sectionTwo">
                        <div className={(() => {
                            return this.checkedForPath('/ProductDeal')
                        })()}>产品交易
                        </div>
                    </a>
                    <a href="#sectionThree">
                        <div className={(() => {
                            return this.checkedForPath('/DealTerrace')
                        })()}>交易平台
                        </div>
                    </a>
                    <a href="#sectionFour">
                        <div className={(() => {
                            return this.checkedForPath('/aboutUs')
                        })()}>关于海豚汇
                        </div>
                    </a>
                    <a href="#sectionFive">
                        <div className={(() => {
                            return this.checkedForPath('/DolphinSchool')
                        })()}>合伙人计划
                        </div>
                    </a>





                </div>

            </div>
        )
    }
}

export default SideBar