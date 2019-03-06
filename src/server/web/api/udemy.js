const db = require('../../mongoDB/schema')
const Youtube = require("youtube-api")
const config = require('../../../common/config')
const api = require('../../utils/youtubeAPI')

const createProject = async(msg) => {
  console.log('createProject');
  console.log(msg.uid);
  console.log(msg.title);
  console.log(msg.desc);
  console.log(msg.price);
  console.log(msg.open);

  const theme = await db.udemySchema.findOne({uid: msg.uid});

  if(theme === null) return {result: 'no'};

  const project = {
    title: msg.title,
    desc: msg.desc,
    price: msg.price,
    open: msg.open
  };

  await db.udemySchema.findOneAndUpdate({uid: msg.uid}, {$push: {project: project}}, {new: true});

  return {result: 'ok'}; 
}

const updateProject = async(msg) => {
  console.log('updateProject');
  console.log(msg.uid);
  console.log(msg.id);
  console.log(msg.title);
  console.log(msg.desc);
  console.log(msg.price);
  console.log(msg.open);

  const theme = await db.udemySchema.findOne({uid: msg.uid});

  if(theme === null) return {result: 'no'};

  await db.udemySchema.findOneAndUpdate({uid: msg.uid, "project._id": msg.id}, {
    $set: {
      "project.$.title": msg.title,
      "project.$.desc": msg.desc,
      "project.$.price": msg.price,
      "project.$.open": msg.open,
      "project.$.updateDate": new Date(),
    }
  });

  console.log('aaa');

  return {result: 'ok'}; 
}

const projectList = async(msg) => {
  console.log('projectList');
  console.log(msg.uid);

  const theme = await db.udemySchema.findOne({uid: msg.uid});

  if(theme === null) return {result: 'no'};

  return {result: 'ok', project: theme.project}; 
}

const videoVerify = async(msg) => {
  console.log('videoVerify');
  console.log(msg.uid);
  console.log(msg.videoID);

  // TODO : 유튜브 인증
  const account = await db.accountSchema.findOne({uid: msg.uid});
  console.log(account.user.credential.accessToken);

  const oauth = Youtube.authenticate({
    type: "oauth",
    token: account.user.credential.accessToken
  });

  console.log(oauth);

  try {
    const response = await api.VideoList({
      auth: oauth,
      part: 'id, snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, topicDetails',
      id: msg.videoID,
    });
    console.log(response);
  } catch(e) {
    console.log(e);
  }
  
  console.log('c');

  return {result: 'ok'};
}

const handler = { createProject, updateProject, projectList, videoVerify }
module.exports = recv => handler[recv.type](recv.data)