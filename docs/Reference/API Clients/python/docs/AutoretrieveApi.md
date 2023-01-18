# estuary_client.AutoretrieveApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_autoretrieve_init_post**](AutoretrieveApi.md#admin_autoretrieve_init_post) | **POST** /admin/autoretrieve/init | Register autoretrieve server
[**admin_autoretrieve_list_get**](AutoretrieveApi.md#admin_autoretrieve_list_get) | **GET** /admin/autoretrieve/list | List autoretrieve servers
[**autoretrieve_heartbeat_post**](AutoretrieveApi.md#autoretrieve_heartbeat_post) | **POST** /autoretrieve/heartbeat | Marks autoretrieve server as up

## **admin_autoretrieve_init_post** {#admin_autoretrieve_init_post}
> str admin_autoretrieve_init_post(addresses, pub_key)

Register autoretrieve server

This endpoint registers a new autoretrieve server

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
api_instance = estuary_client.AutoretrieveApi(estuary_client.ApiClient(configuration))
addresses = 'addresses_example' # str | 
pub_key = 'pub_key_example' # str | 

try:
    # Register autoretrieve server
    api_response = api_instance.admin_autoretrieve_init_post(addresses, pub_key)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AutoretrieveApi->admin_autoretrieve_init_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | **str**|  | 
 **pub_key** | **str**|  | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **admin_autoretrieve_list_get** {#admin_autoretrieve_list_get}
> str admin_autoretrieve_list_get()

List autoretrieve servers

This endpoint lists all registered autoretrieve servers

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
api_instance = estuary_client.AutoretrieveApi(estuary_client.ApiClient(configuration))

try:
    # List autoretrieve servers
    api_response = api_instance.admin_autoretrieve_list_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AutoretrieveApi->admin_autoretrieve_list_get: %s\n" % e)
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

## **autoretrieve_heartbeat_post** {#autoretrieve_heartbeat_post}
> str autoretrieve_heartbeat_post(token)

Marks autoretrieve server as up

This endpoint updates the lastConnection field for autoretrieve

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
api_instance = estuary_client.AutoretrieveApi(estuary_client.ApiClient(configuration))
token = 'token_example' # str | Autoretrieve's auth token

try:
    # Marks autoretrieve server as up
    api_response = api_instance.autoretrieve_heartbeat_post(token)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AutoretrieveApi->autoretrieve_heartbeat_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Autoretrieve&#x27;s auth token | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

