# estuary_client.MinerApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**miner_claim_miner_get**](MinerApi.md#miner_claim_miner_get) | **GET** /miner/claim/{miner} | Get Claim Miner Message
[**miner_claim_post**](MinerApi.md#miner_claim_post) | **POST** /miner/claim | Claim Miner
[**miner_set_info_miner_put**](MinerApi.md#miner_set_info_miner_put) | **PUT** /miner/set-info/{miner} | Set Miner Info
[**miner_suspend_miner_post**](MinerApi.md#miner_suspend_miner_post) | **POST** /miner/suspend/{miner} | Suspend Miner
[**miner_unsuspend_miner_put**](MinerApi.md#miner_unsuspend_miner_put) | **PUT** /miner/unsuspend/{miner} | Unuspend Miner
[**public_miners_deals_miner_get**](MinerApi.md#public_miners_deals_miner_get) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**public_miners_stats_miner_get**](MinerApi.md#public_miners_stats_miner_get) | **GET** /public/miners/stats/{miner} | Get miner stats

## **miner_claim_miner_get** {#miner_claim_miner_get}
> ApiClaimMsgResponse miner_claim_miner_get(miner)

Get Claim Miner Message

This endpoint lets a user get the message in order to claim a miner

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
api_instance = estuary_client.MinerApi(estuary_client.ApiClient(configuration))
miner = 'miner_example' # str | Miner claim message

try:
    # Get Claim Miner Message
    api_response = api_instance.miner_claim_miner_get(miner)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MinerApi->miner_claim_miner_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **str**| Miner claim message | 

### Return type

[**ApiClaimMsgResponse**](ApiClaimMsgResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **miner_claim_post** {#miner_claim_post}
> ApiClaimResponse miner_claim_post(body)

Claim Miner

This endpoint lets a user claim a miner

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
api_instance = estuary_client.MinerApi(estuary_client.ApiClient(configuration))
body = estuary_client.MinerClaimMinerBody() # MinerClaimMinerBody | Claim Miner Body

try:
    # Claim Miner
    api_response = api_instance.miner_claim_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MinerApi->miner_claim_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerClaimMinerBody**](MinerClaimMinerBody.md)| Claim Miner Body | 

### Return type

[**ApiClaimResponse**](ApiClaimResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **miner_set_info_miner_put** {#miner_set_info_miner_put}
> ApiEmptyResp miner_set_info_miner_put(body, miner)

Set Miner Info

This endpoint lets a user set miner info.

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
api_instance = estuary_client.MinerApi(estuary_client.ApiClient(configuration))
body = estuary_client.MinerMinerSetInfoParams() # MinerMinerSetInfoParams | Miner set info params
miner = 'miner_example' # str | Miner to set info for

try:
    # Set Miner Info
    api_response = api_instance.miner_set_info_miner_put(body, miner)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MinerApi->miner_set_info_miner_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerMinerSetInfoParams**](MinerMinerSetInfoParams.md)| Miner set info params | 
 **miner** | **str**| Miner to set info for | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **miner_suspend_miner_post** {#miner_suspend_miner_post}
> ApiEmptyResp miner_suspend_miner_post(body, miner)

Suspend Miner

This endpoint lets a user suspend a miner.

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
api_instance = estuary_client.MinerApi(estuary_client.ApiClient(configuration))
body = estuary_client.MinerSuspendMinerBody() # MinerSuspendMinerBody | Suspend Miner Body
miner = 'miner_example' # str | Miner to suspend

try:
    # Suspend Miner
    api_response = api_instance.miner_suspend_miner_post(body, miner)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MinerApi->miner_suspend_miner_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerSuspendMinerBody**](MinerSuspendMinerBody.md)| Suspend Miner Body | 
 **miner** | **str**| Miner to suspend | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **miner_unsuspend_miner_put** {#miner_unsuspend_miner_put}
> ApiEmptyResp miner_unsuspend_miner_put(miner)

Unuspend Miner

This endpoint lets a user unsuspend a miner.

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
api_instance = estuary_client.MinerApi(estuary_client.ApiClient(configuration))
miner = 'miner_example' # str | Miner to unsuspend

try:
    # Unuspend Miner
    api_response = api_instance.miner_unsuspend_miner_put(miner)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MinerApi->miner_unsuspend_miner_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **str**| Miner to unsuspend | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

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
api_instance = estuary_client.MinerApi(estuary_client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner
ignore_failed = 'ignore_failed_example' # str | Ignore Failed (optional)

try:
    # Get all miners deals
    api_response = api_instance.public_miners_deals_miner_get(miner, ignore_failed=ignore_failed)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MinerApi->public_miners_deals_miner_get: %s\n" % e)
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
api_instance = estuary_client.MinerApi(estuary_client.ApiClient(configuration))
miner = 'miner_example' # str | Filter by miner

try:
    # Get miner stats
    api_response = api_instance.public_miners_stats_miner_get(miner)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MinerApi->public_miners_stats_miner_get: %s\n" % e)
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

