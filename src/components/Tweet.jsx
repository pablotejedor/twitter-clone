import React from 'react';
import { Stack, Image, Text, Icon, Divider } from '@chakra-ui/react';
import { BsThreeDots, BsHeart } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const Tweet = ({ content }) => {
  return (
    <>
      <Stack direction={'row'} paddingX={2} paddingY={3}>
        <Image
          src="https://redmine.cautivatech.com/redmine/attachments/download/747/js-logo-1.png"
          borderRadius={'100%'}
          w={12}
          h={12}
        />

        <Stack width={'100%'}>
          <Stack
            direction={'row'}
            spacing={1}
            align={'center'}
            justifyContent={'space-between'}
          >
            <Stack
              direction={'row'}
              width={'100%'}
              align={'center'}
              spacing={'1'}
            >
              <Text fontWeight={'bold'}>PabloTejedor</Text>
              <Icon as={GoVerified} color="primary.500" />
              <Text fontSize={'sm'}>@PabloTejedor</Text>
            </Stack>
            <Icon as={BsThreeDots} />
          </Stack>
          <Text>{content}</Text>

          <Stack direction={'row'} justifyContent={'space-between'} p={4}>
            <Icon w={4} h={4} as={FaRegComment} />
            <Icon w={4} h={4} as={FaRetweet} />
            <Icon w={4} h={4} as={BsHeart} />
            <Icon w={4} h={4} as={FiShare} />
          </Stack>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};

export default Tweet;
