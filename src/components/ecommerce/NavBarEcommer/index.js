import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../../hooks/CartContext';
import * as AuthService from '../../../services/authServices'
import { USER_ACTION, useUser } from '../../../hooks/UserContext';


const pages = [{
  route: '/',
  label: 'Home Page'
},
{
  route: '/products',
  label: 'Products'
},
{
  route: '/cart',
  label: 'Cart'
}
];

const settings = [{
  page: 'Products',
  route: '/products'
},
{
  page: 'Dashboard',
  route: '/'
},
{
  page: 'Profile',
  route: '/me'
},
{
  page: 'Login',
  route: '/login'
},
{
  page: 'Logout',
  //parameter flexibility, missing: undefined, extra: ignore
  route: '/login'
}];

function NavBarEcommer() {
  const { state: cart } = useCart();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleUserMenuClick = (page, route) => {  
    if (page === 'Logout') {
      AuthService.logout();
      dispatch({ type: USER_ACTION.LOGOUT })
      navigate('/login')
      handleCloseUserMenu()
    }
    else{
      navigate(route);
      handleCloseUserMenu()
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2, display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace', fontWeight: 700,
              letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none',
            }} >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
              onClick={handleOpenNavMenu} color="inherit">

              <MenuIcon />

            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
              keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }}
              open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, }} >

              {/* responsive  display pages in hambuger dropdown*/}
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1,
              fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none',
            }}>
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-between", alignItems: "center", marginRight: '1rem' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.slice(0, pages.length - 1).map((page) => (
                <Button key={page.route} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
                  <NavLink
                    to={page.route}
                    style={({ isActive, isPending }) => {
                      return {
                        color: isActive ? "red" : "inherit",
                        textDecoration: "none"
                      };
                    }}
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}>
                    {page.label}
                  </NavLink>
                </Button>
              ))}
            </Box>

            {pages.slice(-1).map((page) => (
              <Badge badgeContent={cart && cart.length} color="primary">
                <Link to={page.route}> <ShoppingCartIcon color="action" key={page.route} /></Link>
              </Badge>))}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right', }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu} >

              {state.isAuthenticated ? settings
              .filter(({page}) => page !== 'Login') 
              .map(({ page, route }) => (
                <MenuItem key={page} onClick={() => handleUserMenuClick(page, route)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))              
              : settings.filter(({page}) => page !== 'Profile' && page !== 'Logout')
              .map(({ page, route }) => (
                <MenuItem key={page} onClick={() => handleUserMenuClick(page, route)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarEcommer;