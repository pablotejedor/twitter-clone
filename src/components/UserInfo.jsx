import React from 'react';
import { Stack, Text, Image, Icon } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
const UserInfo = () => {
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingY={'4'}
      >
        <Stack direction={'row'}>
          <Image
            src={
              'https://redmine.cautivatech.com/redmine/attachments/download/747/js-logo-1.png'
            }
            height={10}
            width={10}
            borderRadius={'50%'}
          />
          <Stack spacing={'-1'}>
            <Text fontWeight={'bold'}>PabloTejedor</Text>
            <Text fontSize={'sm'}>@PabloTejedor</Text>
          </Stack>
        </Stack>

        <Icon as={BsThreeDots}></Icon>
      </Stack>
    </>
  );
};

export default UserInfo;
