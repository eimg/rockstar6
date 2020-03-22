import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const NewItem = ({ add }) => {
    let input = React.createRef();

    return (
        <div style={{padding: 15}}>
            <FormControl fullWidth>
                <Input
                    placeholder="New Task"
                    inputRef={input}
                    endAdornment={
                        <InputAdornment position="end" >
                            <IconButton edge="end" onClick={() => {
                                add(input.current.value);
                                input.current.value = "";
                                input.current.focus();
                            }}>
                                <AddCircleIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    )
}

export default NewItem;
