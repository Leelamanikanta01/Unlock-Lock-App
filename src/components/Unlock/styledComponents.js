// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Locker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  min-height: 50vh;
`

export const Img = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`

export const Text = styled.p`
  font-size: 16px;
  color: #e2e8f0;
  margin-top: 20px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    font-size: 26px;
  }
`

export const Button = styled.button`
  background-color: #06b6d4;
  border-radius: 10px;
  border-width: 0px;
  color: #ffffff;
  width: 100px;
  height: 45px;
  margin-top: 100px;
`
