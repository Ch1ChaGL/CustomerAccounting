import { Model, Table, Column, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: StatusType.STATUSTYPE_TABLE_NAME,
})
export class StatusType extends Model {
  public static STATUSTYPE_TABLE_NAME = 'StatusType' as string;
  public static STATUSTYPE_ID = 'StatusTypeID' as string;
  public static STATUSTYPE_NAME = 'Name' as string;
  public static STATUSTYPE_DESCRIPTION = 'Description' as string;

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: StatusType.STATUSTYPE_ID,
  })
  StatusTypeID!: string;

  @Column({
    type: DataType.STRING(255),
    field: StatusType.STATUSTYPE_NAME,
  })
  Name!: string;

  @Column({
    type: DataType.STRING(255),
    field: StatusType.STATUSTYPE_DESCRIPTION,
  })
  Description!: string;
}
