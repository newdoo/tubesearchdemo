const Youtube = require("youtube-api")
const service = Youtube.google.youtube('v3');

const ChannelsList = params => new Promise((resolve) => service.channels.list(params, (error, response) => error === null ? resolve(response):resolve(error)))

module.exports = { ChannelsList }