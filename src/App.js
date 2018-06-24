import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import Hheader from './components/header';


const en = 
{
        firstTitleL: 'Asset',
		firstTitleR:'Management',
        firstSTitleL: 'Asset',
        firstSTitleR:'Management',
		front:'home',
        secondFPartT:'The Firm',
        secondFPartCF:'Point95 Global is a digital asset management company that specializes in quantitative trading in digital assets. With the goal of providing “best-in-class” digital asset investment vehicles.',
        secondFPartCL:'Point95 Global uses a proprietary quantitative investment style to search for and filter through exciting opportunities in the constantly changing digital asset markets.',
        secondSPartT:'Strategies',
        secondSPartC:'Point95 Global employs low risk quantitative trading strategies to exact constant and stable alpha returns in volatile digital asset markets. ',
        thirdPartT:'Market making',
        thirdPartC:'Point95 Global employs low risk quantitative trading strategies to exact constant and stable alpha returns in volatile digital asset markets. ',
        fourthPartTTF:'The',
        fourthPartTTL:'Team',
        fourthPartTC:"Point95 Global's team with an average 10+ years of experience to manage clients' digital asset portfolios and run quantitative trading strategies.",
        fourthFPartCT:'Jingyuan Ye,  CFA',
        fourthFPartCTN:'CEO and Co-Founder',
        fourthFPartCC:'Jingyuan has over 10 years of experience in trading and portfolio management. Prior to assuming his current role, he served as the CEO of PPS International (Holdings) Ltd (a HK listed company). Prior to that, he joined Bank of America Merrill Lynch in London 2007 and was the Vice President of Global Market Division, where he was responsible for the risk and portfolio management of Equity Structured Products for EMEA. He is a Chartered Financial Analyst (CFA), and received a BSc (Hons) in Mathematics, Operational Research, Statistics and Economics from University of Warwick, United Kingdom, and an MSc in Applied Statistics from University of Oxford, United Kingdom.',
        fourthSPartCT:'Lin Cheung',
        fourthSPartCTN:'COO and Co-Founder',
        fourthSPartCC:"Lin has more than 10 years of experience in trading technology and operation. Previously he was a senior vice president of JPMorgan Chase and responsible for managing an application development team covering Asian electronic trading business across multiple asset classes. He received Masters' and Bachelor's degree in Computer Science from the University of Hong Kong.",
        fourthTPartCT:'Mike Wang',
        fourthTPartCTN:'CIO and Co-Founder ',
        fourthSTPartCC:"Mike has extensive experience in quantitative trading. He was a director of CITIC Securities and responsible for managing quantitative strategies, marking-making strategies and arbitrage strategies in stock markets. He graduated with a Master's degree from Zhejiang University, China.",
        fifthPartTT:'Contact',
        fifthPartTC:'us',
        fifthPartAddress:'Level 6, Champion Tower, NO.3 Garden Road Central, Hong Kong',
        fifthPartFT:'YOUR MASSAGE',
        fifthPartST:'YOUR EMAIL',
        fifthPartTT1:'YOUR NAME',
        fifthPartSend:'SEND',
    }

