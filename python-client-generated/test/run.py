import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
import os
import sys

# Create Instance of API class
api_instance = swagger_client.CovAUserApi(swagger_client.CovAUserApi)
#api_instance.api_client.host = "localhost:8080"

# Get USER Requests
limit = 5
request_type = 'HOLD'

try:
    api_response = api_instance.get_weather
    pprint("response")
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CovAUserAPI->get_weather: %s\n" % e)

if __name__ == 'run':
    api_instance.run(host='0.0.0.0', port=5000, debug=True)

"""
if len(sys.argv) > 0:
    exit("Usage: python SwaggerTestClient.py user_id mms_id")

user_id = sys.argv[1]
limit = 5
request_type = 'HOLD'

try:
    api_response = api_instance.send_user_data(swagger_client)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RequestsApi->getalmawsv1usersuser_idrequests: %s\n" % e)

"""