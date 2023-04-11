import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GlobalContainer } from "../GlobalContainer";
import "./Mentors.scss";

const MentorsData = [
  {
    img: "https://i.ibb.co/GvqsQj4/mentors1.jpg",
    name: "Алина",
  },
  {
    img: "https://i.ibb.co/0mFLKvt/mentors2.jpg",
    name: "Мадина",
  },
  {
    img: "https://i.ibb.co/MhNSN2K/mentors3.jpg",
    name: "Арина",
  },
  {
    img: "https://i.ibb.co/6RxYCMh/mentors4.jpg",
    name: "Андрей",
  },
];

const Result = [
    {
        num:"60 000",
        text:"Lorem ipsum dolor sit amet"
    },
    {
        num:"150+",
        text:"Lorem ipsum dolor sit amet"
    },
    {
        num:"183 000",
        text:"Lorem ipsum dolor sit amet"
    }
  
]

export default function Mentors() {
  return (
    <GlobalContainer>
      <Box
        sx={{
          background: "#0E0E12",
          p: {
            xs: "40px 8px",
            sm: "40px 10px",
            md: "40px 30px",
            lg: "60px 150px",
          },
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          component={"h5"}
          sx={{ color: "white", fontFamily: "sans" }}
        >
          НАСТАВНИКИ
        </Typography>
        <Grid
          container
          justifyContent={"center"}
          sx={{  gap: "25px", zIndex:"9999"}}
        >
          {MentorsData.map((v, i) => (
            <Grid
              key={i}
              item
              lg={2.8}
              sx={{ borderRadius: "10px", mt: 10, position: "relative", }}
              className="block"
            >
              <img
                style={{
                  width: "100%",
                  height: "90%",
                  objectFit: "cover",
                  zIndex: "-9",
                  borderRadius: "10px",
                }}
                src={v.img}
                alt=""
              />
              <Typography
                variant="p"
                component={"p"}
                sx={{
                  position: "absolute",
                  bottom: "15%",
                  ml: 11,
                  fontSize: "30px",
                }}
              >
                {v.name}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "70px", mt:8, flexWrap:"wrap" }}>
        {
            Result.map((v,i) => 
            <Box key={i} sx={{textAlign:"center", fontFamily:"sans"}}>
            <Typography
              variant="p"
              component={"p"}
              sx={{ color: "#F4013D", fontSize: "60px" }}
            >
              {v.num}
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{ color: "#fff", fontSize: "18px" }}
            >
              {v.text}
            </Typography>
          </Box>
            )
        }
         
    
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
            right: "0",
            zIndex:"999"
          }}
        ></div>
      </Box>
    </GlobalContainer>
  );
}
