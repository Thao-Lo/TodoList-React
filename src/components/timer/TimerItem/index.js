import { Box, Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from "react";

function TimerItem({ index, id, currentTime, handleDeleteTimer }) {
    const [count, setCount] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        let interval;
        if (!pause) {
            console.log("pause: " + pause);
            interval = setInterval(() => {
                setCount(count => count + 1);
            }, 1000)

        }
        return () => {
            clearInterval(interval)
        }

    }, [pause]);

    const handlePauseTimer = () => {
        setPause(pause => !pause)

    }
    return (
        <Grid container spacing={2}>
            <Grid xs={2}>
                <Box>{index}</Box>
            </Grid>
            <Grid xs={4}>
                <Box>{currentTime}</Box>
            </Grid>
            <Grid xs={2}>
                <Box>{count}s</Box>
            </Grid>
            <Grid xs={2}>
                <Button variant="outlined" onClick={() => handlePauseTimer()}>{pause ? 'continue' : 'pause'}</Button>
            </Grid>
            <Grid xs={2}>
                <Button variant="outlined" onClick={() => handleDeleteTimer(id)}>Delete</Button>

            </Grid>
        </Grid>
    )
}

export default TimerItem;