import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton } from "@mui/material";
import { getMainWhatsAppLink } from "./utils";

export interface IWhatsAppFloatingButtonProps {}

export const WhatsAppFloatingButton = () => {
  const whatsappLink = getMainWhatsAppLink();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        borderRadius: 100,
        backgroundColor: "#0CC144",
        color: "white",
        zIndex: 999,
        boxShadow: 5,
      }}
      component="a"
      href={whatsappLink}
      target="_blank"
    >
      <IconButton
        sx={{
          height: 60,
          width: 60,
          fontSize: 40,
        }}
        color="inherit"
        name="botão whatsapp"
        aria-label="botão whatsapp"
      >
        <WhatsAppIcon
          fontSize="inherit"
          sx={{ transform: "translate(1px, -1px)" }}
        />
      </IconButton>
    </Box>
  );
};
