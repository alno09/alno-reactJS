import React from "react";
// import BeritaComponent from "./lifecycle";
import NewsComponent from "./lifecycle/indax";
// import ClassComponent from "./javascript/classcomponent";
// import FunctionalComponent from "./javascript/functionalcomponent";
// import Bootstrap from "./bootstrap";
// import FormElement from "./formVal";
// import Validation from "./formVal/validation";

export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <NewsComponent />
            </div>
        )
    }
}