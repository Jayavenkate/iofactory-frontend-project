import { Card, styled } from "@mui/material"

export const SignUpContainer = styled("div")({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap-reverse'
})

export const CardContainer = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '350px',
  height: '450px',
  padding: '20px',
  margin: '30px auto',
})