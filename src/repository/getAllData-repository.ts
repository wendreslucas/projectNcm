import Data from '../models';
import { Request } from 'express';

const getAllDataNcm = (req: Request) => {
  return Data.ncm.find({}).limit(20);
};

export default { getAllDataNcm };
