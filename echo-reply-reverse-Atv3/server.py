import socket
import threading
import keyboard
from lib import finalizar_programa

# finaliza todas as conexões e depois fecha o servidor
def finaliza_servidor():
    while True:
        if(keyboard.is_pressed('q')):
            finalizar_programa()

def echo_reply_reverse(client_socket, message):
    # Inverte a mensagem recebida
    message = message.decode()[::-1].encode()

    # Envia a mensagem invertida de volta para o cliente
    client_socket.send(message)

def handle_client(client_socket):
    while True:
        # Recebe a mensagem do cliente
        message = client_socket.recv(1024)

        # inicia uma nova thread para processar a requisicao
        nova_requisicao = threading.Thread(target=echo_reply_reverse, args=(client_socket, message))
        nova_requisicao.start()

        if not message:
            client_socket.close()
            break

def start_server():
    # Cria um socket TCP/IP
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Define o IP e a porta em que o servidor deve ouvir
    server_address = ('localhost', 5000)
    server_socket.bind(server_address)

    # Define o número máximo de conexões simultâneas
    server_socket.listen(5)

    print(f'Servidor iniciado em {server_address}')

    while True:
        # Aceita uma conexão e cria uma nova thread para atendê-la
        client_socket, client_address = server_socket.accept()
        print(f'Nova conexão de {client_address}')

        # cria uma thread para cada tratar de cada novo cliente
        client_thread = threading.Thread(target=handle_client, args=(client_socket,))
        client_thread.start()

if __name__ == '__main__':
    # espera a tecla q ser pressionada para finalizar o programa
    thread_finalizacao = threading.Thread(target=finaliza_servidor)
    thread_finalizacao.start()
    
    start_server()
