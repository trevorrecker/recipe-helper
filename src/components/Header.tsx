"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Close, Menu as MenuIcon, MoreVert } from "@mui/icons-material";
import Link from "next/link";
import Logo from "./Logo";
import ThemeModeToggle from "./ThemeModeToggle";

interface MenuItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMoreAnchorEl, setDesktopMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems: MenuItem[] = [
    { label: "About", href: "/about" }
    // Add more menu items as needed
  ];

  const moreMenuItems: MenuItem[] = [
    { label: "Log In", href: "/login" }
    // Add more items for logged-in state when implemented
  ];

  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleDesktopMoreOpen = (event: React.MouseEvent<HTMLElement>) =>
    setDesktopMoreAnchorEl(event.currentTarget);
  const handleDesktopMoreClose = () => setDesktopMoreAnchorEl(null);

  const renderMenuItems = (items: MenuItem[], onClick?: () => void) =>
    items.map((item) => (
      <Button
        key={item.label}
        color="inherit"
        component={Link}
        href={item.href}
        onClick={onClick}
        sx={{ mx: 1 }}
      >
        {item.label}
      </Button>
    ));

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      PaperProps={{
        sx: { width: "100%", backgroundColor: theme.palette.background.default }
      }}
    >
      <Box sx={{ p: 2, height: "100%" }}>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close menu"
          onClick={handleMobileMenuToggle}
          sx={{ mb: 2 }}
        >
          <Close />
        </IconButton>
        <List>
          {[...menuItems, ...moreMenuItems].map((item) => (
            <ListItem
              key={item.label}
              onClick={handleMobileMenuToggle}
              component={Link}
              href={item.href}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem>
            <ThemeModeToggle />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  const renderDesktopMenu = () => (
    <>
      {renderMenuItems(menuItems)}
      <IconButton
        edge="end"
        color="inherit"
        aria-label="more menu"
        onClick={handleDesktopMoreOpen}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={desktopMoreAnchorEl}
        open={Boolean(desktopMoreAnchorEl)}
        onClose={handleDesktopMoreClose}
      >
        {moreMenuItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleDesktopMoreClose}
            component={Link}
            href={item.href}
          >
            {item.label}
          </MenuItem>
        ))}
        <MenuItem>
          <ThemeModeToggle />
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Button
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              "--color-primary": "var(--rh-palette-primary-contrastText)",
              "--color-accent": "transparent",
              "&:hover": {
                "--color-accent": "var(--rh-palette-primary-contrastText)"
              }
            }}
          >
            <Logo />
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            renderDesktopMenu()
          )}
        </Toolbar>
      </Container>
      {renderMobileMenu()}
    </AppBar>
  );
};

export default Header;
