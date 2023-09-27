import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './User';
import { Customer } from './Customer';
import { StatusType } from './StatusType';
import { WorkType } from './WorkType';

@Table({
  tableName: Order.ORDER_TABLE_NAME,
})
export class Order extends Model {
  public static ORDER_TABLE_NAME = 'Order' as string;
  public static ORDER_ORDERID = 'OrderID' as string;
  public static ORDER_CREATEDBY = 'CreatedBy' as string;
  public static ORDER_CUSTOMERID = 'CustomerID' as string;
  public static ORDER_STATUSTYPEID = 'StatusTypeID' as string;
  public static ORDER_WORKTYPEID = 'WorkTypeID' as string;
  public static ORDER_ORDERDATETIME = 'OrderDateTime' as string;

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: Order.ORDER_ORDERID,
  })
  OrderID!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    field: Order.ORDER_CREATEDBY,
  })
  CreatedBy!: string;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.STRING,
    field: Order.ORDER_CUSTOMERID,
  })
  CustomerID!: string;

  @ForeignKey(() => StatusType)
  @Column({
    type: DataType.STRING,
    field: Order.ORDER_STATUSTYPEID,
  })
  StatusTypeID!: string;

  @ForeignKey(() => WorkType)
  @Column({
    type: DataType.STRING,
    field: Order.ORDER_WORKTYPEID,
  })
  WorkTypeID!: string;

  @Column({
    type: DataType.DATE,
    field: Order.ORDER_ORDERDATETIME,
  })
  OrderDateTime!: Date;
}
