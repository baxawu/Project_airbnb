import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Popover } from "@mui/material";
import { useState } from "react";
import  style from './modalcomp.module.scss'

export default function ModalComponent({children,songuoi}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    
<div className={style.wrapperModal}>
<Button aria-describedby={id} variant="contained" onClick={handleClick}>
  {songuoi}Khách
</Button>
<Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
 {children}
</Popover>
</div>
  );
}
