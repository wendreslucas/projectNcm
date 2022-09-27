import Data from '../models';
import { Request } from 'express';

const deleteNcm = (req: Request) => {
  return Data.ncm.findByIdAndDelete(req.params.id);
};

export default {
  deleteNcm,
};
