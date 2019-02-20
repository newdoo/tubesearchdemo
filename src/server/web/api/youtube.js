const Youtube = require("youtube-api")
const config = require('../../../common/config')
const api = require('../../utils/youtubeAPI')

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

const handler = { SearchByChannelID }
module.exports = recv => handler[recv.type](recv.data)