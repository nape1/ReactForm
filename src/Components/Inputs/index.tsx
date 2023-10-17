import { useState } from "react"
import styles from "./input.module.css"
import { InputConfig } from "../../Utils/InputConfigs"
import React from "react"

type props = {
  value: string
  label: string
  changeHandler: (e: EventTarget & HTMLInputElement) => void
}

function Input({ label, value, changeHandler }: props) {
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState(false)
  const [inputValue, setInputValue] = useState(value ?? '')

  const isEmptyValue =  !inputValue.length
  const item = InputConfig[label]

  const blurHandler = () => {
    setTouched(true)
    if(isEmptyValue){
      setError(true)
    }
    // console.log({touched, error}, `blur triggered in ${item.label}`);
  }
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    changeHandler(e.target)
  }
  // console.log(item.label, 'onchange');
  

  return (
    <div className={styles.inputWrapper}>
      <label>{item.label}</label>
      <input
        type={item.type}
        onChange={onChangeHandler}
        onBlur={blurHandler}
        className={styles.input}
      />
      {touched && error && <div className={styles.error}>Error</div>}
    </div>
  )
}

export default React.memo(Input)
