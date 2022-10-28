# estuary-client.MinerApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_miners_deals_miner_get**](MinerApi.md#public_miners_deals_miner_get) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**public_miners_stats_miner_get**](MinerApi.md#public_miners_stats_miner_get) | **GET** /public/miners/stats/{miner} | Get miner stats


# **public_miners_deals_miner_get**
> public_miners_deals_miner_get(miner, ignore_failed=ignore_failed)

Get all miners deals

This endpoint returns all miners deals

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
api_instance = estuary-client.MinerApi(estuary-client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner
ignore_failed = 'ignore_failed_example' # str | Ignore Failed (optional)

try:
    # Get all miners deals
    api_instance.public_miners_deals_miner_get(miner, ignore_failed=ignore_failed)
except ApiException as e:
    print("Exception when calling MinerApi->public_miners_deals_miner_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **str**| Filter by miner | 
 **ignore_failed** | **str**| Ignore Failed | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_miners_stats_miner_get**
> public_miners_stats_miner_get(miner)

Get miner stats

This endpoint returns miner stats

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
api_instance = estuary-client.MinerApi(estuary-client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner

try:
    # Get miner stats
    api_instance.public_miners_stats_miner_get(miner)
except ApiException as e:
    print("Exception when calling MinerApi->public_miners_stats_miner_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **str**| Filter by miner | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

