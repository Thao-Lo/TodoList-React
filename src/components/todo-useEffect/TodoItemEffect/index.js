import { Checkbox, Button, Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import StyledGridBox from "../../todo-list/StyledGridBox";

const TodoItemEffect = ({ id, todo, completed, handleUpdateTodo, handleDeleteTodo }) => {
    return (
        <StyledGridBox id={id} sx={{}}>
             <Box> {id}</Box>           
            <Box>
                <Typography variant="div" component="">
                    {todo}
                </Typography>
            </Box>
            <Box>
                <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} onChange={() => handleUpdateTodo(id)} checked={completed} />
            </Box>
            <Box>
                <Button onClick={() => handleDeleteTodo(id)}>
                    <CloseIcon />
                </Button>
            </Box>

        </StyledGridBox>

    )
}

export default TodoItemEffect;