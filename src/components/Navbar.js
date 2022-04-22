import * as React from "react";
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
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import cwLogo from "../assets/cw.jpeg";


const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }}
          >
            <Button
              sx={{ my: 2, display: "block" }}
              onClick={() => navigate("/")}
            >
              <img src={cwLogo} alt="cwlogo" height={25} width={30}/>
            </Button>
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "center", alignItems: "center" }}
            onClick={() => navigate("/")}
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
                <AccountCircle style={{ color: "white", height:45,width:45}} />
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
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
