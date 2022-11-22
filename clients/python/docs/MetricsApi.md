# estuary_client.MetricsApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_metrics_deals_on_chain_get**](MetricsApi.md#public_metrics_deals_on_chain_get) | **GET** /public/metrics/deals-on-chain | Get deal metrics

## **public_metrics_deals_on_chain_get** {#public_metrics_deals_on_chain_get}
> str public_metrics_deals_on_chain_get()

Get deal metrics

This endpoint is used to get deal metrics

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
api_instance = estuary_client.MetricsApi(estuary_client.ApiClient(configuration))

try:
    # Get deal metrics
    api_response = api_instance.public_metrics_deals_on_chain_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetricsApi->public_metrics_deals_on_chain_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

