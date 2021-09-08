import React, { useState } from "react";
import style from "./tabs.module.css";
import View from "./View";


const Tabs = () => {

    const [menu, setMenu] = useState("");

    const changeMenu = (el) => {
        el.preventDefault();
        console.log(el.target.value)
        setMenu(`Este es el menu ${el.target.value}`);
    }

    return <>
        <div className={style.tabs}>
            <button onClick={changeMenu} value={'1'}>Tab 1</button>
            <button onClick={changeMenu} value={'2'}>Tab 2</button>
            <button onClick={changeMenu} value={'3'}>Tab 3</button>
        </div>
        <View menu={menu}></View>
    </>
}

export default Tabs;