import AddInputContainer from '../AddInputContainer';
import { Box, Card, IconButton, Typography } from '@mui/material';
import TodoItem from '../TodoItem';
import { useState } from 'react';
import { getCurrentDateWithFormat } from "../utils";
import SearchContainer from '../SearchContainer';
import StyledGridBox from '../StyledGridBox';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { TaskCompleteContainer, TaskResult } from './TodoContainer.styles';
import StatusFilter from '../StatusFilter';

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const [searchValue, setSearchValue] = useState('');   
    const [currentSortDirection, setCurrentSortDirection] = useState("asc");
    const [filterStatus, setFilterStatus] = useState('show-all');

    const handleAddTodo = (taskName) => {
        const newTodos = [{
            id: Date.now(),
            name: taskName,
            isDone: false,
            createdAt: getCurrentDateWithFormat(),
        }, ...todos];
        setTodos(newTodos);
    }
    const handleUpdateTodo = (todoId) => {
        const newTodos = [...todos];
        const updatedTodo = newTodos.find(todo => todo.id === todoId);
        updatedTodo.isDone = !updatedTodo.isDone;
        newTodos.sort((a, b) => {
            return a.isDone - b.isDone;
        })
        setTodos(newTodos);    
    }
    const handleDeleteTodo = (todoId) => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);       
    }

    const handleSearch = (value) => {
        setSearchValue(value);
    }
    const handleStatusOption = (option) => {
        setFilterStatus(option);       
    }

    const handleSort = (title) => {
        let sortedTodos = [];
        if (title === 'status') {
            sortedTodos = [...todos].sort((a, b) => {
                return currentSortDirection === 'asc' ? b.isDone - a.isDone : a.isDone - b.isDone
            })
            setCurrentSortDirection(currentSortDirection === 'asc' ? 'desc' : 'asc')            
        }
        if (title === 'task-name') {
            sortedTodos = [...todos].sort((a, b) => {
                return currentSortDirection === 'asc' ? (a.name > b.name ? 1 : (a.name < b.name ? -1 : 0)) : (b.name > a.name ? 1 : (b.name < a.name ? -1 : 0))
            })
            setCurrentSortDirection(currentSortDirection === 'asc' ? 'desc' : 'asc')            
        }
    }

    return <Box sx={{

    }}>
        <Card sx={{ minWidth: 300, maxWidth: 800 }}>
            <AddInputContainer handleAddTodo={handleAddTodo} />
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <StatusFilter handleStatusOption={handleStatusOption} />
                <SearchContainer handleSearch={handleSearch} />

            </Box>
            <hr />
            <StyledGridBox>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
                    <Typography component="div">
                        Status
                    </Typography>
                    {/* onClick={handleSort('status')} => will call the function immediately, so need to use pass by reference by using arrow function*/}
                    <IconButton color="primary" aria-label="sort up" sx={{ padding: 0 }} onClick={() => handleSort('status')}>
                        {currentSortDirection === 'asc' ? <TrendingUpIcon sx={{}} /> : <TrendingDownIcon sx={{}} />}
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
                    <Typography component="div">
                        Task Name
                    </Typography>
                    <IconButton color="primary" aria-label="sort up" sx={{ padding: 0 }} onClick={() => handleSort('task-name')}>
                        {currentSortDirection === 'asc' ? <TrendingUpIcon sx={{}} /> : <TrendingDownIcon sx={{}} />}
                    </IconButton>
                </Box>
                <Box>Created At</Box>
                <Box>Delete</Box>
            </StyledGridBox>
            {todos
                .filter(item => {
                    //empty String is a part of String
                    //no search value === '' => get all
                    if(item.name.toLowerCase().includes(searchValue.toLowerCase())){
                        if(filterStatus == "show-all"){
                            return true
                        }else if(filterStatus == "done"){
                            return item.isDone
                        }else{
                            return !item.isDone
                        }
                    }              
                })
                .map(({ id, name, isDone, createdAt }) => {
                    return <TodoItem handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} id={id} name={name} isDone={isDone} createdAt={createdAt} key={`todo-item-${id}`} />
                })}
            <hr />
            <TaskCompleteContainer>
                <TaskResult>
                    Task Done: {todos.reduce((taskCount, item) => item.isDone ? taskCount + 1 : 0, 0)} /{todos.length}
                </TaskResult>
            </TaskCompleteContainer>
        </Card>
    </Box>
}

export default TodoContainer;

/**
 * !! EXERCISE:
 * 
 * TODO 1: Focus back to input when submit (keyword: useRef)
 * TODO 2: Add Sort feature to the list
 * TODO 3: Add Filter depends on status (done/undone)
 * TODO 4: Add total done task / total task (eg: 2/10)
 * 
 * 
 */