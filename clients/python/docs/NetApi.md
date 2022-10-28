# estuary-client.NetApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**net_addrs_get**](NetApi.md#net_addrs_get) | **GET** /net/addrs | Net Addrs
[**public_miners_failures_miner_get**](NetApi.md#public_miners_failures_miner_get) | **GET** /public/miners/failures/{miner} | Get all miners
[**public_miners_get**](NetApi.md#public_miners_get) | **GET** /public/miners | Get all miners
[**public_net_addrs_get**](NetApi.md#public_net_addrs_get) | **GET** /public/net/addrs | Net Addrs
[**public_net_peers_get**](NetApi.md#public_net_peers_get) | **GET** /public/net/peers | Net Peers


# **net_addrs_get**
> list[str] net_addrs_get()

Net Addrs

This endpoint is used to get net addrs

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
api_instance = estuary-client.NetApi(estuary-client.ApiClient(configuration))

try:
    # Net Addrs
    api_response = api_instance.net_addrs_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NetApi->net_addrs_get: %s\n" % e)
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

# **public_miners_failures_miner_get**
> public_miners_failures_miner_get(miner)

Get all miners

This endpoint returns all miners

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
api_instance = estuary-client.NetApi(estuary-client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner

try:
    # Get all miners
    api_instance.public_miners_failures_miner_get(miner)
except ApiException as e:
    print("Exception when calling NetApi->public_miners_failures_miner_get: %s\n" % e)
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

# **public_miners_get**
> public_miners_get()

Get all miners

This endpoint returns all miners

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
api_instance = estuary-client.NetApi(estuary-client.ApiClient(configuration))

try:
    # Get all miners
    api_instance.public_miners_get()
except ApiException as e:
    print("Exception when calling NetApi->public_miners_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_net_addrs_get**
> list[str] public_net_addrs_get()

Net Addrs

This endpoint is used to get net addrs

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
api_instance = estuary-client.NetApi(estuary-client.ApiClient(configuration))

try:
    # Net Addrs
    api_response = api_instance.public_net_addrs_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NetApi->public_net_addrs_get: %s\n" % e)
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

# **public_net_peers_get**
> list[str] public_net_peers_get()

Net Peers

This endpoint is used to get net peers

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
api_instance = estuary-client.NetApi(estuary-client.ApiClient(configuration))

try:
    # Net Peers
    api_response = api_instance.public_net_peers_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NetApi->public_net_peers_get: %s\n" % e)
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

