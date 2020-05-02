'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Server is running' }
})

Route.get('/user', 'PersonController.index');
Route.get('/user/:id', 'PersonController.show');
Route.post('/user', 'PersonController.insert')
Route.put('/user/:id', 'PersonController.store')
