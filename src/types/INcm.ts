import { Document } from 'mongoose';

export default interface INcm extends Document {
  _id?: String;
  codigo: String;
  descricao: String;
  data_inicio: String;
  data_fim: String;
  tipo_ato: String;
  numero_ato: String;
  ano_ato: String;
}
