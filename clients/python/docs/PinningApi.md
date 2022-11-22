# estuary_client.PinningApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pinning_pins_get**](PinningApi.md#pinning_pins_get) | **GET** /pinning/pins | List all pin status objects
[**pinning_pins_pinid_delete**](PinningApi.md#pinning_pins_pinid_delete) | **DELETE** /pinning/pins/{pinid} | Delete a pinned object
[**pinning_pins_pinid_get**](PinningApi.md#pinning_pins_pinid_get) | **GET** /pinning/pins/{pinid} | Get a pin status object
[**pinning_pins_pinid_post**](PinningApi.md#pinning_pins_pinid_post) | **POST** /pinning/pins/{pinid} | Replace a pinned object
[**pinning_pins_post**](PinningApi.md#pinning_pins_post) | **POST** /pinning/pins | Add and pin object

## **pinning_pins_get** {#pinning_pins_get}
> TypesIpfsListPinStatusResponse pinning_pins_get()

List all pin status objects

This endpoint lists all pin status objects

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
api_instance = estuary_client.PinningApi(estuary_client.ApiClient(configuration))

try:
    # List all pin status objects
    api_response = api_instance.pinning_pins_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PinningApi->pinning_pins_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TypesIpfsListPinStatusResponse**](TypesIpfsListPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **pinning_pins_pinid_delete** {#pinning_pins_pinid_delete}
> pinning_pins_pinid_delete(pinid)

Delete a pinned object

This endpoint deletes a pinned object.

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
api_instance = estuary_client.PinningApi(estuary_client.ApiClient(configuration))
pinid = 'pinid_example' # str | Pin ID

try:
    # Delete a pinned object
    api_instance.pinning_pins_pinid_delete(pinid)
except ApiException as e:
    print("Exception when calling PinningApi->pinning_pins_pinid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **str**| Pin ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **pinning_pins_pinid_get** {#pinning_pins_pinid_get}
> TypesIpfsPinStatusResponse pinning_pins_pinid_get(pinid)

Get a pin status object

This endpoint returns a pin status object.

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
api_instance = estuary_client.PinningApi(estuary_client.ApiClient(configuration))
pinid = 'pinid_example' # str | cid

try:
    # Get a pin status object
    api_response = api_instance.pinning_pins_pinid_get(pinid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PinningApi->pinning_pins_pinid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **str**| cid | 

### Return type

[**TypesIpfsPinStatusResponse**](TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **pinning_pins_pinid_post** {#pinning_pins_pinid_post}
> TypesIpfsPinStatusResponse pinning_pins_pinid_post(pinid, body=body)

Replace a pinned object

This endpoint replaces a pinned object.

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
api_instance = estuary_client.PinningApi(estuary_client.ApiClient(configuration))
pinid = 'pinid_example' # str | Pin ID
body = 'body_example' # str | Meta information of new pin (optional)

try:
    # Replace a pinned object
    api_response = api_instance.pinning_pins_pinid_post(pinid, body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PinningApi->pinning_pins_pinid_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **str**| Pin ID | 
 **body** | [**str**](str.md)| Meta information of new pin | [optional] 

### Return type

[**TypesIpfsPinStatusResponse**](TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **pinning_pins_post** {#pinning_pins_post}
> TypesIpfsPinStatusResponse pinning_pins_post(body)

Add and pin object

This endpoint adds a pin to the IPFS daemon.

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
api_instance = estuary_client.PinningApi(estuary_client.ApiClient(configuration))
body = estuary_client.TypesIpfsPin() # TypesIpfsPin | Pin Body {cid:cid, name:name}

try:
    # Add and pin object
    api_response = api_instance.pinning_pins_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PinningApi->pinning_pins_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TypesIpfsPin**](TypesIpfsPin.md)| Pin Body {cid:cid, name:name} | 

### Return type

[**TypesIpfsPinStatusResponse**](TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

