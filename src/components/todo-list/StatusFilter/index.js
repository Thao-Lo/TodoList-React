import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

function StatusFilter({handleStatusOption}) {

    const handleStatusFilter = (e) => {
        e.preventDefault();
        handleStatusOption(e.target.value);
        console.log(e.target.value)
    }

    return (
        <FormControl>
            <FormLabel id="status-filter">Status Filter</FormLabel>
            <RadioGroup onChange={handleStatusFilter}          
                row
                aria-labelledby="radio-button-for-status-filter"
                name="row-radio-buttons-group"
            >               
                <FormControlLabel value="show-all" control={<Radio />} label="Show All" />
                <FormControlLabel value="done" control={<Radio />} label="Done" />
                <FormControlLabel value="undone" control={<Radio />} label="Undone" />    

            </RadioGroup>
        </FormControl>
    );
}
export default StatusFilter;