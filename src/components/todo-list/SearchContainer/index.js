import { Box, IconButton, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const SearchContainer = ({handleSearch}) => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchValue);
      
    }
    return (
        <Box component='form' onSubmit={handleSearchSubmit}
            sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
            }}>
            <IconButton type='submit' variant="contained" aria-label="search task" color='primary' size="large" >
                <SearchIcon />
            </IconButton>
            <TextField
                id="standard-search"
                label="Search Task"
                type="search"
                variant="filled"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />


        </Box>
    )
}
export default SearchContainer;