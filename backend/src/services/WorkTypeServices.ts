import { WorkType } from './../model/WorkType';

interface IWorkTypeServices {
  create(statusType: WorkType): Promise<WorkType>;
  update(statusType: WorkType): Promise<number[]>;
  delete(statusTypeId: string): Promise<number>;
  getById(statusTypeId: string): Promise<WorkType | null>;
  getAll(): Promise<WorkType[] | null>;
}

class WorkTypeServices implements IWorkTypeServices {
  async create(workType: WorkType): Promise<WorkType> {
    try {
      const cr = await WorkType.create({ ...workType });
      return cr;
    } catch (error) {
      throw new Error('Failed to create workType');
    }
  }
  async update(workType: WorkType): Promise<number[]> {
    const WorkTypeID = workType.WorkTypeID;
    const up = await WorkType.update(
      { ...workType },
      { where: { WorkTypeID } },
    );
    return up;
  }
  async delete(workTypeId: string): Promise<number> {
    return await WorkType.destroy({ where: { WorkTypeID: workTypeId } });
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
