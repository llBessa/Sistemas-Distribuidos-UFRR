import random
import os
import signal

# kill no processo do programa atual
def finalizar_programa():
    pid = os.getpid()
    os.kill(pid, signal.SIGINT)