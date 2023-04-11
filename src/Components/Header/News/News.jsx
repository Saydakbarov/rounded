import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GlobalContainer } from "../GlobalContainer";

export default function News() {
  return (
    <GlobalContainer>
      <Box
        sx={{
          background: "#0E0E12",
          p: {
            xs: "40px 8px",
            sm: "40px 10px",
            md: "40px 30px",
            lg: "70px 150px",
          },
          position: "relative",
          zIndex: "-1",
        }}
      >
          <Typography
          variant="h3"
          component={"h5"}
          sx={{ color: "white", fontFamily: "sans" }}
        >
          НОВОСТИ
        </Typography>
        <Grid container justifyContent={"center"} alignItems={"center"} gap={"70px"} mt={4}>
          <Grid item lg={5.5} sx={{ position: "relative" }}>
            <img
              style={{ width: "80%", borderRadius: "20px" }}
              src="https://i.ibb.co/k1RSFGX/news1.jpg"
              alt=""
            />
            <img
              style={{
                width: "70%",
                position: "absolute",
                right: "0%",
                bottom: "-25%",
                borderRadius: "20px",
              }}
              src="https://i.ibb.co/gtR2bWC/news2.jpg"
              alt=""
            />
          </Grid>
          <Grid item lg={5.5} sx={{mt:{xs:7, sm:6}}}>
            <Typography variant="p" component={"p"} sx={{color:"#fff", fontFamily:"sans", fontSize:"20px", letterSpacing:"2px"}}>
              Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
              pellentesque volutpat et vitae. Consequat felis ut in pellentesque
              feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
              lobortis dolor volutpat enim. Tempor interdum aliquet at lorem
              nisi. Amet nec vel donec aliquet rhoncus faucibus. Bibendum
              dictumst ullamcorper nulla.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </GlobalContainer>
  );
}
