# estuary-client.DefaultApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deal_transfer_status_post**](DefaultApi.md#deal_transfer_status_post) | **POST** /deal/transfer/status | 


# **deal_transfer_status_post**
> deal_transfer_status_post()



### Example
```python
from __future__ import print_function
import time
import estuary-client
from estuary-client.rest import ApiException
from pprint import pprint

# Configure API key authorization: bearerAuth
configuration = estuary-client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = estuary-client.DefaultApi(estuary-client.ApiClient(configuration))

try:
    api_instance.deal_transfer_status_post()
except ApiException as e:
    print("Exception when calling DefaultApi->deal_transfer_status_post: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

