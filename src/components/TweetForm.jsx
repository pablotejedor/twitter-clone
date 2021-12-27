import React, { useState } from 'react';
import { Stack, Icon, Image, Textarea, Button } from '@chakra-ui/react';
import { BsImage, BsEmojiSmile, BsCalendarCheck } from 'react-icons/bs';
import { RiFileGifLine } from 'react-icons/ri';
import { BiPoll } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
const TweetForm = ({ setTweets }) => {
  const [tweet, setTweet] = useState({
    content: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setTweets(tw => [...tw, tweet]);
    setTweet({content: ''})
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction={'row'} paddingX={2} paddingY={3}>
          <Image
            src="https://redmine.cautivatech.com/redmine/attachments/download/747/js-logo-1.png"
            borderRadius={'100%'}
            w={12}
            h={12}
          />
          <Stack width={'100%'}>
            <Textarea
              variant={'unstyled'}
              placeholder="¿Qué está pasando?"
              fontSize={20}
              onChange={e => setTweet({ ...tweet, content: e.target.value })}
              value={tweet.content}
            />

            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Stack direction={'row'} spacing={4}>
                <Icon as={BsImage} h={5} w={5} color={'primary.500'} />
                <Icon as={RiFileGifLine} h={5} w={5} color={'primary.500'} />
                <Icon as={BiPoll} h={5} w={5} color={'primary.500'} />
                <Icon as={BsEmojiSmile} h={5} w={5} color={'primary.500'} />
                <Icon as={BsCalendarCheck} h={5} w={5} color={'primary.500'} />
                <Icon as={GoLocation} h={5} w={5} color={'primary.500'} />
              </Stack>
              <Button type="submit">Twittear</Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default TweetForm;
