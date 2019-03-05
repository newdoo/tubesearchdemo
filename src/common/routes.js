const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')

.add('udemy_creator','/udemycreator','index')
.add('udemy_creator_project','/udemycreator/:id','index')