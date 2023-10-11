import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
const drawerWidth = 180;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: "105vw" }}>
      <Divider />
      <List>
        <Box display={"grid"} mt={5} gap={4}>
          <a href="#political" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: 16,
                ml: 2,
              }}
            >
              Political Campaigns
            </Button>
          </a>

          <a href="#retail" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: 16,
                ml: 2,
              }}
            >
              Retail Businesses
            </Button>
          </a>

          <a href="#features" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: 16,
                ml: 2,
              }}
            >
              Features
            </Button>
          </a>

          <a href="#contact" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: 16,
                ml: 2,
              }}
            >
              Contact
            </Button>
          </a>
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#004c3d",
        width: "100vw",
      }}
    >
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <a href="#political" style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
            >
              Political Campaigns
            </Button>
          </a>

          <a href="#retail" style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
            >
              Retail Businesses
            </Button>
          </a>

          <a href="#features" style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
            >
              Features
            </Button>
          </a>

          <a href="#contact" style={{ textDecoration: "none" }}>
            <Button
              sx={{ color: "#fff", textTransform: "none", fontSize: 16, ml: 4 }}
            >
              Contact
            </Button>
          </a>
        </Box>
      </Toolbar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
