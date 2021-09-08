import React, { useState } from "react";
import style from "./view.module.css";

const View = (props) => {

    const { menu } = props;

    return <>
        <div className={style.view}>
            <h1>{menu}</h1>
        </div>
    </>
}

export default View;