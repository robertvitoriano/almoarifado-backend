import { Request, Response } from 'express';
import {User} from '../entities/User';
import { getRepository, Repository} from 'typeorm'
import bcrypt from   'bcryptjs';

export default class SupervisorController {

  constructor () {}

  private repository: Repository<User>
  
  public async getAllSupervisors(req: Request, res: Response) {

  }

  public  getSupervisorById = async(req: Request, res: Response) => {}

  public  createSupervisor = async(req: Request, res: Response) => {
    try{

      this.repository = getRepository(User)

      const{email, password, name, level} = req.body
  
      const encryptedPassword = await bcrypt.hash(String(password), 8)
  
      const supervisor = await this.repository.create({
        email,
        password:String(encryptedPassword),
        name,
        level:'supervisor'
      })
  
      this.repository.save(supervisor)
  
      res.json(supervisor);
      
    }catch(error){
      console.log(error);
    }
  }

}

