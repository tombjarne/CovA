# swagger_client.CovAUserApi

All URIs are relative to *https://virtserver.swaggerhub.com/tombjarne/CovA/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_logfile**](CovAUserApi.md#create_logfile) | **POST** /log | creates Logfile
[**get_weather**](CovAUserApi.md#get_weather) | **GET** /weather | retrieves all available weather data
[**send_user_data**](CovAUserApi.md#send_user_data) | **GET** /evaluate | sends in user data to prepare specific response

# **create_logfile**
> create_logfile(body=body)

creates Logfile

JSON containing timestamp and user country will be submitted to track which countries have been selected. No personal data collected. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CovAUserApi()
body = swagger_client.Logfile() # Logfile | Logfile to create (optional)

try:
    # creates Logfile
    api_instance.create_logfile(body=body)
except ApiException as e:
    print("Exception when calling CovAUserApi->create_logfile: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Logfile**](Logfile.md)| Logfile to create | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: raw
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_weather**
> Weather get_weather()

retrieves all available weather data

JSON containing country of user to evaluate virus data and page content 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CovAUserApi()

try:
    # retrieves all available weather data
    api_response = api_instance.get_weather()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CovAUserApi->get_weather: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Weather**](Weather.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_user_data**
> Evaluation send_user_data(country_name)

sends in user data to prepare specific response

JSON containing country of user to evaluate virus data and page content 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CovAUserApi()
country_name = 'country_name_example' # str | country name

try:
    # sends in user data to prepare specific response
    api_response = api_instance.send_user_data(country_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CovAUserApi->send_user_data: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country_name** | **str**| country name | 

### Return type

[**Evaluation**](Evaluation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

