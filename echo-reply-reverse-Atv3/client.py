import socket
import threading
import time
import keyboard
from lib import finalizar_programa

# fecha o programa
def finaliza_clientes():
    while True:
        if(keyboard.is_pressed('q')):
            finalizar_programa()

def send_message(sock, message):
    try:
        sock.sendall(message.encode())

        response = sock.recv(1024).decode()
        print(f"Resposta recebida: {response}")
    except:
        print("Erro de conexão com o servidor")
    
def start_client():
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_address = ('localhost', 5000)
    client_socket.connect(server_address)

    print('Conectado ao servidor...')
    while True:
        message = "Eai vagabunda"
        print(f"Frase enviada: {message}")
        time.sleep(2)
        send_message(client_socket, message)

if __name__ == "__main__":
    # espera a tecla q ser pressionada para finalizar o programa
    thread_finalizacao = threading.Thread(target=finaliza_clientes)
    thread_finalizacao.start()

    start_client()