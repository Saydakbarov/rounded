import { Biotech, Book, Group, School } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GlobalContainer } from "../GlobalContainer";

const AboutData = [
  {
    icon: <Biotech sx={{ fontSize: "70px", color: "#ffff", mt: 5 }} />,
    text: `Lorem ipsum dolor sit amet`,
  },
  {
    icon: <Group sx={{ fontSize: "70px", color: "#ffff", mt: 5 }} />,
    text: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <Book sx={{ fontSize: "70px", color: "#ffff", mt: 5 }} />,
    text: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <School sx={{ fontSize: "70px", color: "#ffff", mt: 5 }} />,
    text: "Lorem ipsum dolor sit amet",
  },
];

export default function About() {
  return (
    <GlobalContainer>
      <Box
        sx={{
          background: "#0E0E12",
          p: {
            xs: "40px 8px",
            sm: "40px 10px",
            md: "40px 30px",
            lg: "40px 100px",
          },
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "space-between",
            },
          }}
          alignItems={"center"}
        >
          <Grid
            item
            lg={5.5}
            sx={{ color: "white" }}
            order={{ xs: 2, sm: 2, md: 2, lg: 1 }}
          >
            <Typography
              variant="p"
              component={"p"}
              sx={{ fontSize: "50px", fontFamily: "sans" }}
            >
              О НАС
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{ fontSize: "25px", fontFamily: "sans" }}
            >
              Lorem ipsum dolor sit amet consectetur. Urna <br /> semper urna
              viverra pellentesque volutpat et vitae. <br /> Consequat felis ut
              in pellentesque feugiat <br /> malesuada varius. Aliquam egestas
              orci dui est eu. <br /> Commodo lobortis dolor volutpat enim.
              Tempor <br /> interdum aliquet at lorem nisi. Amet nec vel donec{" "}
              <br /> aliquet rhoncus faucibus. Bibendum dictumst <br />{" "}
              ullamcorper nulla.
            </Typography>
          </Grid>
          <Grid item lg={5} order={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
            <img
              style={{ width: "100%", height: "90%" }}
              src="https://www.linkpicture.com/q/aboutMe-removebg-preview.png"
              alt=""
            />
            <Typography
              variant="p"
              component={"p"}
              sx={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "70px",
                textShadow: "-1px 2px 5px #EE053C",
                textAlign: "right",
                mt: 2,
              }}
            >
              О НАС
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            justifyContent: "center",
            background:
              "linear-gradient(145.17deg, rgba(196, 51, 51, 0.0864) 18.76%, rgba(255, 255, 255, 0.0576) 77.74%)",
            borderRadius: "20px",
            gap:"45px",
            padding:"40px 0px",
            mt:12
          }}
        >
          {AboutData.map((v, i) => (
            <Grid item lg={2}  sx={{textAlign:"center"}}>
              <Box
                sx={{
                  borderRadius: "50%",
                   width:{sm:"80%",md:"80%",lg:"90%"},
                    height:"90%",
                  background:
                    "linear-gradient(180deg, #F3023E 0%, #F0073E 50%, #A10C2E 100%)",
                  textAlign: "center",
                  fontSize: "70px",
                }}
              >
                {v.icon}
              </Box>
              <Typography
                variant="p"
                component={"p"}
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  mt: 2,
                }}
              >
                {v.text}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            width: "184px",
            height: "184px",
            background: "linear-gradient(180deg, #D31212 0%, #613636 100%)",
            opacity: "0.8",
            filter: "blur(100px)",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        ></div>

<div
          style={{
            width: "184px",
            height: "184px",
            background: "linear-gradient(180deg, #D31212 0%, #613636 100%)",
            opacity: "0.8",
            filter: "blur(100px)",
            position: "absolute",
            bottom: "-40px",
            right: "0",
            zIndex:"3"
          }}
        ></div>
      </Box>
    </GlobalContainer>
  );
}
