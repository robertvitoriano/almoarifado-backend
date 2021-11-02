import {Router} from 'express'
import supervisorRoutes from './supervisorRoutes'

const router =  Router()

router.use('/supervisors', supervisorRoutes);

export default router