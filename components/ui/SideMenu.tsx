import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UIContext } from '@/context'

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material'

import {
  AccountCircleOutlined,
  AdminPanelSettings,
  CategoryOutlined,
  ConfirmationNumberOutlined,
  EscalatorWarningOutlined,
  FemaleOutlined,
  LoginOutlined,
  MaleOutlined,
  SearchOutlined,
  VpnKeyOutlined,
} from '@mui/icons-material'

const SideMenu = () => {

  const { isMenuOpen, toggleSideMenu } = useContext(UIContext)
  const route = useRouter()

  const [searchTerm, setSearchTerm] = useState('')

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return
    navigateTo(`/search/${searchTerm}`)
  }

  const navigateTo = (url: string) => {
    route.push(url)
    toggleSideMenu()
  }

  return (
    <Drawer
      open={isMenuOpen}
      onClose={toggleSideMenu}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>

          <ListItem>
            <Input
              autoFocus
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyUp={e => e.key === 'Enter' ? onSearchTerm() : null}
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={onSearchTerm}
                  >
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary="Mis Ordenes" />
          </ListItemButton>

          <ListItemButton
            sx={{ display: { xs: "", sm: "none" } }}
            onClick={() => navigateTo('/category/men')}
          >
            <ListItemIcon>
              <MaleOutlined />
            </ListItemIcon>
            <ListItemText primary="Hombres" />
          </ListItemButton>

          <ListItemButton
            sx={{ display: { xs: "", sm: "none" } }}
            onClick={() => navigateTo('/category/women')}
          >
            <ListItemIcon>
              <FemaleOutlined />
            </ListItemIcon>
            <ListItemText primary="Mujeres" />
          </ListItemButton>

          <ListItemButton
            sx={{ display: { xs: "", sm: "none" } }}
            onClick={() => navigateTo('/category/kid')}
          >
            <ListItemIcon>
              <EscalatorWarningOutlined />
            </ListItemIcon>
            <ListItemText primary="Niños" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <VpnKeyOutlined />
            </ListItemIcon>
            <ListItemText primary="Ingresar" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItemButton>

          {/* Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>

          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary="Productos" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ConfirmationNumberOutlined />
            </ListItemIcon>
            <ListItemText primary="Ordenes" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItemButton>

        </List>
      </Box>
    </Drawer>
  )
}

export default SideMenu
