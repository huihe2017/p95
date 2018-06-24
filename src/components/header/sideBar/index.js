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
        return (
            <div>
                <div  className={`mask ${isHide1}`} style={{height:window.screen.availHeight,width:document.body.clientWidth}} onClick={() => {
                    this.checkedForPath()
                }}>
                </div>
                <div className={`sideBar ${isHide}`} style={{height:window.screen.availHeight}}>
                    <a href="#sectionOne">
                        <div onClick={() => {
                           this.checkedForPath()
                        }}>{this.props.lang.front}
                        </div>
                    </a>

                    <a href="#sectionTwo">
                        <div onClick={() => {
                            this.checkedForPath('/ProductDeal')
                        }}>{this.props.lang.firstSTitleL}{this.props.language=='en'?' ':''}{this.props.lang.firstSTitleR}
                        </div>
                    </a>
                    <a href="#sectionThree">
                        <div onClick={ ()=> {
                           this.checkedForPath()
                        }}>{this.props.lang.thirdPartT}
                        </div>
                    </a>
                    <a href="#sectionFour">
                        <div onClick={() => {
                            this.checkedForPath()
                        }}>{this.props.lang.fourthPartTTF}{this.props.language=='en'?' ':''}{this.props.lang.fourthPartTTL}
                        </div>
                    </a>
                    <a href="#sectionFive">
                        <div onClick={() => {
                             this.checkedForPath()
                        }}>{this.props.lang.fifthPartTT}{this.props.language=='en'?' ':''}{this.props.lang.fifthPartTC}
                        </div>
                    </a>
                </div>
            </div>

        )
    }
}

export default SideBar