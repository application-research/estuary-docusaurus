# estuary_client.AdminApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_miners_get**](AdminApi.md#admin_miners_get) | **GET** /admin/miners/ | Get all miners
[**admin_peering_peers_delete**](AdminApi.md#admin_peering_peers_delete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
[**admin_peering_peers_get**](AdminApi.md#admin_peering_peers_get) | **GET** /admin/peering/peers | List all Peering peers
[**admin_peering_peers_post**](AdminApi.md#admin_peering_peers_post) | **POST** /admin/peering/peers | Add peers on Peering Service
[**admin_peering_start_post**](AdminApi.md#admin_peering_start_post) | **POST** /admin/peering/start | Start Peering
[**admin_peering_status_get**](AdminApi.md#admin_peering_status_get) | **GET** /admin/peering/status | Check Peering Status
[**admin_peering_stop_post**](AdminApi.md#admin_peering_stop_post) | **POST** /admin/peering/stop | Stop Peering
[**admin_system_config_get**](AdminApi.md#admin_system_config_get) | **GET** /admin/system/config | Get systems(estuary/shuttle) config
[**admin_users_get**](AdminApi.md#admin_users_get) | **GET** /admin/users | Get all users

## **admin_miners_get** {#admin_miners_get}
> ApiMinerResp admin_miners_get()

Get all miners

This endpoint returns all miners. Note: value may be cached

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))

try:
    # Get all miners
    api_response = api_instance.admin_miners_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_miners_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiMinerResp**](ApiMinerResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **admin_peering_peers_delete** {#admin_peering_peers_delete}
> str admin_peering_peers_delete(body)

Remove peers on Peering Service

This endpoint can be used to remove a Peer from the Peering Service

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))
body = ['body_example'] # list[str] | Peer ids

try:
    # Remove peers on Peering Service
    api_response = api_instance.admin_peering_peers_delete(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_peering_peers_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**list[str]**](str.md)| Peer ids | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **admin_peering_peers_get** {#admin_peering_peers_get}
> str admin_peering_peers_get()

List all Peering peers

This endpoint can be used to list all peers on Peering Service

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))

try:
    # List all Peering peers
    api_response = api_instance.admin_peering_peers_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_peering_peers_get: %s\n" % e)
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

## **admin_peering_peers_post** {#admin_peering_peers_post}
> str admin_peering_peers_post(body)

Add peers on Peering Service

This endpoint can be used to add a Peer from the Peering Service

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))
body = [estuary_client.PeeringPeeringPeer()] # list[PeeringPeeringPeer] | Peering Peer array

try:
    # Add peers on Peering Service
    api_response = api_instance.admin_peering_peers_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_peering_peers_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**list[PeeringPeeringPeer]**](PeeringPeeringPeer.md)| Peering Peer array | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **admin_peering_start_post** {#admin_peering_start_post}
> str admin_peering_start_post()

Start Peering

This endpoint can be used to start the Peering Service

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))

try:
    # Start Peering
    api_response = api_instance.admin_peering_start_post()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_peering_start_post: %s\n" % e)
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

## **admin_peering_status_get** {#admin_peering_status_get}
> str admin_peering_status_get()

Check Peering Status

This endpoint can be used to check the Peering status

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))

try:
    # Check Peering Status
    api_response = api_instance.admin_peering_status_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_peering_status_get: %s\n" % e)
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

## **admin_peering_stop_post** {#admin_peering_stop_post}
> str admin_peering_stop_post()

Stop Peering

This endpoint can be used to stop the Peering Service

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))

try:
    # Stop Peering
    api_response = api_instance.admin_peering_stop_post()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_peering_stop_post: %s\n" % e)
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

## **admin_system_config_get** {#admin_system_config_get}
> str admin_system_config_get()

Get systems(estuary/shuttle) config

This endpoint is used to get system configs.

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))

try:
    # Get systems(estuary/shuttle) config
    api_response = api_instance.admin_system_config_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_system_config_get: %s\n" % e)
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

## **admin_users_get** {#admin_users_get}
> str admin_users_get()

Get all users

This endpoint is used to get all users.

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
api_instance = estuary_client.AdminApi(estuary_client.ApiClient(configuration))

try:
    # Get all users
    api_response = api_instance.admin_users_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AdminApi->admin_users_get: %s\n" % e)
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

