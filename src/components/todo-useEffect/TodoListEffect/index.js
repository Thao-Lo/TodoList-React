import styled from "styled-components";
import TodoContainerEffect from "../TodoContainerEffect";


const StyleCenterContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

`
function TodoListEffect() {
    return <StyleCenterContainer>
        <TodoContainerEffect/>
    </StyleCenterContainer>
}
export default TodoListEffect;