import React from 'react';
import { Link } from 'react-router-dom';
import { useColorModeValue, useColorMode, Icon } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
const Logo = () => {
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue('primary.500', undefined);
  return (
    <>
      <Link to="/">
        <Icon
          color={logoColor}
          height={7}
          width={7}
          as={FaTwitter}
          onClick={toggleColorMode}
        />
      </Link>
    </>
  );
};

export default Logo;
