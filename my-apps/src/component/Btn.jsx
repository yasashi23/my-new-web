import styled from 'styled-components';

function Btn(props) {
    return(
    <Button>
        {props.n}
    </Button>        
    )
}


const Button = styled.button`
    cursor: pointer;
    width: 110px;
    height: 42px;
    border: 2px solid #489CC2;
    border-radius: 4px;
    color: #489CC2;
    background-color: transparent;
`
export default Btn