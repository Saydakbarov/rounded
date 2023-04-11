import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GlobalContainer } from "../GlobalContainer";

const CoursesData = [
  {
    img: "https://i.ibb.co/kX8DZW4/courses1.jpg",
    text: "Lorem impsum dolor sit amet",
    date: "20 марта",
    title:
      "Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu.",
  },
  {
    img: "https://i.ibb.co/RvYMKwF/courses2.jpg",

    text: "Lorem impsum dolor sit amet",
    date: "20 марта",
    title:
      "Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu.",
  },
  {
    img: "https://i.ibb.co/ChyDjZM/courses3.jpg",
    text: "Lorem impsum dolor sit amet",
    date: "20 марта",
    title:
      "Lorem ipsum dolor sit amet consectetur. Amet donec rutrum habitasse eu interdum dignissim arcu.",
  },
];

export default function Courses() {
  return (
    <GlobalContainer>
      <Box
        sx={{
          background: "#0E0E12",
          p: {
            xs: "40px 8px",
            sm: "40px 10px",
            md: "40px 30px",
            lg: "70px 100px",
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
          КУРСЫ
        </Typography>
        <Grid container justifyContent={"center"} gap={"15px"} mt={3}>
          {CoursesData.map((v, i) => (
            <Grid
              key={i}
              item
              lg={3.8}
              sx={{ p: 2, border: "1px solid #EE043B", borderRadius: "10px" }}
            >
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src={v.img}
                alt=""
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "50px",
                }}
              >
                <Typography variant="p" component={"p"} sx={{ color: "#fff" }}>
                  {v.text}
                </Typography>
                <Typography
                  variant="p"
                  component={"p"}
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {v.date}
                </Typography>
              </Box>
              <Typography
                variant="p"
                component={"p"}
                sx={{ color: "#fff", mt: 3 }}
              >
                {v.title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <button
            style={{
              padding: "15px 45px",
              outline: "none",
              border: "none",
              color: "white",
              background: "#F4013D",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 0px gray",
              cursor: "pointer",
              fontSize: "18px",
              fontFamily: "sans",
            }}
          >
            ВСЕ КУРСЫ
          </button>
        </Box>

        <div
          style={{
            width: "184px",
            height: "184px",
            background: "linear-gradient(180deg, #D31212 0%, #613636 100%)",
            opacity: "0.8",
            filter: "blur(100px)",
            position: "absolute",
            bottom: "0",
            left: "0",
            zIndex:"999"
          }}
        ></div>
      </Box>
    </GlobalContainer>
  );
}
