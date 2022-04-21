import * as React from "react";
import Menu from "@mui/material/Menu";
import {
  Button,
  Tooltip,
  Typography,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  MenuItem,
  Container,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";



const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }}
          >
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Logo1
            </Button>
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div>çizgi</div>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              -- SüheyL Blok--
            </Button>
            <div>çizgi</div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                size="large"
              >
                <AccountCircle style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
