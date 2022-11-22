# estuary_client.ContentApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_invites_get**](ContentApi.md#admin_invites_get) | **GET** /admin/invites | Get Estuary invites
[**admin_invites_post**](ContentApi.md#admin_invites_post) | **POST** /admin/invites | Create an Estuary invite
[**content_add_car_post**](ContentApi.md#content_add_car_post) | **POST** /content/add-car | Add Car object
[**content_add_ipfs_post**](ContentApi.md#content_add_ipfs_post) | **POST** /content/add-ipfs | Add IPFS object
[**content_add_post**](ContentApi.md#content_add_post) | **POST** /content/add | Add new content
[**content_aggregated_content_get**](ContentApi.md#content_aggregated_content_get) | **GET** /content/aggregated/{content} | Get aggregated content stats
[**content_all_deals_get**](ContentApi.md#content_all_deals_get) | **GET** /content/all-deals | Get all deals for a user
[**content_bw_usage_content_get**](ContentApi.md#content_bw_usage_content_get) | **GET** /content/bw-usage/{content} | Get content bandwidth
[**content_create_post**](ContentApi.md#content_create_post) | **POST** /content/create | Add a new content
[**content_deals_get**](ContentApi.md#content_deals_get) | **GET** /content/deals | Content with deals
[**content_ensure_replication_datacid_get**](ContentApi.md#content_ensure_replication_datacid_get) | **GET** /content/ensure-replication/{datacid} | Ensure Replication
[**content_failures_content_get**](ContentApi.md#content_failures_content_get) | **GET** /content/failures/{content} | List all failures for a content
[**content_id_get**](ContentApi.md#content_id_get) | **GET** /content/{id} | Content
[**content_importdeal_post**](ContentApi.md#content_importdeal_post) | **POST** /content/importdeal | Import a deal
[**content_list_get**](ContentApi.md#content_list_get) | **GET** /content/list | List all pinned content
[**content_read_cont_get**](ContentApi.md#content_read_cont_get) | **GET** /content/read/{cont} | Read content
[**content_staging_zones_get**](ContentApi.md#content_staging_zones_get) | **GET** /content/staging-zones | Get staging zone for user
[**content_stats_get**](ContentApi.md#content_stats_get) | **GET** /content/stats | Get content statistics
[**content_status_id_get**](ContentApi.md#content_status_id_get) | **GET** /content/status/{id} | Content Status

## **admin_invites_get** {#admin_invites_get}
> str admin_invites_get()

Get Estuary invites

This endpoint is used to list all estuary invites.

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))

try:
    # Get Estuary invites
    api_response = api_instance.admin_invites_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->admin_invites_get: %s\n" % e)
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

## **admin_invites_post** {#admin_invites_post}
> str admin_invites_post(code)

Create an Estuary invite

This endpoint is used to create an estuary invite.

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
code = 'code_example' # str | Invite code to be created

try:
    # Create an Estuary invite
    api_response = api_instance.admin_invites_post(code)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->admin_invites_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Invite code to be created | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_add_car_post** {#content_add_car_post}
> UtilContentAddResponse content_add_car_post(body, ignore_dupes=ignore_dupes, filename=filename)

Add Car object

This endpoint is used to add a car object to the network. The object can be a file or a directory.

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
body = 'body_example' # str | Car
ignore_dupes = 'ignore_dupes_example' # str | Ignore Dupes (optional)
filename = 'filename_example' # str | Filename (optional)

try:
    # Add Car object
    api_response = api_instance.content_add_car_post(body, ignore_dupes=ignore_dupes, filename=filename)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_add_car_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**str**](str.md)| Car | 
 **ignore_dupes** | **str**| Ignore Dupes | [optional] 
 **filename** | **str**| Filename | [optional] 

### Return type

[**UtilContentAddResponse**](UtilContentAddResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_add_ipfs_post** {#content_add_ipfs_post}
> str content_add_ipfs_post(body, ignore_dupes=ignore_dupes)

Add IPFS object

This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
body = estuary_client.UtilContentAddIpfsBody() # UtilContentAddIpfsBody | IPFS Body
ignore_dupes = 'ignore_dupes_example' # str | Ignore Dupes (optional)

try:
    # Add IPFS object
    api_response = api_instance.content_add_ipfs_post(body, ignore_dupes=ignore_dupes)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_add_ipfs_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UtilContentAddIpfsBody**](UtilContentAddIpfsBody.md)| IPFS Body | 
 **ignore_dupes** | **str**| Ignore Dupes | [optional] 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_add_post** {#content_add_post}
> UtilContentAddResponse content_add_post(data, filename, coluuid=coluuid, replication=replication, ignore_dupes=ignore_dupes, lazy_provide=lazy_provide, dir=dir)

Add new content

This endpoint is used to upload new content.

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
data = 'data_example' # str | 
filename = 'filename_example' # str | 
coluuid = 'coluuid_example' # str | Collection UUID (optional)
replication = 56 # int | Replication value (optional)
ignore_dupes = 'ignore_dupes_example' # str | Ignore Dupes true/false (optional)
lazy_provide = 'lazy_provide_example' # str | Lazy Provide true/false (optional)
dir = 'dir_example' # str | Directory (optional)

try:
    # Add new content
    api_response = api_instance.content_add_post(data, filename, coluuid=coluuid, replication=replication, ignore_dupes=ignore_dupes, lazy_provide=lazy_provide, dir=dir)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_add_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **str**|  | 
 **filename** | **str**|  | 
 **coluuid** | **str**| Collection UUID | [optional] 
 **replication** | **int**| Replication value | [optional] 
 **ignore_dupes** | **str**| Ignore Dupes true/false | [optional] 
 **lazy_provide** | **str**| Lazy Provide true/false | [optional] 
 **dir** | **str**| Directory | [optional] 

### Return type

[**UtilContentAddResponse**](UtilContentAddResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_aggregated_content_get** {#content_aggregated_content_get}
> str content_aggregated_content_get(content)

Get aggregated content stats

This endpoint returns aggregated content stats

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
content = 'content_example' # str | Content ID

try:
    # Get aggregated content stats
    api_response = api_instance.content_aggregated_content_get(content)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_aggregated_content_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **str**| Content ID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_all_deals_get** {#content_all_deals_get}
> str content_all_deals_get(begin, duration, all)

Get all deals for a user

This endpoint is used to get all deals for a user

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
begin = 'begin_example' # str | Begin
duration = 'duration_example' # str | Duration
all = 'all_example' # str | All

try:
    # Get all deals for a user
    api_response = api_instance.content_all_deals_get(begin, duration, all)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_all_deals_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **begin** | **str**| Begin | 
 **duration** | **str**| Duration | 
 **all** | **str**| All | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_bw_usage_content_get** {#content_bw_usage_content_get}
> str content_bw_usage_content_get(content)

Get content bandwidth

This endpoint returns content bandwidth

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
content = 'content_example' # str | Content ID

try:
    # Get content bandwidth
    api_response = api_instance.content_bw_usage_content_get(content)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_bw_usage_content_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **str**| Content ID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_create_post** {#content_create_post}
> str content_create_post(body, ignore_dupes=ignore_dupes)

Add a new content

This endpoint adds a new content

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
body = estuary_client.UtilContentCreateBody() # UtilContentCreateBody | Content
ignore_dupes = 'ignore_dupes_example' # str | Ignore Dupes (optional)

try:
    # Add a new content
    api_response = api_instance.content_create_post(body, ignore_dupes=ignore_dupes)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_create_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UtilContentCreateBody**](UtilContentCreateBody.md)| Content | 
 **ignore_dupes** | **str**| Ignore Dupes | [optional] 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_deals_get** {#content_deals_get}
> str content_deals_get(limit=limit, offset=offset)

Content with deals

This endpoint lists all content with deals

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
limit = 56 # int | Limit (optional)
offset = 56 # int | Offset (optional)

try:
    # Content with deals
    api_response = api_instance.content_deals_get(limit=limit, offset=offset)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_deals_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_ensure_replication_datacid_get** {#content_ensure_replication_datacid_get}
> str content_ensure_replication_datacid_get(datacid)

Ensure Replication

This endpoint ensures that the content is replicated to the specified number of providers

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
datacid = 'datacid_example' # str | Data CID

try:
    # Ensure Replication
    api_response = api_instance.content_ensure_replication_datacid_get(datacid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_ensure_replication_datacid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datacid** | **str**| Data CID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_failures_content_get** {#content_failures_content_get}
> str content_failures_content_get(content)

List all failures for a content

This endpoint returns all failures for a content

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
content = 'content_example' # str | Content ID

try:
    # List all failures for a content
    api_response = api_instance.content_failures_content_get(content)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_failures_content_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **str**| Content ID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_id_get** {#content_id_get}
> str content_id_get(id)

Content

This endpoint returns a content by its ID

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
id = 56 # int | Content ID

try:
    # Content
    api_response = api_instance.content_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Content ID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_importdeal_post** {#content_importdeal_post}
> str content_importdeal_post(body)

Import a deal

This endpoint imports a deal into the shuttle.

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
body = estuary_client.MainImportDealBody() # MainImportDealBody | Import a deal

try:
    # Import a deal
    api_response = api_instance.content_importdeal_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_importdeal_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainImportDealBody**](MainImportDealBody.md)| Import a deal | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_list_get** {#content_list_get}
> str content_list_get()

List all pinned content

This endpoint lists all content

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))

try:
    # List all pinned content
    api_response = api_instance.content_list_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_list_get: %s\n" % e)
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

## **content_read_cont_get** {#content_read_cont_get}
> str content_read_cont_get(cont)

Read content

This endpoint reads content from the blockstore

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
cont = 'cont_example' # str | CID

try:
    # Read content
    api_response = api_instance.content_read_cont_get(cont)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_read_cont_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cont** | **str**| CID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_staging_zones_get** {#content_staging_zones_get}
> str content_staging_zones_get()

Get staging zone for user

This endpoint is used to get staging zone for user.

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))

try:
    # Get staging zone for user
    api_response = api_instance.content_staging_zones_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_staging_zones_get: %s\n" % e)
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

## **content_stats_get** {#content_stats_get}
> str content_stats_get(limit, offset)

Get content statistics

This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
limit = 'limit_example' # str | limit
offset = 'offset_example' # str | offset

try:
    # Get content statistics
    api_response = api_instance.content_stats_get(limit, offset)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_stats_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **str**| limit | 
 **offset** | **str**| offset | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **content_status_id_get** {#content_status_id_get}
> str content_status_id_get(id)

Content Status

This endpoint returns the status of a content

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
api_instance = estuary_client.ContentApi(estuary_client.ApiClient(configuration))
id = 56 # int | Content ID

try:
    # Content Status
    api_response = api_instance.content_status_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ContentApi->content_status_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Content ID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

