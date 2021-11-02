import {Router} from 'express'
import supervisorRoutes from './userRouter'

const router =  Router()

router.use('/users', supervisorRoutes);

export default router