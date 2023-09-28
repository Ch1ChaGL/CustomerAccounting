import {
  Model,
  Table,
  Column,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: WorkType.WORKTYPE_TABLE_NAME,
})
export class WorkType extends Model {
  public static WORKTYPE_TABLE_NAME = 'WorkType' as string;
  public static WORKTYPE_ID = 'WorkTypeID' as string;
  public static WORKTYPE_NAME = 'Name' as string;
  public static WORKTYPE_DESCRIPTION = 'Description' as string;
  public static WORKTYPE_PRICE = 'Price' as string;
  public static WORKTYPE_STATEDCOMPLEATIONTIME =
    'StatedСompletionTime' as string;

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    field: WorkType.WORKTYPE_ID,
  })
  WorkTypeID!: string;

  @Column({
    type: DataType.STRING(255),
    field: WorkType.WORKTYPE_NAME,
  })
  Name!: string;

  @Column({
    type: DataType.STRING(255),
    field: WorkType.WORKTYPE_DESCRIPTION,
  })
  Description!: string;

  @Column({
    type: DataType.INTEGER,
    field: WorkType.WORKTYPE_PRICE,
  })
  Price!: number;

  @Column({
    type: DataType.INTEGER,
    field: WorkType.WORKTYPE_STATEDCOMPLEATIONTIME,
  })
  StatedСompletionTime!: number;
}
