import React, {Component} from 'react';
import './App.css';
import Hheader from './components/header';
import Point from './components/point';

const en =
    {
        firstTitleL: 'Asset',
        firstTitleR: 'Management',
        firstSTitleL: 'Asset',
        firstSTitleR: 'Management',
        firstSP: 'Specializing in Digital Assets Management',
        front: 'Home',
        secondFPartT: 'Company',
        secondFPartCF: 'Point95 Global is a digital asset management company that specializes in quantitative trading in digital assets. With the goal of providing “best-in-class” digital asset investment vehicles.',
        secondFPartCL: 'Point95 Global uses a proprietary quantitative investment style to search for and filter through exciting opportunities in the constantly changing digital asset markets. The trading team has more than 30-year experience in trading various traditional asset classes, including equities, ETF, forex, option, etc.',
        secondSPartT: 'Strategies',
        secondSPartC: 'Point95 Global employs low risk quantitative trading strategies to exact constant and stable alpha returns in volatile digital asset markets. In addition, Point95 Global utilizes state-of-the-art proprietary software and advanced valuation models that allow our trading algorithms to be one of the most competitive in the major crypto-currencies.',
        thirdPartT: 'Market Making',
        thirdPartTL: 'Market',
        thirdPartTR: 'Making',
        thirdPartTP: 'Best Service Provider in Marketing Making',
        thirdPartC: 'Point95 Global is dedicated to providing market making services including:',
        thirdPartCP1: 'Provision of Liquidity',
        thirdPartCP2: 'Price Stabilization',
        thirdPartCP3: 'Prevention of Market Manipulation',
        thirdPartCP4: 'Arbitrage Trading',
        thirdPartCC: 'Our proprietary market making model has achieved outstanding performance in traditional complex financial markets for many years, and the results of market making in digital assets are also proven exceptional. Our typical clients of market making services are exchanges and ICO projects.',
        fourthPartTTF: 'Management',
        fourthPartTTL: 'Team',
        fourthPartTC: "Point95 Global’s management team with an average 10+ years of experience to manage clients’ digital asset portfolios and run quantitative trading strategies.",
        fourthFPartCT: 'Jingyuan Ye,  CFA',
        fourthFPartCTN: 'CEO and Co-Founder',
        fourthFPartCC: "Jingyuan has over 10 years of experience in trading and portfolio management. Prior to assuming his current role, he served as the CEO of PPS International (Holdings) Ltd (a HK listed company). Prior to that, he joined Bank of America Merrill Lynch's London office in 2007 and was the Vice President of Global Market Division, where he was responsible for the risk and portfolio management of Equity Structured Products for EMEA. He is a Chartered Financial Analyst (CFA), and received a BSc (Hons) in Mathematics, Operational Research, Statistics and Economics from University of Warwick, United Kingdom, and a MSc in Applied Statistics from University of Oxford, United Kingdom.",
        fourthSPartCT: 'Lin Cheung',
        fourthSPartCTN: 'CBO and Co-Founder',
        fourthSPartCC: "Lin has more than 10 years of experience in trading technology and operations. Previously he was a senior vice president at JPMorgan Chase and responsible for managing an application development team covering Asian electronic trading business across multiple asset classes. He received Master's and Bachelor's degrees in Computer Science from the University of Hong Kong.",
        fourthTPartCT: 'Mike Wang',
        fourthTPartCTN: 'CIO and Co-Founder ',
        fourthSTPartCC: "Mike is a co-founder of POINT95 Global, and he has over 10 years intensive experience in quantitative trading. Before POINT95 Global, Mike was a senior director who managed quantitative trading desk in the headquarter of Guotai Junan Securities (GTJS), and responsible for the research and implementation of their machine learning based quantitative trading strategies. In this role, Mike leaded his team to design and implement GTJN’s market making and arbitrage trading strategies. He graduated with a Master’s degree in Computer Science from Zhejiang University, China. Now, he leads the implementation of algorithm trading strategy research and automated trading engine, and the research on the application of artificial intelligence in trading strategy improvements.",
        fourthFoPartCT: 'Defmond Hung',
        fourthFoPartCTN: 'COO and Co-Founder',
        fourthFoTPartCC: 'Defmond has over 20 years of global financial services experience across front-to-back technology, transformation management, regulatory & compliance controls, financial management, and global operations. Previous leadership roles he has held include COO & Head of Regulatory Controls of Asia Equities Technology at JPMorgan Chase, Head of IT at Morgan Stanley Bank International (China), Head of Asia-ex Equities Technology at Morgan Stanley, and Head of Operations at KGI Hong Kong.  He received a BSc in Economics from the University of Nebraska at Kearney, USA; a Master’s degree in International Management from Thunderbird School of Global Management, USA; and an EMBA from Tsinghua University, China.',
        fifthPartTT: 'Contact',
        fifthPartTC: 'Us',
        fifthPartTP: 'Partnership and Careers',
        fifthPartAddress: 'Level 6, Champion Tower, Three Garden Road, Central, Hong Kong SAR',
        fifthPartAddressB: 'E-mail us at : ',
        fifthPartFT: 'YOUR MASSAGE',
        fifthPartST: 'YOUR EMAIL',
        fifthPartTT1: 'YOUR NAME',
        fifthPartSend: 'SEND',
        fifthPartSendS: 'SENT SUCCESSFULLY',
        fifthPartSendF: 'UNABLE TO SEND ',
        sixPartTT: 'Execution ',
        sixPartTC: 'Services',
        sixPartC: "Point95 Global's mission is to offer the best execution that reduces market impact to a minimum. And we continually invest in the development of our execution algorithms to meet industry best execution standards − all while providing customized solutions that our clients need. For example, we help clients with the execution of block trades including buy/sell major cryptocurrencies like BTC, ETH and altcoins. Our trading expertise and comprehensive customer service make Point95 Global the best financial institution for your execution needs.",
    }

