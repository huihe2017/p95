import React from 'react';
import style from "./index.css"
import SideBar from './sideBar'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHide: false,
            position: 'relative',
            otherStyle: true

        }
        this.choceType = this.choceType.bind(this)
		this.LangChange = this.LangChange.bind(this)


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

    componentWillMount() {
        if(!this.state.isHide){
            window.addEventListener('scroll',()=>{this.show()})
        }
    }
    show() {
        this.setState({isHide: false})
    }



    onOpenChange = (...args) => {
        this.setState({isHide: !this.state.isHide});
    }
	LangChange(lang){
		this.props.LangChange(lang)
	}

    render() {

        return (
            <div className='wrap'>
                <div className='logo'>
                    <img src={require("./logo.png")}/>
                </div>

                <div onClick={this.onOpenChange} className='sider'>

                </div>
                <div className="cn">
                    <span onClick={()=>{this.LangChange('ch')}} className="cnSpan">中 </span>/
                    <span onClick={()=>{this.LangChange('en')}} className="cnSpan"> EN</span>
                </div>
                <SideBar lang={this.props.lang} click={()=>this.show()} show={this.state.isHide}/>
            </div>
        )
    }
}

export default Header;