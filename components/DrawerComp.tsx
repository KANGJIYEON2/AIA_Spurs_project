import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={true} onClose={() => setOpen(false)}></Drawer>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
