import React from 'react'
import {error} from "next/dist/build/output/log";

export class Template extends React.Component {
    render() {
        throw error("The render method is used to render the Template's form. Please implement a form!")
    }
}

export default Template