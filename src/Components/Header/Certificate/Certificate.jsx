import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GlobalContainer } from "../GlobalContainer";
import "./Certificate.scss";

const CertificateData = [
  {
    img: "https://i.ibb.co/xFmYFSv/certificate1.jpg",
  },
  {
    img: "https://i.ibb.co/wLm9gJJ/certificate2.jpg",
  },
  {
    img: "https://i.ibb.co/GvqsQj4/mentors1.jpg",
  },
];

export default function Certificate() {
  return (
    <GlobalContainer>
      <Box
        sx={{
          background: "#0E0E12",
          p: {
            xs: "40px 8px",
            sm: "40px 10px",
            md: "40px 30px",
            lg: "90px 150px",
          },
          position: "relative",
        }}
        className="contain"
      >
        <Typography
          variant="h3"
          component={"h5"}
          sx={{ color: "white", fontFamily: "sans" }}
        >
          СЕРТИФИКАТЫ
        </Typography>
        <Grid container justifyContent={"center"} gap={"30px"} mt={12}>
          {CertificateData.map((v, i) => (
            <Grid item lg={3.7} className="certificate">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={v.img}
                alt=""
              />
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h3"
          component={"h5"}
          sx={{ color: "white", fontFamily: "sans", mt:10 }}
        >
          ОСТАВЬТЕ ЗАЯВКУ
        </Typography>

        <Grid container justifyContent={"center"} alignItems={"center"} gap={4} mt={7}>
          <Grid item lg={2.7} md={2.7} sm={8} xs={10} sx={{ textAlign: "center" }}>
            <input
              type="tel"
              style={{
                width: "100%",
                border: "2px solid rgba(255, 255, 255, 0.29)",
                borderRadius: "20px",
                height: "40px",
                background:"#202020",
                color:"#fff",
                padding:"25px 20px",
                

              }}
              placeholder="Ваше имя:"
            />
          </Grid>
          <Grid item lg={2.7} md={2.7} sm={8} xs={10} sx={{ textAlign: "center" }}>
            <input
              type="number"
              style={{
                width: "100%",
                border: "2px solid rgba(255, 255, 255, 0.29)",
                borderRadius: "20px",
                height: "40px",
                background:"#202020",
                color:"#fff",
                padding:"25px 20px",
              }}
              placeholder="+998 - - -  - - -"
            />
          </Grid>

          <Grid item lg={2.7} md={2.7} sm={8} xs={10} sx={{ textAlign: "center" }}>
            <input
              type="tel"
              style={{
                width:"100%",
                border: "2px solid rgba(255, 255, 255, 0.29)",
                borderRadius: "20px",
                height: "40px",
                background:"#202020",
                color:"#fff",
                padding:"25px 20px",
                

              }}
              placeholder="Email:"
            />
          </Grid>

          <Grid item lg={2.7} md={2.7} sm={8} xs={10} >
          <button
              style={{
                padding: "15px 35px",
                outline: "none",
                border: "none",
                color: "white",
                background:"#F4013D",
                borderRadius: "10px",
                boxShadow:"0px 0px 10px 0px gray",
                cursor:"pointer",
                width:"100%",
                fontSize:"18px"

              }}
            >
              Оставить заявку
            </button>
          </Grid>

          
        </Grid>

        <div
          style={{
            width: "184px",
            height: "184px",
            background: "linear-gradient(180deg, #D31212 0%, #613636 100%)",
            opacity: "0.8",
            filter: "blur(100px)",
            position: "absolute",
            bottom: "10%",
            left: "0",
            zIndex:"999"
          }}
        ></div>
      </Box>
    </GlobalContainer>
  );
}
