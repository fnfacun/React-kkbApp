import React from "react";
import BScroll from 'better-scroll';
import "../css/index.css";

function Tab(props) {
    let { data, render } = props;
    return (
        <div className="banner">
            <div className="banner_img">
                <ul className="banner_list clearfix">
                {
                    data.map((item,index)=><li key={index}>{render(item)}</li>)
                }
                </ul>
            </div>
            <ul className="banner_nav">
                {
                    data.map((item,index)=><li key={index}></li>)
                }
            </ul>
        </div>
    )
};

export default Tab;