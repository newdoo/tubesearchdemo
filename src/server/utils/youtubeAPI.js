const Youtube = require("youtube-api")
const service = Youtube.google.youtube('v3');

const ChannelsList = params => new Promise((resolve) => service.channels.list(params, (error, response) => error === null ? resolve(response):resolve(error)))
const SubscriptionsList = params => new Promise((resolve) => service.subscriptions.list(params, (error, response) => error === null ? resolve(response):resolve(error)))
const SubscriptionsInsert = params => new Promise((resolve) => service.subscriptions.insert(params, (error, response) => error === null ? resolve(response):resolve(error)))

const VideoList = params => new Promise((resolve) => service.videos.list(params, (error, response) => error === null ? resolve(response):resolve(error)))

module.exports = { ChannelsList, SubscriptionsInsert, SubscriptionsList, VideoList }