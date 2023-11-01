import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import style1 from "./modalcompo.module.scss";
import { useContext, useState } from "react";
import { Context } from "../FormSoNguoi/FormSoNguoi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  p: 4,
};

export default function ModalComponent({children}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userCount = useContext(Context);
  return (
    <div className={style1.wrapperModal}>
      <Button className={style1.jss1} onClick={handleOpen}>{userCount}Khach </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
