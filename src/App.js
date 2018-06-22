import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import Hheader from './components/header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable:false
        }
    }
    componentWillMount() {
        window.location.hash = 'sectionOne'
    }
    submit(){
        alert(1)
    }

    check(){
        if ((this.state.message)&&(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.state.email))&&(/^[A-Za-z\u4e00-\u9fa5]$/.test(this.state.name))) {
            this.setState({
                disable:true
            })
        }
    }

    render() {
        let options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            arrowNavigation: true
        };

        // if (this.state.message) {
        //     // alert(1)
        // }
        // if ( /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.state.email)) {
        //     alert(2)
        // }
        // if (/^[A-Za-z\u4e00-\u9fa5]+$/.test(this.state.name)) {
        //     console.log(3)
        // }

        return (
            <div>

                <Header>
                    <a href="#sectionOne" className="opa">Section One</a>
                    <a href="#sectionTwo">Section Two</a>
                    <a href="#sectionThree">Section Three</a>
                    <a href="#sectionFour">Section Three</a>
                    <a href="#sectionFive">Section Three</a>
                </Header>
                <SectionsContainer {...options}>
                    <Section>
                        <div className='first'>
                            <Hheader/>
                        </div>
                    </Section>
                    <Section>
                        <div className='second'>
                            <div className="secongContent">
                                <span className='secongHeaderT'>
                                      Asset
                                </span>
                                <span className='secongHeaderB'>
                                      Management
                                </span>
                                <div className='secongContentB'>
                                    <img className='secongContentBI' src={require('./images/house.png')} alt=""/>
                                    <span className='secongContentBT'>
                                          The Firm
                                    </span>
                                    <span className='secongContentBC'>
                                          Point95 Global is a boutique firm that specializes in commodity and digital asset trading across international markets.  With the goal of providing “best-in-class” cryptocurrency investment vehicles, <br/>
Point95 uses a proprietary quantitative investment style to search for and filter through exciting opportunities in the constantly changing cryptocurrency markets.
                                    </span>
                                </div>
                                <div className='secongContentB'>
                                    <img className='secongContentBI' src={require('./images/page.png')} alt=""/>
                                    <span className='secongContentBT'>
                                          Strategies
                                    </span>
                                    <span className='secongContentBC'>
                                          Point95 Global employs low risk quantitative trading strategies to exact constant and stable alpha returns in volatile digital asset markets.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className='third'>
                            <div className="thirdContent">
                                <span className="thirdContentT">
                                    Market Making
                                </span>
                                <span className="thirdContentC">
                                    Point95 Global are dedicated to provide liquidity, stabilize spread and prevent market manipulation for our client. The market making model used by Point95 Global has years of practical experience in internationals markets. Point95 Global is capable to provide a stable and high-frequency market-making quotation service to the exchanges and ICO projects.
                                </span>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className='fourth'>
                            <div className="fourthContent">
                                <span className="fourthHeaderT">
                                    The <span style={{color:'#5262ff'}}>Team</span>
                                </span>
                                <span className="fourthHeaderC">
                                    Point95 Global knowledgeable team uses an average 10+ years of experience to manage the portfolios and run quantitative trading strategies.
                                </span>
                                <div className='fourthContentLi'>
                                    <img className='fourthContentLiI' src={require('./images/boss.png')} alt=""/>
                                    <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS">Jingyuan Ye,  CFA
                                            </span>
                                            <a className="fourthContentLiCHA" href="https://www.linkedin.com/in/jingyuan-ye-75b6b128/" target="view_window"><img className="fourthContentLiCHI" src={require('./images/link.png')} alt=""/><i className="iconfont">&#xe631;</i></a>
                                        </span>
                                        <span className="fourthContentLiCC">
                                            Jingyuan has over 10 years of experience in financial serviceindustry. He joined Bank of America Merrill Lynch in London 2007 as the Vice President of Global Market Division, where he was responsible for the risk and portfolio management of OTC and listed equity structured products for EMEA. Currently he is the CEO and a co-founder of Point95 Global.


                                        </span>
                                    </div>
                                </div>
                                <div className='fourthContentLi'>
                                    <img className='fourthContentLiI' src={require('./images/lin.png')} alt=""/>
                                    <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS">Lin Cheung
                                            </span>
                                            <a className="fourthContentLiCHA" href="https://www.linkedin.com/in/lin-cheung-b4a77386/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_top%3BEkL2LE9jREi1FUiWHtXZ5g%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_top-search_srp_result&lici=GH4fPH7gTmmoVSM8%2Fq8NCw%3D%3D" target="view_window"><img className="fourthContentLiCHI" src={require('./images/link.png')} alt=""/><i className="iconfont">&#xe631;</i></a>
                                        </span>
                                        <span className="fourthContentLiCC">
                                            Lin has more than 10 years of experience in trading technology and operation. Previously he was a senior vice president of JPMorgan Chase and responsible for managing an application development team covering Asian electronic trading businesses across multiple asset classes. He is currently the COO and a co-founder of Point95 Global.
                                        </span>
                                    </div>
                                </div>
                                <div className='fourthContentLi'>
                                    <img className='fourthContentLiI' src={require('./images/wang.png')} alt=""/>
                                    <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS">Mike Wang
                                            </span>
                                            <a className="fourthContentLiCHA" href="javascript:void (0)" target="view_window"><img className="fourthContentLiCHI" src={require('./images/link.png')} alt=""/><i className="iconfont">&#xe631;</i></a>
                                        </span>
                                        <span className="fourthContentLiCC">
                                            Mike has extensive experience in quantitative trading. He was a director of CITIC Securities and responsible for managing quantitative strategy, market-making strategies and arbitrage strategies of the A-share market for New OTC market of stocks. He graduated with a Master’s degree from Zhejiang University, China.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className='fifth'>
                            <div className="fifthContent">
                                <span className="fifthHeaderT">
                                    Contact <span style={{color:'#5262ff'}}>us</span>
                                </span>
                                <span className="fifthHeaderC">
                                    Level 6, Champion Tower, NO.3 Garden Road Central, Hong Kong <br/>
                                    No.1206, Building D, DaChong Business Center, NanShan District, Shenzhen
                                </span>
                                <div className="fifthContentC">
                                    <div className="fifthContentCL">
                                        <span className="fifthContentCLT">
                                            YOUR MESSAGE
                                        </span>
                                        <textarea className="fifthContentCLTA" onChange={(e) => {
                                            this.setState({message: e.target.value},()=>{
                                                this.check()
                                            })
                                        }} name="" id="" cols="50" rows="10"></textarea>
                                    </div>
                                    <div className="fifthContentCR">
                                        <div className="fifthContentCLTBox2">
                                            <span className="fifthContentCLT">
                                                YOUR EMAIL
                                            </span>
                                            <input className="fifthContentCLTI" onChange={(e) => {
                                                this.setState({email: e.target.value},()=>{
                                                    this.check()
                                                })
                                            }} type="text"/>
                                        </div>
                                        <div className="fifthContentCLTBox">
                                            <div className="fifthContentCLTBox1">
                                                <span className="fifthContentCLT">
                                                YOUR NAME
                                            </span>
                                                <input className="fifthContentCLTID" onChange={(e) => {
                                                    this.setState({name: e.target.value},()=>{
                                                        this.check()
                                                    })
                                                }} type="text"/>
                                            </div>
                                            <button className="button" disabled={!this.state.disable} onClick={()=>this.submit()}>
                                                SEND
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                </SectionsContainer>
            </div>
        );
    }
}

export default App;
