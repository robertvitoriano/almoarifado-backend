import {Router} from 'express'
import UserController from '../controllers/UserController'

const userController = new UserController()

const router =  Router()

router.post('/', userController.createUser);
router.post('/login', userController.login);


export default router