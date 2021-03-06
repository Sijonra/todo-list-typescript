import React, {useState} from "react";
import style from  './ToDoList.module.scss';
import InputForm from "../ToDoInput/InputForm";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList: React.FC = () =>{

    let [toDoItems, setToDoItems] = useState([]);

    let addNewToDoItem = (item:string) =>{
        console.log(item);
    }

    return(
        <section className={style.ToDoList}>
            <h2 className={style.title}>To Do List</h2>
            <InputForm addNewToDoItem={addNewToDoItem}/>
            <div className={style.toDoItems}>
                <ToDoItem />
            </div>
        </section>
    )

}
export default ToDoList;