import React from "react";
import style from './ToDoItem.module.scss'

const ToDoItem: React.FC = () =>{
    return(
        <div className={style.toDoItem}>
            <input type="checkbox" className={style.checkBox}/>
            <p className={style.text}>123</p>
        </div>
    )
}

export default ToDoItem;