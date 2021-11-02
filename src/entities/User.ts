import {v4 as uuidV4} from 'uuid'
import {CreateDateColumn, Entity, PrimaryColumn, Column} from  "typeorm"

@Entity("users")
class User {

  @PrimaryColumn()
  id?:String

  @Column()
  name:String

  @Column()
  email:String

  @Column()
  password:String

  @CreateDateColumn()
  created_at:Date
  
  constructor () {
    if (!this.id){
      this.id = uuidV4()
    }

  }
}
export { User }