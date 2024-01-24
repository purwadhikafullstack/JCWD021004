import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import UpdateUsername from './components/username';
import UpdateEmail from './components/email';
import UpdatePassword from './components/password';
import UploadAvatar from './components/avatar';
import Footer from '../../components/Footer/Footer';

function Profile() {
  return (
    <>
      <Box height={'120vh'}>
        <Box>
          <Navbar />
        </Box>
        <Box
          bg={'#F1F1F1'}
          height={'75vh'}
          width={'80vw'}
          margin={'auto'}
          marginTop={'25px'}
          borderRadius={'20px'}
        >
          <Flex
            className="top-container"
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Flex
              className="account-settings-left"
              flexDir={'column'}
              marginTop={'40px'}
              marginLeft={'40px'}
            >
              <Box textAlign={'left'}>
                <Text
                  fontSize={'28px'}
                  fontWeight={'bold'}
                  color={'black'}
                  marginBottom={'10px'}
                >
                  Personal details
                </Text>
                <Text fontSize={'16px'} color={'black'}>
                  Update your info and find out how it is used.
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex
            className="profile-container"
            margin={'50px 35px'}
            gap={'35px'}
            flexWrap={'wrap'}
          >
            <Box
              className="upload-photo"
              padding={'24px'}
              bg={'white'}
              borderRadius={'20px'}
            >
              <Text
                marginBottom={'45px'}
                fontSize={'24px'}
                fontWeight={'700'}
                color={'black'}
              >
                Photo Profile
              </Text>
              <Flex gap={'32px'}>
                <UploadAvatar />
              </Flex>
              <Text marginTop={'35px'} fontSize={'12px'} color={'black'}>
                *file extension only .jpg, .jpeg, .png and .gif (max 1MB)
              </Text>
            </Box>
            <Box
              className="profile-setting"
              padding={'24px'}
              bg={'white'}
              flexGrow={1}
              borderRadius={'20px'}
            >
              <Text
                marginBottom={'40px'}
                fontSize={'24px'}
                fontWeight={'700'}
                color={'black'}
              >
                Profile Settings
              </Text>
              <Flex alignItems={'center'} margin={'15px'}>
                <Flex w={'150px'} alignContent={'center'}>
                  <Text color={'black'} fontWeight={'bold'} fontSize={'16px'}>
                    Username
                  </Text>
                </Flex>
                <UpdateUsername />
              </Flex>
              <Divider />
              <Flex alignItems={'center'} margin={'15px'}>
                <Flex w={'150px'}>
                  <Text color={'black'} fontWeight={'bold'} fontSize={'16px'}>
                    Email
                  </Text>
                </Flex>
                <UpdateEmail />
              </Flex>
              <Divider />
              <Flex alignItems={'center'} margin={'15px'}>
                <Flex w={'150px'}>
                  <Text color={'black'} fontWeight={'bold'} fontSize={'16px'}>
                    Password
                  </Text>
                </Flex>
                <UpdatePassword />
              </Flex>
              <Divider />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Profile;
