import React, {ChangeEvent} from "react";
import {Checkbox} from "@mui/material";

type PropsType = {
    isDone: boolean
    callBack: (isDone: boolean) => void
}

export const CheckBox = (props: PropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked)
    }

    return (
        <Checkbox size="small"
                  onChange={onChangeHandler}
                  checked={props.isDone}
                  color={'warning'}/>
    );
}