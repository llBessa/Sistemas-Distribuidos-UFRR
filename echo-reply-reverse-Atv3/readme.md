# Serviço echo reply reverse com simulação de ataque DOS

O script client.py vai realizar o envio de diversas mensagens em paralelo para o servidor, enquanto o script servidor.py vai tratar cada requisição do cliente paralelamente.

## **Como executar**

<span style="color: yellow">**Cliente:** </span> ./client.py "tamanho das mensagens em bytes" <br>

<span style="color: green">**Exemplo:**</span> ./client.py 50 (_para testes com mensagens de 50 bytes_)

<span style="color: yellow">**Servidor:** </span> ./server.py "tamanho das mensagens em bytes" <br>

<span style="color: green">**Exemplo:**</span> ./server.py 50 (_para testes com mensagens de 50 bytes_)

## **Observações**

Com apenas um único cliente, realizando requisições em paralelo o computador atingiu 100% de uso da CPU com clientes mandando mensagens de 100 bytes.

## **Gráficos de teste com 50 bytes**

![Uso da memoria com 50 bytes por mensagem](./graficos/uso_medio_memoria_50b.png)
![Uso da cpu com 50 bytes por mensagem](./graficos/uso_medio_cpu_50b.png)
![Uso da rede com 50 bytes por mensagem](./graficos/uso_medio_rede_50b.png)

## **Gráficos de teste com 100 bytes**

![Uso da memoria com 100 bytes por mensagem](./graficos/uso_medio_memoria_100b.png)
![Uso da cpu com 100 bytes por mensagem](./graficos/uso_medio_cpu_100b.png)
![Uso da rede com 100 bytes por mensagem](./graficos/uso_medio_rede_100b.png)