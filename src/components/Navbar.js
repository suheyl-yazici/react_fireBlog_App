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
// import { logOut } from "../helpers/firebase";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {currentUser,logOut} = useContext(AuthContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  
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
              sx={{ my: 2, display: "block" }}
              onClick={() => navigate("/")}
            >
              <img src={cwLogo} alt="cwlogo" height={40} width={50} />
            </Button>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            onClick={() => navigate("/")}
          >
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: "1.5rem",
              }}
            >
              ── SUHEYL BLOG ──
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircle
                  style={{ color: "white", height: 35, width: 35 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "40px" }}
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
              {currentUser ? (
                <div>
                  <MenuItem
                    onClick={() => {
                      navigate("/profil");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/newblog");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">New</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logOut();
                      navigate("/");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>

                  <MenuItem>
                    <Typography
                      textAlign="center"
                      onClick={() => {
                        navigate("/register");
                        setAnchorElUser(null);
                      }}
                    >
                      Register
                    </Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
