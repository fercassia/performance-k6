import GetCrocodiles from "./src/scenarios/get-crocodiles-k6.js";
import {group , sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Carregar os stages de um arquivo JSON
const stagesData = JSON.parse(open('./settings/stages.json'));
const stages = stagesData.stages; // Extraindo a propriedade stages
export const options = {
	stages: stagesData.stages, // Usando a variável stages aqui
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export default() =>{
  group('Endpoint Get Clientes - API Clientes', () => {
    GetCrocodiles();
  });
}