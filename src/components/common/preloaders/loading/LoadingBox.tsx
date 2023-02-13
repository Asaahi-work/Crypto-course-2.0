import { FC, PropsWithChildren, useState } from "react";
import './loading.scss'




const LoadingBox:FC = () => {
        return (
            <div className="middle">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
                <div className="bar bar4"></div>
                <div className="bar bar5"></div>
                <div className="bar bar6"></div>
                <div className="bar bar7"></div>
                <div className="bar bar8"></div>
            </div>
            )
}

export default LoadingBox;