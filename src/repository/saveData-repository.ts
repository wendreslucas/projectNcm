import mongoose from 'mongoose';
import Data from '../models';
import { Request } from 'express';

const saveDataNcm = (req: Request) => {
  const {
    codigo,
    descricao,
    data_inicio,
    data_fim,
    tipo_ato,
    numero_ato,
    ano_ato,
  } = req.body;
  const newData = new Data.ncm({
    _id: new mongoose.Types.ObjectId(),
    codigo,
    descricao,
    data_inicio,
    data_fim,
    tipo_ato,
    numero_ato,
    ano_ato,
  });
  return newData.save();
};

export default {
  saveDataNcm,
};
