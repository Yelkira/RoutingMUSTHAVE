import React from 'react';
import {PagesType} from "../data/dataState";
type PropsType = {
    pages: PagesType
}
const Content = (props:PropsType) => {
    return (
        <div>
            <h3>{props.pages.heading}</h3>
            <div>{props.pages.about}</div>
        </div>
    );
};

export default Content;