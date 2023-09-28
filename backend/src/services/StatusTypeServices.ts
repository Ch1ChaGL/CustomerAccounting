import { StatusType } from '../model/StatusType';

interface IStatusTypeServices {
  create(statusType: StatusType): Promise<void>;
  update(statusType: StatusType): Promise<void>;
  delete(statusTypeId: string): Promise<void>;
  getById(statusTypeId: string): Promise<StatusType | null>;
  getAll(): Promise<StatusType[] | null>;
}

class StatusTypeServices implements IStatusTypeServices {
  async create(statusType: StatusType): Promise<void> {
    try {
      await StatusType.create({ ...statusType });
    } catch (error) {
      throw new Error('Failed to create statusType');
    }
  }
  async update(statusType: StatusType): Promise<void> {
    const StatusTypeID = statusType.StatusTypeID;
    await StatusType.update({ ...statusType }, { where: { StatusTypeID } });
  }
  async delete(statusTypeId: string): Promise<void> {
    await StatusType.destroy({ where: { StatusTypeID: statusTypeId } });
  }
  async getById(statusTypeId: string): Promise<StatusType | null> {
    const statusType = await StatusType.findByPk(statusTypeId);
    return statusType;
  }
  async getAll(): Promise<StatusType[] | null> {
    const statusTypes = await StatusType.findAll();
    return statusTypes;
  }
}

export default new StatusTypeServices();
