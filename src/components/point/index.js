import React, {Component} from 'react'
import style from './index.css'


class Point extends Component {
    render() {
        return (
            <div className='allWrap'>
                    <a className='point1' href={'/#sectionTwo'}>
                    <div className='itemWrap'>

                        <div className="flexWrap">
                            <div className="imgWrap"><img src={require('./point.png')}/></div>
                            <div className="pWrap"><p className={`p ${this.props.language == 'en' ?'p1':'p2'}`}>{this.props.lang.firstTitleL}{this.props.language=='en'?' ':''}{this.props.lang.firstSTitleR}</p></div>
                            <div className="pLast">{this.props.lang.firstSP}</div>
                        </div>
                    </div>
                    </a>

                    <a className='point2' href={'/#sectionThree'}>
                        <div className='itemWrap '>

                            <div className="flexWrap">
                                <div className="imgWrap"><img src={require('./point.png')}/></div>
                                <div className="pWrap"><p className={`p ${this.props.language == 'en' ?'p1':'p2'}`}>{this.props.lang.thirdPartTL}{this.props.language=='en'?' ':''}{this.props.lang.thirdPartTR}</p></div>
                                <div className="pLast">{this.props.lang.thirdPartTP}</div>
                            </div>
                        </div>
                    </a>
                    <a className='point3' href={'/#sectionFive'}>
                        <div className='itemWrap '>

                            <div className="flexWrap">
                                <div className="imgWrap"><img src={require('./point.png')}/></div>
                                <div className="pWrap"><p className={`p ${this.props.language == 'en' ?'p1':'p2'}`}>{this.props.lang.fifthPartTT}{this.props.language=='en'?' ':''}{this.props.lang.fifthPartTC}</p></div>
                                <div className="pLast">{this.props.lang.fifthPartTP}</div>
                            </div>
                        </div>
                    </a>
                </div>


        )
    }
}

export default Point