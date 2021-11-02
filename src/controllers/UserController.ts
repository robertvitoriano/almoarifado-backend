import { Request, Response } from 'express';
import {User} from '../entities/User';
import { getRepository, Repository} from 'typeorm'
import bcrypt from   'bcryptjs';

export default class UserController {

  constructor () {}

  private repository: Repository<User>
  
  public async getAllUsers(req: Request, res: Response) {

  }

  public  getUserById = async(req: Request, res: Response) => {}

  public  createUser = async(req: Request, res: Response) => {
    try{

      this.repository = getRepository(User)

      const{email, password, name, level} = req.body
  
      const encryptedPassword = await bcrypt.hash(String(password), 8)
  
      const user = await this.repository.create({
        email,
        password:String(encryptedPassword),
        name,
        level,
        created_at: new Date(),
      })
      this.repository.save(user)
  
      res.json(user);
      
    }catch(error){
      console.log(error);
    }
  }

}

