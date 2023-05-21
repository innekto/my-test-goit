import {
  AvatarWrapper,
  UserInformation,
  TweetsAndFollowersInfo,
  AvatarImg,
} from 'components/CardItem/CardItem.styled';

 export const CardItem = ({ aboutUser, isFollowing }) => {
   const { user, tweets, avatar, followers } = aboutUser;


   return (
     
     <>
       <AvatarWrapper>
         <AvatarImg src={avatar} alt={user} />
       </AvatarWrapper>
       <UserInformation>
         <TweetsAndFollowersInfo>
           {tweets} tweets
         </TweetsAndFollowersInfo>
         <TweetsAndFollowersInfo>
           {isFollowing ? followers + 1 : followers} followers
         </TweetsAndFollowersInfo>
       </UserInformation>
     </>
   );
 }


  