const ch =
    {
        firstTitleL: '资管',
        firstTitleR: '业务',
        firstSTitleL: '资管',
        firstSTitleR: '业务',
        firstSP: '专注于数字资产管理',
        front: '首页',
        secondFPartT: '公司',
        secondFPartCF: 'Point95 Global 是一所数字资产管理公司，专门从事数字资产量化交易，并坚持以提供业内“最优级”数字资产投资工具作为目标。',
        secondFPartCL: 'Point 95 Global的交易团队拥有超过30年的股票、交易所交易基金、外汇和期权等多种传统资产类别的交易经验。通过使用海量的数据验证而形成的独有的量化投资策略，Point95 Global能做到在不断变化的数字资本市场中搜索和筛选投资机会。',
        secondSPartT: '策略',
        secondSPartC: 'Point95 Global采用低风险的量化交易策略，在动荡的数字资本市场中确保持续和稳定的alpha收益。同时Point95 Global应用最先进的专有交易软件和估值模型，使得Point95 Global的交易算法在主要的数字货币交易市场中保持核心竞争优势。',
        thirdPartT: '做市商业务',
        thirdPartTL: '做市商',
        thirdPartTR: '业务',
        thirdPartTP: '提供最佳的做市商服务',
        thirdPartC: 'Point95 Global 致力于提供优质的做市商服务，其中包括提供：',
        thirdPartCP1: '交易市场流动性管理',
        thirdPartCP2: '稳定市值价格',
        thirdPartCP3: '防止恶意市场操纵行为',
        thirdPartCP4: '进行套利交易',
        thirdPartCC: '多年来，我们凭借着专有的做市商模型在复杂的传统金融市场中做出了杰出的表现。与此同时，在数字资产市场中的做市商服务成效也被证明是出类拔萃的。我们做市商服务的客户通常为交易所和ICO项目方。',
        fourthPartTTF: '管理',
        fourthPartTTL: '团队',
        fourthPartTC: 'Point95 Global的团队在管理客户的数字资产投资组合和运行量化交易策略上有平均超过十年的专业经验',
        fourthFPartCT: '叶景源，特许金融分析师',
        fourthFPartCTN: '首席执行官以及联合创始人',
        fourthFPartCC: '叶景源拥有着超过10年的交易和投资组合管理经验。他是一名特许金融分析师，在英国华威大学获得数学、运营研究、统计和经济学学士学位，在英国牛津大学获得应用统计学理学硕士学位。他于2007年在伦敦加入了美银美林(Bank of America Merrill Lynch)，并担任全球市场部门副总裁，负责EMEA股票结构性产品的风险和投资组合管理。之后，曾担任PPS国际(控股)有限公司(香港上市公司)的首席执行官。现联合创立Point95 Global并出任CEO。',
        fourthSPartCT: '张炼',
        fourthSPartCTN: '首席商务官及联合创始人',
        fourthSPartCC: 'Lin香港大学计算机科学硕士，拥有超过10年的金融交易技术和运营经验。此前，他是摩根大通(JPMorgan Chase)的高级副总裁，负责管理一个涵盖多个资产类别的亚洲电子交易业务的应用开发团队。现联合创立Point95 Global并出任CBO。',
        fourthTPartCT: 'Mike Wang',
        fourthTPartCTN: '首席投资官及联合创始人',
        fourthSTPartCC: 'Mike中国浙江大学计算机科学硕士, 曾就职于国内知名券商国泰君安证券总部量化交易团队，担任程序化交易经理及业务董事。负责国泰君安自营投资部门机器学习量化对冲交易策略模型的设计研发工作，主导参与过做市系统套利系统开发设计及实现。现联合创立Point95 Global并出任CIO,负责程序化交易策略实现及公司人工智能应用于交易项目研发推进。',
        fourthFoPartCT: '洪亿民',
        fourthFoPartCTN: '首席运营官及联合创始人',
        fourthFoTPartCC: '洪亿民拥有超过20年的国际金融业务经验, 在IT的前中后端、变革管理、合规控制、财务管理和全球运营管理方面有丰富的专业知识。他曾担任的管理和领导职位包括 - 摩根大通亚州区证券科技信息部门的首席运营官及法规防治主管, 摩根士丹利国际银行(中国)的科技信息部主管, 摩根士丹利亚太区证券科技信息部主管, 凯基证券（香港）的运营主管。他分别获得美国内布拉斯加大学经济学学士、 美国雷鸟全球管理学院国际管理硕士、 北京清华大学EMBA的学位。现联合创立Point95 Global并出任COO。',
        fifthPartTT: '联系',
        fifthPartTC: '我们',
        fifthPartTP: '商务合作，人才招聘',
        fifthPartAddress: '香港中环花园道3号冠君大厦6楼',
        fifthPartAddressB: '联系我们：',
        fifthPartFT: '你的信息',
        fifthPartST: '你的邮箱',
        fifthPartTT1: '你的姓名',
        fifthPartSend: '发送',
        fifthPartSendS: '发送成功',
        fifthPartSendF: '发送失败',
        sixPartTT: '交易执行',
        sixPartTC: '服务',
        sixPartC: "Point95 Global的使命是为客户提供出色的交易执行服务，从而将市场影响降低到最低限度。我们不断投入于交易执行算法的开发，不断创新和升级以达到业界的最高标准为目的。同时我们会根据客户的需要，为其提供私人订制的解决方案。例如，我们可以帮助客户执行大宗交易，包括买卖比特币，以太币和其他数字货币。专业的交易知识和完善的客户服务使Point95 Global将成为您的最佳选择。",
    }


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false,
            lang: 'en',
            name: '',
            word: 'fifthPartSend',
            send: false,
            success: false,
            color: 'nor'
        }
    }

    scroll(e) {
        e = e || window.event;
        // console.log(e);
        if (e > 1800) {
            this.setState({
                action: true
            })
        }
        if (e > 2500) {
            this.setState({
                action2: true
            })
        }
        if (e > 3940) {

            this.setState({
                action1: true
            })
        }
    }

    submit() {
        let that = this
        var data = 'mail=' + this.state.email + '&userName=' + this.state.name + '&message=' + this.state.message
        fetch("https://www.p95g.com/api/user/sendmsg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }).then(res => res.json())
            .then(res => {
                this.setState({send: true}, () => {
                    // console.log(111,this.state.send);
                })
                if (res.code === 0) {
                    that.setState({success: true}, () => {
                        if (this.state.success) {
                            // console.log(222);
                            this.setState({
                                color: 'nor1',
                                word: 'fifthPartSendS',
                                disable: false
                            })
                        }
                    })
                }
            }).catch((e) => {
            this.setState({
                color: 'nor2',
                word: 'fifthPartSendF',
                disable: false
            })
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
        this.setState({
            word: 'fifthPartSend',
            color: 'nor',
            disable: true
        })
        if ((this.state.message) && (/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.state.email)) && (/^[A-Za-z\u4e00-\u9fa5]+$/.test(this.state.name))) {
            this.setState({
                disable: true
            })
        } else {
            this.setState({
                disable: false
            })
        }
    }

    LangChange(lang) {
        this.setState({
            lang
        })
    }

    render() {
        let lang;
        if (this.state.lang === 'en') {
            lang = en
        } else {
            lang = ch
        }

        return (
            <div id="main">
                <Hheader scroll={this.scroll.bind(this)} language={this.state.lang} lang={lang}
                         LangChange={this.LangChange.bind(this)}/>
                <a className={`first ${this.state.lang === 'en' ? 'bg' : 'bgC'}`} name="sectionOne">
                    <div className='pointBox'>
                        <div style={{position: 'relative'}}>
                            <Point language={this.state.lang} lang={lang}></Point>
                        </div>
                    </div>
                </a>
                <a className='second' name="sectionTwo">
                    <div className="secongContent">
                        <span className='secongHeaderT'>
						{lang.firstTitleL}{this.state.lang === 'en' ? ' ' : ''}

                            <span className='secongHeaderB'>
                                {lang.firstTitleR}
                            </span>
                        </span>
                        <div className='secongContentB'>
                            <img className='secongContentBI' src={require('./images/house.png')} alt=""/>
                            <span className='secongContentBT'>
                                          {lang.secondFPartT}
                                    </span>
                            <span
                                className={`secongContentBC ${this.state.lang === 'en' ? 'secongContentBC1' : 'secongContentBC2'}`}>
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
                            <span
                                className={`secongContentBC ${this.state.lang === 'en' ? 'secongContentBC1' : 'secongContentBC2'}`}>
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
                        <div className="thirdContentCBox">
                            <span
                                className={`thirdContentCBoxC ${this.state.lang === 'en' ? '' : 'thirdContentCBoxC1'}`}>
                                {lang.thirdPartCP1}
                            </span>
                            <span
                                className={`thirdContentCBoxC ${this.state.lang === 'en' ? '' : 'thirdContentCBoxC1'}`}>
                                {lang.thirdPartCP2}
                            </span>
                            <span
                                className={`thirdContentCBoxC ${this.state.lang === 'en' ? '' : 'thirdContentCBoxC1'}`}>
                                {lang.thirdPartCP3}
                            </span>
                            <span
                                className={`thirdContentCBoxC ${this.state.lang === 'en' ? '' : 'thirdContentCBoxC1'}`}>
                                {lang.thirdPartCP4}
                            </span>
                        </div>
                        <div className="Hline">
                        </div>
                        <div className="thirdContentCC">
                            {lang.thirdPartCC}
                        </div>
                        <ul className={`exchangeList ${this.state.action ? 'exchangeList1' : ''}`}>
                            <li>
                                <a href="https://www.huobi.pro/zh-cn/"
                                   target="view_window">< img onMouseEnter={(e) => {

                                    e.target.src = require('./images/huo.png')
                                }} onMouseOut={(e) => {
                                    // console.log(44, e);
                                    e.target.src = require('./images/huo.png')
                                }} src={require('./images/huo.png')}/></a>
                            </li>
                            <li>
                                <a href="https://www.bitfinex.com/"
                                   target="view_window">< img onMouseEnter={(e) => {

                                    e.target.src = require('./images/bitx.png')
                                }} onMouseOut={(e) => {

                                    e.target.src = require('./images/bitx.png')
                                }} src={require('./images/bitx.png')}/></a>
                            </li>

                            <li>
                                <a href=" https://www.bithumb.com/"
                                   target="view_window">< img onMouseEnter={(e) => {

                                    e.target.src = require('./images/b.png')
                                }} onMouseOut={(e) => {

                                    e.target.src = require('./images/b.png')
                                }} src={require('./images/b.png')}/></a>
                            </li>

                            <li>
                                <a href="https://www.okex.com/"
                                   target="view_window">< img onMouseEnter={(e) => {

                                    e.target.src = require('./images/ok.png')
                                }} onMouseOut={(e) => {

                                    e.target.src = require('./images/ok.png')
                                }} src={require('./images/ok.png')}/></a>
                            </li>
                            <li>
                                <a href="https://www.coinsuper.com/"
                                   target="view_window">< img onMouseEnter={(e) => {

                                    e.target.src = require('./images/coin.png')
                                }} onMouseOut={(e) => {

                                    e.target.src = require('./images/coin.png')
                                }} src={require('./images/coin.png')}/></a>
                            </li>
                        </ul>
                        <div className={`moreBox ${this.state.action ? 'exchangeList1' : ''}`}>
                            <div className="cir"></div>
                            <div className="cir"></div>
                            <div className="cir"></div>
                            <div className="more">
                                more
                            </div>
                        </div>
                    </div>
                </a>
                <a className='six' name="sectionSix">
                    <div className="sixthContent">
                        <span className="sixthContenT">
                            {lang.sixPartTT} <span style={{color: '#5262ff'}}>{lang.sixPartTC}</span>
                        </span>
                        <img className="sixthContenIB" src={require('./images/black.png')} alt=""/>
                        <span
                            className={`sixthContenC ${this.state.lang === 'en' ? 'sixthContenC1' : 'sixthContenC2'}`}>
                             {lang.sixPartC}
                        </span>
                        <img className={`sixthBg ${this.state.action2 ? 'sixthBg1' : ''}`}
                             src={require('./images/sixBg.png')} alt=""/>
                    </div>
                </a>
                <a className='fourth' name="sectionFour">
                    <div className="fourthContent">
                                <span className="fourthHeaderT">
                                    {lang.fourthPartTTF}{this.state.lang == 'en' ? ' ' : ''}<span
                                    style={{color: '#5262ff'}}>{lang.fourthPartTTL}</span>
                                </span>
                        <span className="fourthHeaderC">
                                    {lang.fourthPartTC}
                                </span>
                        <div className='fourthContentLi'>
                            <img className='fourthContentLiI' src={require('./images/boss.png')} alt=""/>
                            <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS"> {lang.fourthFPartCT} &nbsp;&nbsp;<span
                                                className="fourthContentLiCHSL">{lang.fourthFPartCTN}</span>
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
                            <img className='fourthContentLiI' src={require('./images/hong.png')} alt=""/>
                            <div className="fourthContentLiC">
                                <span className="fourthContentLiCH">
                                    <span className="fourthContentLiCHS"> {lang.fourthFoPartCT} &nbsp;&nbsp;<span
                                        className="fourthContentLiCHSL">{lang.fourthFoPartCTN}</span>
                                    </span>
<a className="fourthContentLiCHA"
   href="https://www.linkedin.com/in/defmond-hung-94556a169/"
   target="view_window"><img className="fourthContentLiCHI"
                             src={require('./images/link.png')} alt=""/><i
    className="iconfont">&#xe631;</i></a>
                                </span>
                                <span className="fourthContentLiCC">
                                    {lang.fourthFoTPartCC}
                                </span>
                            </div>
                        </div>

                        <div className='fourthContentLi'>
                            <img className='fourthContentLiI' src={require('./images/lin.png')} alt=""/>
                            <div className="fourthContentLiC">
                                        <span className="fourthContentLiCH">
                                            <span className="fourthContentLiCHS">{lang.fourthSPartCT} &nbsp;&nbsp;<span
                                                className="fourthContentLiCHSL">{lang.fourthSPartCTN}</span>
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
                                    <span className="fourthContentLiCHS">{lang.fourthTPartCT} &nbsp;&nbsp;<span
                                        className="fourthContentLiCHSL">{lang.fourthTPartCTN}</span>
                                            </span>
                                            <a className="fourthContentLiCHA" href="javascript:void (0)"
                                               target="view_window"></a>
                                        </span>
                                <span className="fourthContentLiCC">
                                    {lang.fourthSTPartCC}
                                        </span>
                            </div>
                        </div>
                        <div className='logoBox'>
                            <ul className={`exchangeList ${this.state.action1 ? 'exchangeList2' : ''}`}>

                                <li>
                                    <a href="http://www.ox.ac.uk/"
                                       target="view_window">< img src={require('./images/ox.png')}/></a>
                                </li>
                                <li>
                                    <a href="https://www.imperial.ac.uk/"
                                       target="view_window">< img src={require('./images/ic.png')}/></a>
                                </li>

                                <li>
                                    <a href=" https://warwick.ac.uk/"
                                       target="view_window">< img src={require('./images/ww.png')}/></a>
                                </li>
                                <li>
                                    <a href="https://www.hku.hk/"
                                       target="view_window">< img src={require('./images/hk.png')}/></a>
                                </li>
                                <li>
                                    <a href="http://www.tsinghua.edu.cn/publish/thu2018/index.html"
                                       target="view_window">< img src={require('./images/qh.png')}/></a>
                                </li>
                                <li>
                                    <a href="http://www.zju.edu.cn/"
                                       target="view_window">< img src={require('./images/zj.png')}/></a>
                                </li>
                                <li>
                                    <a href="http://www.jpmorganchina.com.cn/country/CN/zh/jpmorgan"
                                       target="view_window">< img src={require('./images/jp.png')}/></a>
                                </li>
                                <li>
                                    <a href="http://www.morganstanley.com/"
                                       target="view_window">< img src={require('./images/ms.png')}/></a>
                                </li>
                                <li>
                                    <a href=" https://www.ml.com/"
                                       target="view_window">< img src={require('./images/ml.png')}/></a>
                                </li>
                                <li>
                                    <a href="http://www.cs.ecitic.com/newsite/"
                                       target="view_window">< img src={require('./images/zx.png')}/></a>
                                </li>
                                <li>
                                    <a href="http://www.kgi.com/kgienhtml/"
                                       target="view_window">< img src={require('./images/kgi.png')}/></a>
                                </li>
                                <li>
                                    <a href="https://thunderbird.asu.edu/"
                                       target="view_window">< img src={require('./images/tb.png')}/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <a className='fifth' name="sectionFive">
                    <div className="fifthContent">
                        <span className="fifthHeaderT">
                            {lang.fifthPartTT}{this.state.lang == 'en' ? ' ' : ''}<span>{lang.fifthPartTC}</span>
                        </span>
                        <span className="fifthHeaderC">
                            {lang.fifthPartAddress}<br/>
                            {lang.fifthPartAddressB}<span style={{color: '#5262ff'}}>info@p95g.com</span>
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
                                    <button className={`button ${this.state.color}`}
                                            onClick={() => this.submit()} disabled={!this.state.disable}>
                                        {lang[this.state.word]}
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
