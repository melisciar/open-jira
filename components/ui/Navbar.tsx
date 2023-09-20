import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
          <Typography variant="h6">OpenJira</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
