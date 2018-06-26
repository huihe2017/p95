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

            this.setState({position: 'absolute'})
            this.setState({otherStyle: false})
            let dance = document.body.clientWidth * 0.46
            let danceCopy = dance
            window.onscroll = null
            window.onscroll = (e) => {
                // console.log(document.documentElement.scrollTop)
                this.props.scroll(document.documentElement.scrollTop)
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

    componentWillMount() {
        this.choceType()
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
            <div className={`wrap ${this.state.otherStyle ?'otherStyle':''}`} style={this.state.otherStyle ?{position: 'fixed'}:{position: 'absolute'}}>

                <div className="cn">
                    <span onClick={()=>{this.LangChange('ch')}} className={`cnSpan ${this.props.language=='en'?'':'ative'}`}>中文 </span> / <span onClick={()=>{this.LangChange('en')}} className={`cnSpan ${this.props.language=='en'?'ative':''}`}>  EN</span>
                </div>
                <div onClick={this.onOpenChange} className='sider'>

                </div>

                <SideBar otherStyle={this.state.otherStyle} language={this.props.language} lang={this.props.lang} click={()=>this.show()} show={this.state.isHide}/>
            </div>
        )
    }
}

export default Header;