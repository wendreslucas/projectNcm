import Data from '../models';

const getAllDataNcm = (req: Request) => {
  return Data.ncm.find({});
};

export default { getAllDataNcm };
