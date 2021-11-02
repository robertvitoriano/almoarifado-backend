import {Router} from 'express'
import SupervisorController from '../controllers/SupervisorController'


const supervisorController = new SupervisorController()

const router =  Router()

router.post('/', supervisorController.createSupervisor);

export default router