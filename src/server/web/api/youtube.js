const db = require('../../mongoDB/schema')
const Youtube = require("youtube-api")
const config = require('../../../common/config')
const api = require('../../utils/youtubeAPI')
const opn = require("opn")

const login = async(msg) => {
  console.log('login');
  console.log(msg.user);

  if(await db.accountSchema.findOne({uid: msg.user.user.uid}) !== null) {
    // Account 인스턴스를 업데이트 합니다.
    await db.accountSchema.update({uid:msg.user.user.uid}, {user:msg.user});
  } else {
    // Account 인스턴스를 생성합니다.
    const account = new db.accountSchema({
      uid: msg.user.user.uid, 
      user: msg.user
    });
    await account.save(); // 데이터베이스에 등록합니다.
    const udemy = new db.udemySchema({
      uid: msg.user.user.uid,
      project: [],
    });
    await udemy.save(); // 데이터베이스에 등록합니다.
  }

  return {result: 'ok'}; 
}

// 내가 구독한 채널 리스트 반환
const subscribersByChannel = async(msg) => {
  console.log('subscribersByChannel : ' + msg.uid);

  const account = await db.accountSchema.findOne({uid: msg.uid});
  console.log(account.user.credential.accessToken);

  const oauth = Youtube.authenticate({
    type: "oauth",
    token: account.user.credential.accessToken
  });

  console.log('a');

  //oauth.setCredentials(account.user.credential.idToken);

  //console.log('b');
  try {
    const response = await api.SubscriptionsList({
      auth: oauth,
      part: 'id,snippet,contentDetails',
      mine: true,
    });
    console.log(response);
  } catch(e) {
    console.log(e);
  }
  
  console.log('c');

  return {result: 'ok'}; 
}

// 나를 구독한 채널 리스트 반환
const subscribersMyChannel = async(msg) => {



  return {result: 'ok'}; 
}

const SearchByChannelID = async(msg) => { 

  console.log('SearchByChannelID : ' + msg.id);

  const oauth = Youtube.authenticate({
    type: "key"
  , key: config.youtubeAPIKey
  });

  const response = await api.ChannelsList({
    auth: oauth,
    part: 'id,snippet,brandingSettings,contentDetails,invideoPromotion,statistics,topicDetails',
    id: msg.id
  });

  console.log(response);

  const channels = response.items;

  // const service = Youtube.google.youtube('v3');
  // const {error, response} = await service.channels.list({
  //   auth: oauth,
  //   part: 'snippet,contentDetails,statistics',
  //   id: msg.id
  // });
  // console.log(error);
  // console.log(response);

  // const service = Youtube.google.youtube('v3');
  // const data = await service.channels.list({
  //   auth: oauth,
  //   part: 'snippet,contentDetails,statistics',
  //   id: msg.id
  // }, function(err, response) {
  //   console.log(response);

  //   if (err) {
  //     console.log('The API returned an error: ' + err);
  //     return;
  //   }
  //   var channels = response.items;
  //   if (channels.length == 0) {
  //     console.log('No channel found.');
  //   } else {
  //     console.log('This channel\'s ID is %s. Its title is \'%s\', and ' +
  //                 'it has %s views.',
  //                 channels[0].id,
  //                 channels[0].snippet.title,
  //                 channels[0].statistics.viewCount);
  //     return channels[0];
  //   }
  // });

  console.log('aaa');

  return {result: 'ok', channel: channels[0]};
}

const SubscribersOn = async(msg) => {

  console.log('SubscribersOn : ' + msg.id);

  const oauth = Youtube.authenticate({
    type: "oauth",
    client_id: config.youtubeClientID,
    client_secret: config.youtubeClientSecert,
    redirect_url: config.youtubeRedirectUrl,
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/youtube"],
    response_type: "code"
  });

  opn(oauth.generateAuthUrl({
    access_type: "offline", 
    scope: ["https://www.googleapis.com/auth/youtube"]
  }));

  // const response = await api.SubscriptionsInsert({
  //   auth: oauth,
  //   part: 'snippet,contentDetails',
  //   snippet: {
  //     resourceId: {
  //       kind: "youtube#channel",
  //       channelId: msg.id
  //     }
  //   }
  // });

  // console.log(response);

  return {result: 'ok'};
}

const handler = { login, subscribersByChannel, subscribersMyChannel, SearchByChannelID, SubscribersOn }
module.exports = recv => handler[recv.type](recv.data)