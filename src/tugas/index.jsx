import React from "react";
import ClassComponent from "./javascript/classcomponent";
import FunctionalComponent from "./javascript/functionalcomponent";

export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent tools = "ReactJS" />
                <FunctionalComponent />
            </div>
        )
    }
}