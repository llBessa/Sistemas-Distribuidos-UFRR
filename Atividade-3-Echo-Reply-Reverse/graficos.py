import matplotlib.pyplot as plt

quantidade_bytes = 100

arquivo = open(f"./logs/use_system_{quantidade_bytes}.txt", "r")
dados = arquivo.readlines()

tempo = [i for i in range(60)]

uso_memoria = []
uso_cpu = []
uso_rede = []

for dado in dados:
    uso_memoria.append(dado.split(",")[0])
    uso_cpu.append(dado.split(",")[1])
    uso_rede.append(dado.split(",")[2])

plt.plot(tempo, uso_memoria)
plt.title("Uso da rede ao longo do tempo")
plt.yticks(range(0, 60, 10))
plt.xlabel("tempo")
plt.ylabel("quantidade de pacotes recebidos")
plt.savefig(f"./graficos/uso_medio_memoria_{quantidade_bytes}b.png")