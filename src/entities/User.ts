import {v4 as uuidV4} from 'uuid'
import {CreateDateColumn, Entity, PrimaryColumn, Column, Unique} from  "typeorm"

@Entity("users")
class User {

  @PrimaryColumn()
  id?:String

  @Column()
  name:String

  @Column()
  @Unique(["email"])
  email:String

  @Column()
  password:String

  @Column()
  level:String

  @CreateDateColumn()
  created_at:Date
  
  constructor () {
    if (!this.id){
      this.id = uuidV4()
    }

  }
}
export { User }