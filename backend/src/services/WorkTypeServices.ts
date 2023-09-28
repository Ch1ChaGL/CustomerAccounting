import { WorkType } from './../model/WorkType';

interface IWorkTypeServices {
  create(statusType: WorkType): Promise<void>;
  update(statusType: WorkType): Promise<void>;
  delete(statusTypeId: string): Promise<void>;
  getById(statusTypeId: string): Promise<WorkType | null>;
  getAll(): Promise<WorkType[] | null>;
}

class WorkTypeServices implements IWorkTypeServices {
  async create(workType: WorkType): Promise<void> {
    try {
      await WorkType.create({ ...workType });
    } catch (error) {
      throw new Error('Failed to create workType');
    }
  }
  async update(workType: WorkType): Promise<void> {
    const WorkTypeID = workType.WorkTypeID;
    await WorkType.update({ ...workType }, { where: { WorkTypeID } });
  }
  async delete(workTypeId: string): Promise<void> {
    await WorkType.destroy({ where: { WorkTypeID: workTypeId } });
  }
  async getById(workTypeId: string): Promise<WorkType | null> {
    const workType = await WorkType.findByPk(workTypeId);
    return workType;
  }
  async getAll(): Promise<WorkType[] | null> {
    const workTypes = await WorkType.findAll();
    return workTypes;
  }
}

export default new WorkTypeServices();
