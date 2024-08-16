import { Box, Button, Grid } from "@mui/material";
import styled from "styled-components";
import { StyleTimerContainer, Body } from "./TimerContainer.styles";
import TimerItem from "../TimerItem";
import { useEffect, useState } from "react";

function TimerContainer() {
    const [timers, setTimers] = useState([]);


    const getCurrentTime = () => {
        let hour = new Date().getHours();
        let mins = new Date().getMinutes();
        let second = new Date().getSeconds();
        return `${hour}h : ${mins}m : ${second}s`;
    }
    const handleAddTimer = () => {
        const newTimer = {
            id: Date.now(),
            currentTime: getCurrentTime(),
           
        }
        setTimers([...timers, newTimer]);
    }
    const handleDeleteTimer = (timerId) => {
        const newTimers = timers.filter(({ id }) => id != timerId)
        setTimers(newTimers);
    }
    return (
        <Body>
            <StyleTimerContainer>
                <Box>Zavis's Timer App</Box>
                <Box mb={2}>
                    <Button variant="outlined" onClick={handleAddTimer}>Add new Timer</Button>
                </Box>
                {timers.map(({id, currentTime }, index) => {
                    return <TimerItem index={index + 1} id={id} currentTime={currentTime} key={id} handleDeleteTimer={handleDeleteTimer} />
                })}
            </StyleTimerContainer>
        </Body>

    )
}

export default TimerContainer;