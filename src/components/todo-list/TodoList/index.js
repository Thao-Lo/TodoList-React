import styled from "styled-components";
import TodoContainer from "../TodoContainer";


const StyleCenterContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

`
function TodoList() {
    return <StyleCenterContainer>
        <TodoContainer />
    </StyleCenterContainer>
}
export default TodoList;