import requests
from socket import *
import json
socket = socket()
socket.bind(('', 8080))
socket.listen(4)
ns, na = socket.accept()

while 1:
    try:
        data = ns.recv(8192)
    except:
        ns.close()
        socket.close()
        break

    data = json.loads(data)
    print(data)

#response = requests.get("https://api.covid19api.com/summary")
#print(response)
#confirmed = response.json()['Global']['TotalConfirmed']
#recovered = response.json()['Global']['TotalRecovered']
#print(confirmed)
#print(recovered)