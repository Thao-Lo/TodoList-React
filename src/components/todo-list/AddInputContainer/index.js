import { TextField, Button, Box } from "@mui/material"
import { useRef, useState } from "react"



const AddInputContainer = ({ handleAddTodo }) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!inputValue) {
            setError('Add new task!');
            return;
        }
        handleAddTodo(inputValue);
        setInputValue('');       
    }
    const focusInput = () => {
        inputRef.current.focus();
    }

    return (<Box
        sx={{
            p: '1rem',
            display: 'flex',
            gap: '10px'
        }} component='form' onSubmit={handleSubmit}>
        <Box>
            <TextField id="outlined-basic"
                variant="outlined" value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
                sx={{ width: '600px' }}
                error={!!error}
                helperText={error}
                label={error ? '' : "What do you need to do today"}
                inputRef={inputRef}
            />
        </Box>
        <Box sx={{ pt: '0.5rem' }}>
            <Button type='submit' onClick={focusInput} variant="contained" sx={{ width: '100px' }}>Add</Button>
        </Box>
    </Box>
    )
}
export default AddInputContainer;

//Calling Functions Passed as Props: In the child component, the handleAddTodo function is called within the handleSubmit function.
//This triggers the parent's handleAddTodo function, updating the todos state in the parent component.

//State Management: The parent component manages the main state (todos),
//while the child component manages its own state (inputValue) for the text input field.