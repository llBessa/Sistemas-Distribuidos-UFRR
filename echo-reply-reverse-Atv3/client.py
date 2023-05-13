import socket
import threading
import keyboard
from lib import *

# fecha o programa
def finaliza_clientes():
    while True:
        if(keyboard.is_pressed('q')):
            finalizar_programa()

def send_message(sock, message):
    try:
        sock.sendall(message.encode())

        response = sock.recv(4096).decode()
        print(f"Resposta recebida: {response}")
    except:
        print("Erro de conexão com o servidor")
    
def start_client():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_address = ('localhost', 5000)
    client_socket.connect(server_address)

    print('Conectado ao servidor...')
    while True:
        # gera uma mensagem com o tamanho em bytes especificado
        message = gerar_string(int(sys.argv[1]))
        print(f"Frase enviada: {message}")
        send_message(client_socket, message)

def init_clients(number_clients):
    for i in range(number_clients):
        thread_finalizacao = threading.Thread(target=start_client)
        thread_finalizacao.start()

if __name__ == "__main__":
    # espera a tecla q ser pressionada para finalizar o programa
    thread_finalizacao = threading.Thread(target=finaliza_clientes)
    thread_finalizacao.start()

    init_clients(1)