import { Request, Response } from 'express';
import {User} from '../entities/User';
import { getRepository, Repository} from 'typeorm'
import bcrypt from   'bcryptjs';
import jwt from 'jsonwebtoken';

export default class UserController {

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
      console.error(error);
    }
  }

  public  login = async(req: Request, res: Response) => {
    try{
      this.repository = getRepository(User)

      const{email, password} = req.body

      const user = await this.repository.findOne({
        where: {
          email
        }
      })

      const isPasswordCorrect = bcrypt.compare(password, String(user.password))
      if(isPasswordCorrect){
 
        const {name, level, email} = user

        const token = jwt.sign({name, level, email}, process.env.JWT_SECRET)

        res.json({
          name,
          level,
          email,
          token
        })
      }else{
        res.json({
          message: 'Senha incorreta'
        })
      }

    }catch(error){
      console.error(error);
    }

  }

}

