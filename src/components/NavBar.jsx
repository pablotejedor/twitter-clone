import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaRegListAlt, FaListAlt } from 'react-icons/fa';
import { MdOutlineHome, MdHome } from 'react-icons/md';
import {
  BsHash,
  BsBell,
  BsBellFill,
  BsEnvelope,
  BsEnvelopeFill,
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsFillPersonFill,
  BsThreeDots,
} from 'react-icons/bs';
const NavBar = () => {
  const { pathname } = useLocation();
  const hoverColor = useColorModeValue('#CBD5E0', '#2D3748');
  const links = [
    {
      path: '/',
      text: 'Inicio',
      activeIcon: MdHome,
      inactiveIcon: MdOutlineHome,
    },
    {
      path: '/explore',
      text: 'Explorar',
      activeIcon: BsHash,
      inactiveIcon: BsHash,
    },
    {
      path: '/notifications',
      text: 'Notificaciones',
      activeIcon: BsBellFill,
      inactiveIcon: BsBell,
    },
    {
      path: '/messages',
      text: 'Mensajes',
      activeIcon: BsEnvelopeFill,
      inactiveIcon: BsEnvelope,
    },
    {
      path: '/bookmarks',
      text: 'Guardados',
      activeIcon: BsBookmarkFill,
      inactiveIcon: BsBookmark,
    },
    {
      path: '/lists',
      text: 'Listas',
      activeIcon: FaListAlt,
      inactiveIcon: FaRegListAlt,
    },
    {
      path: '/profile',
      text: 'Perfil',
      activeIcon: BsFillPersonFill,
      inactiveIcon: BsPerson,
    },
    {
      path: '/options',
      text: 'Más opciones',
      activeIcon: BsThreeDots,
      inactiveIcon: BsThreeDots,
    },
  ];

  return (
    <>
      {links.map(link => (
        <Link to={link.path} key={link.path}>
          <Stack
            direction="row"
            alignItems="center"
            spacing="5"
            _hover={{
              backgroundColor: hoverColor,
              borderLeftRadius: 9999,
              borderRightRadius: 9999,
              width: 'fit-content',
            }}
            // padding={3}
            paddingX={6}
            paddingY={3}
            margin={-1}
          >
            <Icon
              height={6}
              width={6}
              as={pathname === link.path ? link.activeIcon : link.inactiveIcon}
            />
            <Text
              fontWeight={pathname === link.path && 'bold'}
              fontSize="20"
              letterSpacing={'wide'}
            >
              {link.text}
            </Text>
          </Stack>
        </Link>
      ))}
    </>
  );
};

export default NavBar;
