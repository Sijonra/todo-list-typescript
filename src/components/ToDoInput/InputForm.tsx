import style from './InputForm.module.scss'
import React, {useRef, useState} from "react";

interface InputFormProps{
    addNewToDoItem(item: string): void
}

const InputForm: React.FC<InputFormProps> = props =>{

    let ref = useRef<HTMLInputElement>(null)
    let [inputValue, setInputValue] = useState<string>('');

    let changeInputValue = () =>{
        setInputValue(ref.current!.value)
    }

    let inputSubmit = (event: React.FormEvent) =>{
        event.preventDefault()
        props.addNewToDoItem(inputValue)
    }

    return(
        <form
            className={style.inputForm}
            onSubmit={inputSubmit}
        >
            <input
                type="text"
                className={style.input}
                value={inputValue}
                placeholder={'some words'}
                onChange={changeInputValue}
                ref={ref}
            />
            <button
                className={style.submit}
                type={"submit"}
            >
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.04948 12.5955H19.3224" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.1859 18.5955L13.1859 6.59552" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </form>
    )
}

export default InputForm;