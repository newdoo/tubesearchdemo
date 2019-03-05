const db = require('../../mongoDB/schema')

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

const handler = { createProject }
module.exports = recv => handler[recv.type](recv.data)