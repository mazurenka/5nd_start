import React, {useState} from 'react';
import {UnRating, RatingValueType} from "./UnRating";
import { action } from "@storybook/addon-actions";


export default {
    title: 'UnRating',
    component: UnRating
}

const callback = action('rating changed inside component')

export const EmptyRating = () => <UnRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnRating defaultValue={5} onChange={callback}/>

