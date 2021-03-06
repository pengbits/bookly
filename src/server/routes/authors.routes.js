import { Router } from 'express'
import controller from '../controllers/authors.controller'

export default () => {
  const api = Router();
  
  api.get('/'   ,     controller.list)
  api.get('/search',  controller.search)
  api.get('/:id',     controller.get)
  api.put('/:id',     controller.update)
  api.post('/'  ,     controller.create)
  api.delete('/:id',  controller.remove)
  api.get('/:id/vendor', controller.getFromVendor)
  
  return api
}