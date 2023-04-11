import {
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { GlobalContainer } from "../GlobalContainer";
import DrawerComp from "./Drawer";
import "./Header.scss";

export default function Header() {
  // Pages
  const PAGES = ["О НАС", "КУРСЫ", "НОВОСТИ", "НАСТАВНИКИ ✨"];
  //  Tabs Value Code
  const [value, setValue] = useState();

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <GlobalContainer>
      <Box sx={{ position: "relative", background: "#0E0E12", width:"100%", height:{xs:"700px", md:"800px"} }}>
        <Box
          sx={{
            p: {
              xs: "40px 8px",
              sm: "40px 10px",
              md: "40px 30px",
              lg: "40px 100px",
            },
            zIndex: "99999",
          }}
        >
          <Toolbar
            sx={{
              borderBottom: "1px solid white",
              padding: "0px !important",
              zIndex: "999",
            }}
          >
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
                style={{ width: "40px" }}
                src="https://www.linkpicture.com/q/logo-removebg-preview-1_1.png"
                alt=""
              />
              <Typography sx={{ fontSize: "8px", color: "white" }}>
                АКАДЕМИЯ ИСКУССТВА <br />
                ПУБЛИЧНЫХ ВЫСТУПЛЕНИЙ <br /> ТИМУРА АРИПОВА
              </Typography>
            </Box>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ ml: 5, zIndex: "9999" }}
                  textColor="light"
                  value={value}
                  indicatorColor="secondary"
                  onChange={(e, value) => setValue(value)}
                >
                  {PAGES.map((page, i) => (
                    <Tab
                      key={i}
                      sx={{ padding: "0px", m: 0, color: "white", ml: 6 }}
                      label={page}
                    />
                  ))}
                </Tabs>

                <Box sx={{ marginLeft: "80px", display: "flex", gap: "5px" }}>
                  <img
                    style={{ borderRadius: "50%", width: "20px" }}
                    src="https://www.linkpicture.com/q/lan_1.jpg"
                    alt=""
                  />
                  <select
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      outline: "none",
                    }}
                  >
                    <option style={{ color: "black" }}>Ru</option>
                    <option style={{ color: "black" }}>En</option>
                  </select>
                </Box>
                <Typography
                  sx={{ ml: "auto", color: "white", fontSize: "15px" }}
                  variant="p"
                  component={"p"}
                >
                  КОНТАКТЫ
                </Typography>
              </>
            )}
          </Toolbar>
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            zIndex: "99",
            textAlign: "center",
            mt: 10,
          }}
        >
          <Typography
            sx={{ fontSize: "50px", color: "white", fontFamily: "sans" }}
            variant="p"
            component={"p"}
          >
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography
            variant="p"
            component={"p"}
            sx={{ color: "white", fontSize: "22px", fontFamily: "sans" }}
          >
            Lorem ipsum dolor sit amet consectetur. Tincidunt aliquet dictum{" "}
            <br />
            sodales bibendum etiam viverra mollis amet. Urna sed molestie <br />
            auctor nisi.
          </Typography>
          <Box sx={{mt:3}}>
            <button
              style={{
                padding: "15px 35px",
                outline: "none",
                border: "none",
                color: "white",
                background:"#F4013D",
                borderRadius: "10px",
                boxShadow:"0px 0px 10px 0px gray",
                cursor:"pointer"
              }}
            >
              Lorem ipsum dolor
            </button>
            <button style={{
                padding: "15px 35px",
                outline: "none",
                border: "none",
                color: "white",
                background:"none",
                borderRadius: "10px",
                cursor:"pointer",
                border:"1px solid #F4013D",
                marginLeft:"10px"
              }}>Lorem ipsum dolor</button>
          </Box>
        </Box>

        <Grid
          container
          sx={{
            position: "absolute",
            top: "0%",
            alignItems: "center",
            zIndex: "9 !important",
            gap: "30px",
            
          }}
        >
          <Grid item lg={6.3} sm={12} md={12} xs={12}  >
            <img
              style={{ width: "100%" , height:"700px", objectFit:"cover"}}
              src="https://www.linkpicture.com/q/img1_29.jpg"
              alt=""
            />
          </Grid>
          <Grid
            item
            lg={5}
            sx={{
              pt: 15,
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
              textAlign: "center",
              
            }}
          >
            <img
              style={{ width: "60%", height: "500px", borderRadius: "50%" }}
              src="https://www.linkpicture.com/q/img2_7.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </GlobalContainer>
  );
}