const ch = 
{
        firstTitleL: '资 管',
		firstTitleR:'业 务',
        firstSTitleL: '资管',
		firstSTitleR:'业务',
		front:'首页',
        secondFPartT:'公司',
        secondFPartCF:'Point95 Global 是一所数字资产管理公司，专门从事数字资产量化交易，并坚持以提供业内“最优级”数字资产投资工具作为目标。',
        secondFPartCL:'Point95 Global 通过使用海量的数据验证而形成的独有的量化投资策略，做到在不断变化的数字资本市场中搜索和筛选投资机会。  ',
        secondSPartT:'策略',
        secondSPartC:'Point95 Global 采用低风险的量化交易策略，在动荡的数字资本市场中确保持续和稳定的alpha收益。',
        thirdPartT:'做市商',
        thirdPartC:'Point95 Global 致力于提供做市商服务，其中包括提供流动性、稳定价格、防止恶意市场操纵行为和进行套利交易。多年来，我们凭借着专有的做市商模型在复杂的传统金融市场中做出了杰出的表现。与此同时，在数字资产市场中的做市商服务成效也被证明是出类拔萃的。我们做市商服务的客户通常为交易所和ICO项目方。',
        fourthPartTTF:'团',
        fourthPartTTL:'队',
        fourthPartTC:'Point95 Global 的团队在管理客户的数字资产投资组合和运行量化交易策略上有平均超过十年的专业经验。',
        fourthFPartCT:'叶景源，特许金融分析师',
        fourthFPartCTN:'首席执行以及联合创始人',
        fourthFPartCC:'叶景源拥有着超过10年的交易和投资组合管理经验。他是一名特许金融分析师，在英国华威大学获得数学、运营研究、统计和经济学学士学位，在英国牛津大学获得应用统计学理学硕士学位。他于2007年在伦敦加入了美银美林(Bank of America Merrill Lynch)，并担任全球市场部门副总裁，负责EMEA股票结构性产品的风险和投资组合管理。之后，曾担任PPS国际(控股)有限公司(香港上市公司)的首席执行官。现联合创立Point95 Global并出任CEO。',
        fourthSPartCT:'张炼',
        fourthSPartCTN:'首席运营官及联合创始人',
        fourthSPartCC:'Lin香港大学计算机科学硕士，拥有超过10年的金融交易技术和运营经验。此前，他是摩根大通(JPMorgan Chase)的高级副总裁，负责管理一个涵盖多个资产类别的亚洲电子交易业务的应用开发团队。现联合创立Point95 Global并出任COO。',
        fourthTPartCT:'Mike Wang',
        fourthTPartCTN:'首席信息官及联合创始人',
        fourthSTPartCC:'Mike中国浙江大学计算机硕士，曾担任中信证券董事，在量化交易方面有多年的经验。在中信证券的工作中负责管理股票市场的量化策略、做市策略和套利策略。现联合创立Point95 Global并出任CIO。',
        fifthPartTT:'联系',
        fifthPartTC:'我们',
        fifthPartAddress:'香港九龙尖沙咀广东道30号新港中心二座9楼905-6室',
        fifthPartFT:'你的信息',
        fifthPartST:'你的邮箱',
        fifthPartTT1:'你的姓名',
        fifthPartSend:'发送',
    }


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false,
			lang:'en',
            name:''
        }
    }

    componentWillMount() {

    }

    submit() {

        var data = 'mail=' + this.state.email + '&userName=' + this.state.name + '&message=' + this.state.message

        fetch("http://www.p95g.com/api/user/sendmsg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }).then(res => res.json()).then(res => {
            if (res.code === 0) {
                alert('发送成功')
            }
        });

        // var xhr = new XMLHttpRequest();
        // // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // xhr.open('post', 'http://www.p95g.com/api/user/sendmsg' );
        // xhr.send({rr:2,tt:5});
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         console.log(xhr.responseText);
        //     }
        // };
    }

    check() {
        if ((this.state.message) && (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.state.email)) && (/^[A-Za-z\u4e00-\u9fa5]+$/.test(this.state.name))) {
            this.setState({
                disable: true
            })
        }else {
            this.setState({
                disable: false
            })
        }
    }

	LangChange(lang){
		this.setState({
                lang
            })
	}
	
    render() {
		let lang;
		if(this.state.lang==='en'){
			lang = en
		}else{
			lang = ch
		}
        return (
            <div id="main">
                <a className='first' name="sectionOne">
                    <Hheader language={this.state.lang} lang={lang} LangChange={this.LangChange.bind(this)} />
                </a>

                <a className='second' name="sectionTwo">
                    <div className="secongContent">
                        <span className='secongHeaderT'>
						{lang.firstTitleL}
                        </span>
                        <span className='secongHeaderB'>
                                      {lang.firstTitleR}
                                </span>
                        <div className='secongContentB'>
                            <img className='secongContentBI' src={require('./images/house.png')} alt=""/>
                            <span className='secongContentBT'>
                                          {lang.secondFPartT}
                                    </span>
                            <span className='secongContentBC'>
                                           {lang.secondFPartCF}
                                <br/>
                                           {lang.secondFPartCL}
                                    </span>
                        </div>
                        <div className='secongContentB'>
                            <img className='secongContentBI' src={require('./images/page.png')} alt=""/>
                            <span className='secongContentBT'>
                                          {lang.secondSPartT}
                                    </span>
                            <span className='secongContentBC'>
                                          {lang.secondSPartC}
                                    </span>
                        </div>
                    </div>
                </a>

                <a className='third' name="sectionThree">
                    <div className="thirdContent">
                                <span className="thirdContentT">
                                    {lang.thirdPartT}
                                </span>
                        <span className="thirdContentC">
                                    {lang.thirdPartC}
                                </span>
                    </div>
                </a>

                <a className='fourth' name="sectionFour">
                    <div className="fourthContent">
                                <span className="fourthHeaderT">
                                    {lang.fourthPartTTF}{this.state.lang=='en'?' ':''}<span style={{color: '#5262ff'}}>{lang.fourthPartTTL}</span>
                                </span>
                        <span className="fourthHeaderC">
                                    {lang.fourthPartTC}
                                </span>
                        <div className='fourthContentLi'>
                            <img className='fourthContentLiI' src={require('./images/boss.png')} alt=""/>
                            <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS"> {lang.fourthFPartCT}<span
                                                className="fourthContentLiCHSL"> &nbsp; {lang.fourthFPartCTN}</span>
                                            </span>
                                            <a className="fourthContentLiCHA"
                                               href="https://www.linkedin.com/in/jingyuan-ye-75b6b128/"
                                               target="view_window"><img className="fourthContentLiCHI"
                                                                         src={require('./images/link.png')} alt=""/><i
                                                className="iconfont">&#xe631;</i></a>
                                        </span>
                                <span className="fourthContentLiCC">
                                          {lang.fourthFPartCC}
                                        </span>
                            </div>
                        </div>
                        <div className='fourthContentLi'>
                            <img className='fourthContentLiI' src={require('./images/lin.png')} alt=""/>
                            <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS">{lang.fourthSPartCT}<span
                                                className="fourthContentLiCHSL"> &nbsp;{lang.fourthSPartCTN}</span>
                                            </span>
                                            <a className="fourthContentLiCHA"
                                               href="https://www.linkedin.com/in/lin-cheung-b4a77386/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_top%3BEkL2LE9jREi1FUiWHtXZ5g%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_search_srp_top-search_srp_result&lici=GH4fPH7gTmmoVSM8%2Fq8NCw%3D%3D"
                                               target="view_window"><img className="fourthContentLiCHI"
                                                                         src={require('./images/link.png')} alt=""/><i
                                                className="iconfont">&#xe631;</i></a>
                                        </span>
                                <span className="fourthContentLiCC">
                                            {lang.fourthSPartCC}
                                        </span>
                            </div>
                        </div>
                        <div className='fourthContentLi'>
                            <img className='fourthContentLiI' src={require('./images/wang.png')} alt=""/>
                            <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS">{lang.fourthTPartCT}<span
                                                className="fourthContentLiCHSL"> &nbsp;{lang.fourthTPartCTN}</span>
                                            </span>
                                            <a className="fourthContentLiCHA" href="javascript:void (0)"
                                               target="view_window"><img className="fourthContentLiCHI"
                                                                         src={require('./images/link.png')} alt=""/><i
                                                className="iconfont">&#xe631;</i></a>
                                        </span>
                                <span className="fourthContentLiCC">
                                                {lang.fourthSTPartCC}
                                        </span>
                            </div>
                        </div>
                        <div className='logoBox'>

                            <a href="http://www.ox.ac.uk/"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/4.png')} alt=""/>
                            </a>
                            <a href="https://www.hku.hk/"
                                target="view_window">
                                <img className='logoBoxT' src={require('./images/7.png')} alt=""/>
                            </a>
                            <a href="http://www.zju.edu.cn/"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/3.png')} alt=""/>
                            </a>
                            <a href="http://www.fudan.edu.cn/2016/index.html"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/5.png')} alt=""/>
                            </a>
                            <a href="http://www.tsinghua.edu.cn/publish/thu2018/index.html"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/6.png')} alt=""/>
                            </a>
                            <a href="http://www.jpmorganchina.com.cn/country/CN/zh/jpmorgan"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/9.png')} alt=""/>
                            </a>
                            <a href="http://www.cs.ecitic.com/newsite/"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/2.png')} alt=""/>
                            </a>
                            <a href="https://www.ml.com/"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/1.png')} alt=""/>
                            </a>
                            <a href=" http://www.morganstanley.com/"
                               target="view_window">
                                <img className='logoBoxT' src={require('./images/8.png')} alt=""/>
                            </a>

                        </div>
                    </div>
                </a>

                <a className='fifth' name="sectionFive">
                    <div className="fifthContent">
                                <span className="fifthHeaderT">
                                   {lang.fifthPartTT}{this.state.lang=='en'?' ':''}<span style={{color: '#5262ff'}}>{lang.fifthPartTC}</span>
                                </span>
                        <span className="fifthHeaderC">
                                    {lang.fifthPartAddress}
                                </span>
                        <div className="fifthContentC">
                            <div className="fifthContentCL">
                                        <span className="fifthContentCLT">
                                            {lang.fifthPartFT}
                                        </span>
                                <textarea className="fifthContentCLTA" onChange={(e) => {
                                    this.setState({message: e.target.value}, () => {
                                        this.check()
                                    })
                                }} name="" id="" cols="50" rows="10"></textarea>
                            </div>
                            <div className="fifthContentCR">
                                <div className="fifthContentCLTBox2">
                                            <span className="fifthContentCLT">
                                                {lang.fifthPartST}
                                            </span>
                                    <input className="fifthContentCLTI" onChange={(e) => {
                                        this.setState({email: e.target.value}, () => {
                                            this.check()
                                        })
                                    }} type="text"/>
                                </div>
                                <div className="fifthContentCLTBox">
                                    <div className="fifthContentCLTBox1">
                                                <span className="fifthContentCLT">
                                                {lang.fifthPartTT1}
                                            </span>
                                        <input className="fifthContentCLTID" onChange={(e) => {
                                            this.setState({name: e.target.value}, () => {
                                                this.check()
                                            })
                                        }} type="text"/>
                                    </div>
                                    <button className="button"
                                            onClick={() => this.submit()} disabled={!this.state.disable}>
                                        {lang.fifthPartSend}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>

            </div>
        );
    }
}

export default App;
