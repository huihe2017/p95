import React, {Component} from 'react'
import style from './index.css'


class Point extends Component {
    render() {
        return (
            <div>

                <div class='allWrap'>
                    <a href={'/#sectionTwo'}>
                    <div class='itemWrap point1'>

                        <div class="flexWrap">
                            <div class="imgWrap"><img src={require('./point.png')}/></div>
                            <div class="pWrap"><p class="p">Asset Management</p></div>
                            <div class="pLast">Specializing in Digital Assets Management</div>
                        </div>
                    </div>
                    </a>
                    <a href={'/#sectionTwo'}>
                        <div class='itemWrap point2'>

                            <div class="flexWrap">
                                <div class="imgWrap"><img src={require('./point.png')}/></div>
                                <div class="pWrap"><p class="p">Market Making</p></div>
                                <div class="pLast">Best Service Provider in Marketing Making</div>
                            </div>
                        </div>
                    </a>
                    <a href={'/#sectionTwo'}>
                        <div class='itemWrap point3'>

                            <div class="flexWrap">
                                <div class="imgWrap"><img src={require('./point.png')}/></div>
                                <div class="pWrap"><p class="p">Contact Us</p></div>
                                <div class="pLast">Partnership and Careers</div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        )
    }
}

export default Point