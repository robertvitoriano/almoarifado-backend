import { Request, Response } from 'express';
import {User} from '../entities/User';
import { getRepository, Repository} from 'typeorm'

export default class SupervisorController {

  constructor () {}

  private repository: Repository<User>
  
  public async getAllSupervisors(req: Request, res: Response) {

  }

  public  getSupervisorById = async(req: Request, res: Response) => {}

  public  createSupervisor = async(req: Request, res: Response) => {
    console.log('heeeeeerreee')

    this.repository = getRepository(User)


    const supervisors = await this.repository.create({
      email: 'email@teste.com',
      password: '123156',
      name: 'naaam',
      level:'supervisor'
    })
    res.json(supervisors);

  }

}

