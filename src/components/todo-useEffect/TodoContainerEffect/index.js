import { Box, Button, Card, CircularProgress, IconButton, Typography } from '@mui/material';
import TodoItemEffect from '../TodoItemEffect';
import { useEffect, useState } from 'react';
import SearchContainer from '../../todo-list/SearchContainer';
import StyledGridBox from '../../todo-list/StyledGridBox';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { TaskCompleteContainer, TaskResult } from './TodoContainerEffect.styles';
import StatusFilter from '../../todo-list/StatusFilter';

const TodoContainerEffect = () => {
    const [todos, setTodos] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [currentSortDirection, setCurrentSortDirection] = useState("asc");
    const [filterStatus, setFilterStatus] = useState('show-all');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    // const [fetchAgain, setFetchAgain] = useState(false);

    const fetchTodos = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/todos?limit=5`);
            const data = await res.json();
            setTodos(data);
        } catch (e) {
            setError(e.message)
        }
    }

    useEffect(() => {
        if (isLoading) {
            fetchTodos();
        }
        // fetch(`https://dummyjson.com/todos?limit=5`)
        //     .then(response => {
        //         console.log("Response Object:", response);
        //         console.log("Status Code:", response.status);
        //         console.log("Status Text:", response.statusText);
        //         console.log("Response OK?:", response.ok);
        //         console.log("Response Headers:", response.headers);

        //         return response.json()
        //     })
        //     .then(data => {
        //         setTodos(data.todos);
        //         setIsLoading(false);
        //         console.log("data:", data.todos);
        //         console.log("todos", todos);
        //         console.log("isLoading: " + isLoading);
        //     })

    }, [isLoading])

  
    const handleUpdateTodo = (todoId) => {
        const newTodos = [...todos];
        const updatedTodo = newTodos.find(todo => todo.id === todoId);
        updatedTodo.completed = !updatedTodo.completed;
        newTodos.sort((a, b) => {
            return a.completed - b.completed;
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
                return currentSortDirection === 'asc' ? b.completed - a.completed : a.completed - b.completed
            })
            setCurrentSortDirection(currentSortDirection === 'asc' ? 'desc' : 'asc')
            setTodos(sortedTodos);
        }
        if (title === 'task-name') {
            sortedTodos = [...todos].sort((a, b) => {
                return currentSortDirection === 'asc' ? (a.todo > b.todo ? 1 : (a.todo < b.todo ? -1 : 0)) : (b.todo > a.todo ? 1 : (b.todo < a.todo ? -1 : 0))
            })
            setCurrentSortDirection(currentSortDirection === 'asc' ? 'desc' : 'asc')
            setTodos(sortedTodos);
        }
    }

    let todoList = todos
        .filter(item => {
            //empty String is a part of String
            //no search value === '' => get all
            if (item.todo.toLowerCase().includes(searchValue.toLowerCase())) {
                if (filterStatus === "show-all") {
                    return true
                } else if (filterStatus === "done") {
                    return item.completed
                } else {
                    return !item.completed
                }
            }
            return false
        })
        .map(({ id, todo, completed }) => {
            return <TodoItemEffect
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
                id={id}
                todo={todo}
                completed={completed}
                key={`todo-item-${id}`} />
        })

    let taskDoneCount = todos.reduce((taskCount, item) => item.completed ? taskCount + 1 : taskCount, 0);
    if (error) {
        return <h3>{error}</h3>
    }
    return <Box sx={{}}>
        <Card sx={{ minWidth: 500, maxWidth: 900 }}>
            <Box sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>To Do List</Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <SearchContainer handleSearch={handleSearch} />
                <StatusFilter handleStatusOption={handleStatusOption} />
                <Button variant="contained" onClick={() => setIsLoading(false)}>Refresh</Button>
            </Box>


            <hr />
            <StyledGridBox>
                <Box>Id</Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
                    <Typography component="div">
                        Task Name
                    </Typography>
                    <IconButton color="primary" aria-label="sort up" sx={{ padding: 0 }} onClick={() => handleSort('task-name')}>
                        {currentSortDirection === 'asc' ? <TrendingUpIcon sx={{}} /> : <TrendingDownIcon sx={{}} />}
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
                    <Typography component="div">
                        Status
                    </Typography>
                    {/* onClick={handleSort('status')} => will call the function immediately, so need to use pass by reference by using arrow function*/}
                    <IconButton color="primary" aria-label="sort up" sx={{ padding: 0 }} onClick={() => handleSort('status')}>
                        {currentSortDirection === 'asc' ? <TrendingUpIcon sx={{}} /> : <TrendingDownIcon sx={{}} />}
                    </IconButton>
                </Box>
                <Box>Delete</Box>
            </StyledGridBox>
            {isLoading ? <CircularProgress /> : todoList}
            <hr />
            <TaskCompleteContainer>
                <TaskResult>
                    Task Done: {taskDoneCount} /{todos.length}
                </TaskResult>
            </TaskCompleteContainer>
        </Card>
    </Box>
}

export default TodoContainerEffect;

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