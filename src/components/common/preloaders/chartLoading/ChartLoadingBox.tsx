import {FC} from 'react'
import './chart.module.scss';

const ChartLoadingBox:FC = () => {
    return (
        <center>
            <div className="chart-container">
                <div className="loading-chart">
                    <div className="bar-xl bar1"></div>
                    <div className="bar-xl bar2"></div>
                    <div className="bar-xl bar3"></div>
                    <div className="bar-xl bar4"></div>
                    <div className="bar-xl bar5"></div>
                    <div className="bar-xl bar6"></div>
                    <div className="bar-xl bar7"></div>
                    <div className="bar-xl bar8"></div>
                </div>
            </div>
        </center>
    )
}

export default ChartLoadingBox