import http from 'k6/http';
import { sleep } from 'k6';
import { check, fail } from 'k6';
import { Trend, Counter} from 'k6/metrics';

// Carregar os stages de um arquivo JSON
const stagesData = JSON.parse(open('../settings/stages.json'));
const stages = stagesData.stages; // Extraindo a propriedade stages
export const options = {
	stages: stagesData.stages, // Usando a variável stages aqui
};

const responseTime = new Trend('response_time');
const contadorDeErros = new Counter('errors');
const BASE_URL = `https://test-api.k6.io`;

export default function () {
	const url = `${BASE_URL}/public/crocodiles/`;
  const res = http.get(url);

	var checkStatus = check(
		res,
		{ 'status is 200': (r) => r.status === 200},
	);

  if (!checkStatus) {
    contadorDeErros.add(1, checkStatus);
  }

	responseTime.add(res.timings.duration);

  sleep(1);
}
