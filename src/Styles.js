
import styled from 'styled-components'

const Titulo = styled.h1`

text-align: center;
color: #4CAF50;
`;

const Button = styled.button`
border: transparent;
height: 35px;
width: 120px;
border-radius: 10px;
display: inline-block;
margin-left: 20px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
background-color: #4CAF50;
&:disabled {
    background: lightgray;
  }
     
`;

const Input = styled.input`
background: white;
height: 35px;
width: 450px;
border-color: #c7bdbd;
border-radius: 10px;
display: inline-block;
margin-bottom: 15px;
justify-content: center;
align-items: stretch;
font-size: 1.2rem;
position: static;
`;

const Divmae = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 950px;
background: #fff;
padding: 40px;
border: transparent;
`;

const Divdados = styled.div`
background: #dfdfdf;
height: 350px;
width: 900px;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: stretch;
font-size: 1.2rem;
position: static;
`;

const InputDivdados = styled.input`
background: white;
height: 35px;
width: 450px;
border-color: transparent;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-right: 15px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
`
const P = styled.p`
font-size: 22;
font-family: Arial, Helvetica, sans-serif;
color: gray;
margin-left: 15px;
margin-right: 15px;
`
const InputSmall = styled.input`
background: white;
height: 35px;
width: 85px;
border-color: transparent;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-right: 15px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;

`
const InputMedium = styled.input`
background: white;
height: 35px;
width: 200px;
border-color: transparent;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-right: 15px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
`

const S = 
        {   
            Titulo,
            Button,
            Input,
            Divmae,
            InputDivdados,
            Divdados,
            P,
            InputSmall,
            InputMedium
            
        };

export default S;
