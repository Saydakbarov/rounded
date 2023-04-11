import { Facebook, Instagram, KeyboardArrowRight, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GlobalContainer } from "../GlobalContainer";

const BoxOne = [
  { title: "About Us" },
  { title: "Graduation" },
  { title: "Scholarship" },
  { title: "Admissions" },
  { title: "International" },
  { title: "Events" },
];

const BoxTwo = [
    { title: "Language" },
    { title: "Wordpress" },
    { title: "Privacy" },
    { title: "FAQs" },
    { title: "Support" },
  ];
  

export default function Footer() {
  return (
    <GlobalContainer>
      <Box
        sx={{
          p: {
            xs: "40px 8px",
            sm: "40px 10px",
            md: "40px 30px",
            lg: "40px 150px",
          },
          zIndex: "99999",
          background: "#0E0E12",
          borderTop:"1px solid red"
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid item lg={6}>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                pb: 1,
                zIndex: "9999",
              }}
            >
              <img
                style={{ width: "70px" }}
                src="https://www.linkpicture.com/q/logo-removebg-preview-1_1.png"
                alt=""
              />
              <Typography sx={{ fontSize: "15px", color: "white" }}>
                АКАДЕМИЯ ИСКУССТВА <br />
                ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ <br /> ТИМУРА АРИПОВА
              </Typography>
            </Box>
            <Typography
              variant="p"
              component={"p"}
              sx={{ fontSize: "20px", color: "red", fontFamily: "sans", mt: 2 }}
            >
              Education
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{
                fontSize: "14px",
                color: "white",
                fontFamily: "sans",
                mt: 2,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipis <br /> cing elit.
              Amet, vestibulum euismod nullam the <br /> elementum. Urna,
              posuere nisi sit gravid.
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Box sx={{display:"flex",  gap:"30px", flexWrap:"wrap"}}>
            <Box>
            {BoxOne.map((v) => 
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center", mt:1 }}>
                  <KeyboardArrowRight sx={{ color: "red" }} />
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{ color: "#fff", fontFamily: "sans" }}
                  >
                    {v.title}
                  </Typography>
                </Box>
              )}
            </Box>

            <Box>
            {BoxTwo.map((v) => 
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center", mt:1 }}>
                  <KeyboardArrowRight sx={{ color: "red" }} />
                  <Typography
                    variant="p"
                    component={"p"}
                    sx={{ color: "#fff", fontFamily: "sans" }}
                  >
                    {v.title}
                  </Typography>
                </Box>
              )}
            </Box>
        
  
            </Box>
          </Grid>
          <Grid item lg={3} sx={{textAlign:"center"}}>
                <Typography variant="p" component={"p"} sx={{color:"gray"}}>
                Звонок по Узбекистану бесплатный
                </Typography>
                <Typography variant="p" component={"p"} sx={{color:"white", fontSize:"18px", mt:2}}>
                    +998 (99) 99-99-99
                </Typography>

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
                fontSize:"16px",
                marginTop:"20px"

              }}
            >
              Перезвоните нам
            </button>

            <Box sx={{display:"flex", gap:"10px", flexWrap:"wrap", justifyContent:"center", mt:3}}>
            <Facebook sx={{ color: "red", fontSize:"40px", background:"white", borderRadius:"6px", padding:"5px 10px" }} />
            <Twitter sx={{ color: "red", fontSize:"40px", background:"white", borderRadius:"6px", padding:"5px 10px" }} />
            <Instagram sx={{ color: "red", fontSize:"40px", background:"white", borderRadius:"6px", padding:"5px 10px" }} />
            <LinkedIn sx={{ color: "red", fontSize:"40px", background:"white", borderRadius:"6px", padding:"5px 10px" }} />
                
            </Box>
          </Grid>
        </Grid>
      </Box>
    </GlobalContainer>
  );
}
