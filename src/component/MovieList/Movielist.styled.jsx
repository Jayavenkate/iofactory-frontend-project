
import { Card, styled } from "@mui/material"

export const DivContainer = styled("div")({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '80px auto',
    padding: '20px',
    gap: '20px',
    justifyContent: "space-evenly"
})

export const CardContainer = styled(Card)({
    width: "230px", height: "430px"
})

export const DivWrapper = styled('div')({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding:"20px"
})

export const HElement = styled("h3")({
    textAlign: "center", color: "red"
})