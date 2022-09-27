import mongoose, { Schema } from 'mongoose';
import INcm from '../types/INcm';

const ncmSchema: Schema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      required: 'Insira um código válido',
    },
    descricao: {
      type: String,
      required: 'Insira uma descricao',
    },
    data_inicio: {
      type: String,
      required: 'Insira uma data inicio',
    },
    data_fim: {
      type: String,
      required: 'Insira uma data fim',
    },
    tipo_ato: {
      type: String,
      required: 'Insira um ATO',
    },
    numero_ato: {
      type: String,
      required: 'Insira o numero do ato',
    },
    ano_ato: {
      type: String,
      required: 'Insira o ano do ato',
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<INcm>('INcm', ncmSchema);
