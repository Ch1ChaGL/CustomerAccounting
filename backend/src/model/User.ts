import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: User.USER_TABLE_NAME,
})
export class User extends Model {
  public static USER_TABLE_NAME = 'User' as string;
  public static USER_ID = 'UserID' as string;
  public static USER_FIRSTNAME = 'FirstName' as string;
  public static USER_LASTNAME = 'LastName' as string;
  public static USER_EMAIL = 'Email' as string;
  public static USER_PASSWORD = 'Password' as string;

  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: User.USER_ID,
  })
  UserID!: string;

  @Column({
    type: DataType.STRING(255),
    field: User.USER_FIRSTNAME,
  })
  FirstName!: string;

  @Column({
    type: DataType.STRING(255),
    field: User.USER_LASTNAME,
  })
  LastName!: string;

  @Column({
    type: DataType.STRING(255),
    field: User.USER_EMAIL,
  })
  Email!: string;

  @Column({
    type: DataType.STRING(255),
    field: User.USER_PASSWORD,
  })
  Password!: string;
}
