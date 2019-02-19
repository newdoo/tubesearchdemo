const Youtube = require("youtube-api")

const SearchByChannelID = async(msg) => { 

  console.log('SearchByChannelID : ' + msg.id);

  const oauth = Youtube.authenticate({
    type: "key"
  , key: "AIzaSyD9L2HR1-5jd-g317cskOmjVItWykPI4yM"
  });

  const service = Youtube.google.youtube('v3');
  service.channels.list({
    auth: oauth,
    part: 'snippet,contentDetails,statistics',
    id: msg.id
  }, function(err, response) {
    console.log(response);

    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var channels = response.items;
    if (channels.length == 0) {
      console.log('No channel found.');
    } else {
      console.log('This channel\'s ID is %s. Its title is \'%s\', and ' +
                  'it has %s views.',
                  channels[0].id,
                  channels[0].snippet.title,
                  channels[0].statistics.viewCount);
    }
  });

  console.log('aaaa');

  return {result: 'ok'};
}

const handler = { SearchByChannelID }
module.exports = recv => handler[recv.type](recv.data)