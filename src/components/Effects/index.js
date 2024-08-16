import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

function Effects(){
    const [timer, setTimer] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        <Box>{timer}</Box>
    },[])
 
    useEffect(() => {
        <Box>{setTimer(
            
        )}</Box>
    },[])

    return <Box>
        <Button>Add Timer</Button>
        <Box>{timer}</Box>
    </Box>

}

export default Effects;