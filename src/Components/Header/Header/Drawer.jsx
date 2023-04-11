import { Language, Menu, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function DrawerComp() {
  // Pages
  const PAGES = ["О НАС", "КУРСЫ", "НОВОСТИ", "НАСТАВНИКИ ✨"];
  //   Open Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
    <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
        <List sx={{ width: "240px", p: 2}}>
        <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                pb: 1,
                zIndex: "9999",
                pb:5
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
          {PAGES.map((page, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(false)} >
              <ListItemIcon>
                <ListItemText sx={{color:"#ffff !important"}}  key={i}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
         
        </List>

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
      </Drawer>
      
    <Box sx={{ marginLeft: "auto" }}>
      
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Menu />
      </IconButton>


    </Box>
    </React.Fragment>
  );
}
