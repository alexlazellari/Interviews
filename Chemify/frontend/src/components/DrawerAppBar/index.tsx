import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  AppBar,
  IconButton,
  Drawer,
  Toolbar,
  AppBarProps,
} from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const StyledLogo = styled(Link)`
  margin-right: 2rem;
  display: none;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  font-size: 1.125rem;
  text-decoration: none;
  @media (min-width: 600px) {
    display: flex;
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem 0.875rem;
  &:hover {
    color: rgba(0, 0, 0, 0.87);
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const StyledAppBar = muiStyled(AppBar)<AppBarProps>(({ theme }) => ({
  "&.MuiAppBar-root": {
    boxShadow: theme.shadows[0],
    backdropFilter: "saturate(200%) blur(1.875rem)",
    backgroundColor: "transparent",
    color: "rgb(52, 71, 103)",
  },
}));

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          p: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: "1.125rem",
        }}
      >
        ✨Chemify
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <StyledScrollLink to={item}>{item}</StyledScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <StyledAppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <StyledLogo to="/">✨Chemify</StyledLogo>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <StyledScrollLink
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item}
              </StyledScrollLink>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}
