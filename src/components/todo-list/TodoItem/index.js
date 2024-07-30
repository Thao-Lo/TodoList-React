import { Checkbox, Button, Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import StyledGridBox from "../StyledGridBox";

const TodoItem = ({ id, name, isDone, createdAt, handleUpdateTodo, handleDeleteTodo }) => {
    return (
        <StyledGridBox id={id} sx={{}}>
            <Box>
                <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} onChange={() => handleUpdateTodo(id)} checked={isDone} />
            </Box>
            <Box>
                <Typography variant="div" component="">
                    {name}
                </Typography>
            </Box>
            <Box> {createdAt}</Box>
            <Box>
                <Button onClick={() => handleDeleteTodo(id)}>
                    <CloseIcon />
                </Button>
            </Box>

        </StyledGridBox>

    )
}

export default TodoItem;