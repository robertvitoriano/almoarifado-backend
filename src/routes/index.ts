import {Router} from 'express'
import supervisorRoutes from './userRouter'

const router =  Router()

router.use('/supervisors', supervisorRoutes);

export default router