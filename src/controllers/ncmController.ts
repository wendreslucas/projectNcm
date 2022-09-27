import { Request, Response, NextFunction } from 'express';
import { getAllData, saveData } from '../repository';

const NcmController = {
  async getAllNcms(req: Request, res: Response, next: NextFunction) {
    getAllData
      .getAllDataNcm(req)
      .then((ncm) => {
        res.status(200).json(ncm);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  },
  async createNcm(req: Request, res: Response, next: NextFunction) {
    saveData
      .saveDataNcm(req)
      .then((ncm) => {
        return res.status(201).json(ncm);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  },
};

export default NcmController;
