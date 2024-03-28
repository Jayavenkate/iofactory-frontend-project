import { Button, Card, styled } from "@mui/material";

export const LoginContainer = styled("div")({
     textAlign: "center"
})
export const HElement = styled("h1")({
    color: "red"
})
export const DivContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
})
export const PlayButton = styled(Button)({
    background: "#616161", color: "#ffff"
})
export const TrailerButton = styled(Button)({
    background: "#ff3d00", color: "#ffff"
})

export const CardDiv = styled(Card)({
    width: "450px",
    margin: "20px auto",
    background: "#424242",
    color: "#ffff",
    textAlign: "justify",
    padding: "20px",
})

export const BackButton = styled(Button)({
    margin: "30px"
})