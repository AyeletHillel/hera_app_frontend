import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from '@mui/material';
import { mobile } from '../responsive'



const Container = styled.div`
    height: 60px;
    background-color: white;
    color: black;
    margin-bottom: 20px;
    ${mobile({ height: "50px" })}`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center`

const Center = styled.div`
  flex: 1;
  text-align: center;`
  
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}`

const Language  = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`
const Input = styled.input`
 border: none;
 ${mobile({ width: "50px" })}
 `

 const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
 `

 const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Anchor = styled.a`
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input/>
            <Search style={{ color: "gray", fontSize: 16 }}/>
            </SearchContainer>
          </Left>
          <Center><Logo>Hera.</Logo></Center>
          <Right>          
          <Anchor href="/register" ><MenuItem>REGISTER</MenuItem></Anchor>       
          <Anchor href="/login" ><MenuItem>LOGIN</MenuItem></Anchor>  
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Right>
        </Wrapper>
    </Container>
    
  )
}

export default Navbar
