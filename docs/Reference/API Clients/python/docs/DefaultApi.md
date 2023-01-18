# estuary_client.DefaultApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewer_get**](DefaultApi.md#viewer_get) | **GET** /viewer | Fetch viewer details

## **viewer_get** {#viewer_get}
> UtilViewerResponse viewer_get()

Fetch viewer details

This endpoint fetches viewer details such as username, permissions, address, owned miners, user settings etc.

### Example
```python
from __future__ import print_function
import time
import estuary_client
from estuary_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: bearerAuth
configuration = estuary_client.Configuration()
configuration.api_key['Authorization'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# create an instance of the API class
api_instance = estuary_client.DefaultApi(estuary_client.ApiClient(configuration))

try:
    # Fetch viewer details
    api_response = api_instance.viewer_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->viewer_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UtilViewerResponse**](UtilViewerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

