# estuary_client.PublicApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_cid_get**](PublicApi.md#get_cid_get) | **GET** /get/{cid} | Get Full Content by Cid
[**public_by_cid_cid_get**](PublicApi.md#public_by_cid_cid_get) | **GET** /public/by-cid/{cid} | Get Content by Cid
[**public_info_get**](PublicApi.md#public_info_get) | **GET** /public/info | Get public node info
[**public_metrics_deals_on_chain_get**](PublicApi.md#public_metrics_deals_on_chain_get) | **GET** /public/metrics/deals-on-chain | Get deal metrics
[**public_miners_deals_miner_get**](PublicApi.md#public_miners_deals_miner_get) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**public_miners_failures_miner_get**](PublicApi.md#public_miners_failures_miner_get) | **GET** /public/miners/failures/{miner} | Get all miners
[**public_miners_stats_miner_get**](PublicApi.md#public_miners_stats_miner_get) | **GET** /public/miners/stats/{miner} | Get miner stats
[**public_net_addrs_get**](PublicApi.md#public_net_addrs_get) | **GET** /public/net/addrs | Net Addrs
[**public_net_peers_get**](PublicApi.md#public_net_peers_get) | **GET** /public/net/peers | Net Peers
[**public_stats_get**](PublicApi.md#public_stats_get) | **GET** /public/stats | Public stats

## **get_cid_get** {#get_cid_get}
> get_cid_get(cid)

Get Full Content by Cid

This endpoint returns the content associated with a CID

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))
cid = 'cid_example' # str | Cid

try:
    # Get Full Content by Cid
    api_instance.get_cid_get(cid)
except ApiException as e:
    print("Exception when calling PublicApi->get_cid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **str**| Cid | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **public_by_cid_cid_get** {#public_by_cid_cid_get}
> str public_by_cid_cid_get(cid)

Get Content by Cid

This endpoint returns the content record associated with a CID

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))
cid = 'cid_example' # str | Cid

try:
    # Get Content by Cid
    api_response = api_instance.public_by_cid_cid_get(cid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_by_cid_cid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **str**| Cid | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **public_info_get** {#public_info_get}
> ApiPublicNodeInfo public_info_get()

Get public node info

This endpoint returns information about the node

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))

try:
    # Get public node info
    api_response = api_instance.public_info_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_info_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiPublicNodeInfo**](ApiPublicNodeInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))

try:
    # Get deal metrics
    api_response = api_instance.public_metrics_deals_on_chain_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_metrics_deals_on_chain_get: %s\n" % e)
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

## **public_miners_deals_miner_get** {#public_miners_deals_miner_get}
> str public_miners_deals_miner_get(miner, ignore_failed=ignore_failed)

Get all miners deals

This endpoint returns all miners deals

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner
ignore_failed = 'ignore_failed_example' # str | Ignore Failed (optional)

try:
    # Get all miners deals
    api_response = api_instance.public_miners_deals_miner_get(miner, ignore_failed=ignore_failed)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_miners_deals_miner_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **str**| Filter by miner | 
 **ignore_failed** | **str**| Ignore Failed | [optional] 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **public_miners_failures_miner_get** {#public_miners_failures_miner_get}
> str public_miners_failures_miner_get(miner)

Get all miners

This endpoint returns all miners

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner

try:
    # Get all miners
    api_response = api_instance.public_miners_failures_miner_get(miner)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_miners_failures_miner_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **str**| Filter by miner | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **public_miners_stats_miner_get** {#public_miners_stats_miner_get}
> str public_miners_stats_miner_get(miner)

Get miner stats

This endpoint returns miner stats

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner

try:
    # Get miner stats
    api_response = api_instance.public_miners_stats_miner_get(miner)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_miners_stats_miner_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **str**| Filter by miner | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **public_net_addrs_get** {#public_net_addrs_get}
> list[str] public_net_addrs_get()

Net Addrs

This endpoint is used to get net addrs

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))

try:
    # Net Addrs
    api_response = api_instance.public_net_addrs_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_net_addrs_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[str]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **public_net_peers_get** {#public_net_peers_get}
> list[str] public_net_peers_get()

Net Peers

This endpoint is used to get net peers

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))

try:
    # Net Peers
    api_response = api_instance.public_net_peers_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_net_peers_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[str]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **public_stats_get** {#public_stats_get}
> str public_stats_get()

Public stats

This endpoint is used to get public stats.

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
api_instance = estuary_client.PublicApi(estuary_client.ApiClient(configuration))

try:
    # Public stats
    api_response = api_instance.public_stats_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PublicApi->public_stats_get: %s\n" % e)
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

