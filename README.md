## performance-k6:
Teste de performance de API Chuck Norris, objetivo de estudar performance utilizando a ferramente k6 integrado com a base de dados influxDB, Grafana e Docker.

### Pré-condições:
1. Deve ter instalado em sua maquina k6, se não tiver rode o comando `brew install k6`;
2. Tenha instalado em sua maquina Docker descktop (Se estiver usando um sistema operacional diferente do linux);
3. Tenha instalado em sua maquina visual studio code, node se necessário (afinal de contas k6 usa JS);

### Configuração do ambiente:
1. Na parta Docker (path: performance-k6/clientes-performance/Docker) rode o comando para iniciar o docker-compose: `docker-compose up`
2. Execute o comando para pegar o id do influx: `docker ps`;
3. Execute o comando para iniciar o container da base de dados: `docker exec -it {{idContainerInflux}} influx`;
4. Entre no link do grafana pela porta que o container iniciou: `localhost:3000`;
5. Utilize a senha que está configurada no arquivo do docker-compose.yml
6. Crie uma contexão com o banco de dados Influxdb: 

    a. URL: http://influxdb:8086;

    b. Retirar username e senha;

    c. Nome do db: k6;
    
    d.  As informações default não precisam ser alteradas

7. Crie um dashboard novo. Dica: Importe um dashboard já criado. [Link do dashboard 1](https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/) e/ou [Link do dashboard 2](https://grafana.com/grafana/dashboards/14801-k6-dashboard/)

8. Rode o teste pelo comando: `k6 run --out influxdb=http://localhost:8086/k6 scenarios/cenarioDoTeste.js`
