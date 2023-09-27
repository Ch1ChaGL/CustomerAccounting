import { Model, Table, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: Customer.CUSTOMER_TABLE_NAME,
})
export class Customer extends Model {
  public static CUSTOMER_TABLE_NAME = 'Customer' as string;
  public static CUSTOMER_ID = 'CustomerID' as string;
  public static CUSTOMER_FIRSTNAME = 'FirstName' as string;
  public static CUSTOMER_LASTNAME = 'LastName' as string;
  public static CUSTOMER_EMAIL = 'Email' as string;
  public static CUSTOMER_PHOTO = 'Photo' as string;

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: Customer.CUSTOMER_ID,
  })
  CustomerID!: string;

  @Column({
    type: DataType.STRING(255),
    field: Customer.CUSTOMER_FIRSTNAME,
  })
  FirstName!: string;

  @Column({
    type: DataType.STRING(255),
    field: Customer.CUSTOMER_LASTNAME,
  })
  LastName!: string;

  @Column({
    type: DataType.STRING(255),
    field: Customer.CUSTOMER_EMAIL,
  })
  Email!: string;

  @Column({
    type: DataType.STRING(255),
    field: Customer.CUSTOMER_PHOTO,
  })
  Photo!: string;
}
