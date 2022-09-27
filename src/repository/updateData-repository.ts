import Data from '../models';
import { Request } from 'express';

const updateDataNcm = (req: Request) => {
  return Data.ncm.findByIdAndUpdate(req.params.id, req.body);
};

export default {
  updateDataNcm,
};
