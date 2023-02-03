import React from 'react';
import {PagesType} from "../../data/dataState";
import {useParams} from "react-router-dom";
import Content from "../Content";

type PropsType = {
    pages: Array<PagesType>
}

const Page = (props: PropsType) => {
    const params = useParams()
    return (
        <div>
            <Content pages={props.pages[Number(params.id)]}/>
        </div>
    );
};

export default Page;