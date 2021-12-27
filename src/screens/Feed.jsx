import React, { useState, useEffect } from 'react';
import { Stack, Text, Icon, Divider } from '@chakra-ui/react';
import { BsStars } from 'react-icons/bs';
import TweetForm from '../components/TweetForm';
import Tweet from '../components/Tweet';
const Feed = () => {
  const [tweets, setTweets] = useState([{ content: 'Hello there!' }]);
  return (
    <>
      <Stack direction={'row'} spacing={0}>
        <Stack spacing={0} width={'100%'}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            padding={'2'}
          >
            <Text fontSize={'20'} fontWeight={750} letterSpacing={'wide'}>
              Inicio
            </Text>
            <Icon as={BsStars} width={5} height={5} />
          </Stack>
          <TweetForm setTweets={setTweets} />
          <Divider />

          {tweets.map(tw => (
            <Tweet content={tw.content} key={Math.random() * 100} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Feed;
