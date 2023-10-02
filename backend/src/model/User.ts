import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

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

  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: User.USER_ID,
    autoIncrement: true,
  })
  UserID!: number;

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
