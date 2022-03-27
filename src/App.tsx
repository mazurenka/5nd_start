import React, {useState} from 'react';

import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import {UnRating} from "./Components/Rating/UncontrolledRating/UnRating";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [swichOn, setSwichOn] = useState<boolean>(false)
    return (
        <div className={'App'}>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <UnRating/>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange = {() => {setAccordionCollapsed(!accordionCollapsed)} }
            />

            <OnOff  on={swichOn} onChange={setSwichOn}/>

            <UncontrolledOnOff onChange={setSwichOn}/> {swichOn.toString()}

        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App