import React, {Component} from 'react'
import style from './sideBar.css'


class SideBar extends Component {

    onClickHandle(e) {
        if (localStorage.userName === 'null') {
            e.preventDefault()
            this.props.userCenterClick(true)
        }

    }

    checkedForPath() {
        this.props.click()
    }


    render() {
        let isHide = this.props.show ? '' : 'hide'
        let isHide1 = this.props.show ? '' : 'hide1'
alert(this.props.lang)
        return (
            <div>
                <div  className={`mask ${isHide1}`} style={{height:window.screen.availHeight,width:document.body.clientWidth}} onClick={() => {
                    this.checkedForPath()
                }}>
                </div>
                <div className={`sideBar ${isHide}`} style={{height:window.screen.availHeight}}>
                    <div className='logo1'>
                        <img src={require("../logo.png")}/>
                    </div>
                    <a href="#sectionOne">
                        <div onClick={() => {
                           this.checkedForPath()
                        }}>{this.props.lang.front}
                        </div>
                    </a>

                    <a href="#sectionTwo">
                        <div onClick={() => {
                            this.checkedForPath('/ProductDeal')
                        }}>Asset Management
                        </div>
                    </a>
                    <a href="#sectionThree">
                        <div onClick={ ()=> {
                           this.checkedForPath()
                        }}>Market Making
                        </div>
                    </a>
                    <a href="#sectionFour">
                        <div onClick={() => {
                            this.checkedForPath()
                        }}>The Team
                        </div>
                    </a>
                    <a href="#sectionFive">
                        <div onClick={() => {
                             this.checkedForPath()
                        }}>Contact us
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default SideBar