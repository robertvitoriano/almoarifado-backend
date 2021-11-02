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

    this.repository = getRepository(User)

    const supervisor = await this.repository.create({
      email: 'email@teste.com',
      password: '123156',
      name: 'naaam',
      level:'supervisor'
    })

    this.repository.save(supervisor)

    res.json(supervisor);

  }

}

