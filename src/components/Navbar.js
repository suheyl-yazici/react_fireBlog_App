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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();


  const currentUser = true ;

  return (
    <AppBar position="static">
      <Container maxWidth="xxl">
          <Toolbar style={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "flex" } }}
            >
              <Button
                sx={{ my: 2, display: "block"}}
                onClick={() => navigate("/")}
              >
                <img src={cwLogo} alt="cwlogo" height={50} width={60}/>
              </Button>
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex",justifyContent: "center", alignItems: "center" } }}
              onClick={() => navigate("/")}
            >
              <Button sx={{ my: 2, color: "white", display: "block" ,fontSize:"1.5rem"}}>
              ── SUHEYL BLOG ──
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <AccountCircle style={{ color: "white", height:40,width:40}} />
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
                {currentUser ? (<>
                  <MenuItem onClick={() => {navigate("/login");setAnchorElUser(null)}}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                
                <MenuItem>
                  <Typography
                    textAlign="center"
                    onClick={() => {navigate("/register");setAnchorElUser(null)}}
                  >
                    Register
                  </Typography>
                </MenuItem>
                </>) : ("merhaba")}
              </Menu>
            </Box>
          </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
