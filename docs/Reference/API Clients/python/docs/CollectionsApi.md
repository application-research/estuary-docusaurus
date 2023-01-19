# estuary_client.CollectionsApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collections_coluuid_commit_post**](CollectionsApi.md#collections_coluuid_commit_post) | **POST** /collections/{coluuid}/commit | Produce a CID of the collection contents
[**collections_coluuid_contents_delete**](CollectionsApi.md#collections_coluuid_contents_delete) | **DELETE** /collections/{coluuid}/contents | Deletes a content from a collection
[**collections_coluuid_delete**](CollectionsApi.md#collections_coluuid_delete) | **DELETE** /collections/{coluuid} | Deletes a collection
[**collections_coluuid_get**](CollectionsApi.md#collections_coluuid_get) | **GET** /collections/{coluuid} | Get contents in a collection
[**collections_coluuid_post**](CollectionsApi.md#collections_coluuid_post) | **POST** /collections/{coluuid} | Add contents to a collection
[**collections_fs_add_post**](CollectionsApi.md#collections_fs_add_post) | **POST** /collections/fs/add | Add a file to a collection
[**collections_get**](CollectionsApi.md#collections_get) | **GET** /collections/ | List all collections
[**collections_post**](CollectionsApi.md#collections_post) | **POST** /collections/ | Create a new collection

## **collections_coluuid_commit_post** {#collections_coluuid_commit_post}
> str collections_coluuid_commit_post(coluuid)

Produce a CID of the collection contents

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))
coluuid = 'coluuid_example' # str | coluuid

try:
    # Produce a CID of the collection contents
    api_response = api_instance.collections_coluuid_commit_post(coluuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_coluuid_commit_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **str**| coluuid | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collections_coluuid_contents_delete** {#collections_coluuid_contents_delete}
> str collections_coluuid_contents_delete(body, coluuid)

Deletes a content from a collection

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))
body = estuary_client.ApiDeleteContentFromCollectionBody() # ApiDeleteContentFromCollectionBody | Variable to use when filtering for files (must be either 'path' or 'content_id')
coluuid = 'coluuid_example' # str | Collection ID

try:
    # Deletes a content from a collection
    api_response = api_instance.collections_coluuid_contents_delete(body, coluuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_coluuid_contents_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApiDeleteContentFromCollectionBody**](ApiDeleteContentFromCollectionBody.md)| Variable to use when filtering for files (must be either &#x27;path&#x27; or &#x27;content_id&#x27;) | 
 **coluuid** | **str**| Collection ID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collections_coluuid_delete** {#collections_coluuid_delete}
> str collections_coluuid_delete(coluuid)

Deletes a collection

This endpoint is used to delete an existing collection.

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))
coluuid = 'coluuid_example' # str | Collection ID

try:
    # Deletes a collection
    api_response = api_instance.collections_coluuid_delete(coluuid)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_coluuid_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **str**| Collection ID | 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collections_coluuid_get** {#collections_coluuid_get}
> list[CollectionsCollectionListResponse] collections_coluuid_get(coluuid, dir=dir)

Get contents in a collection

This endpoint is used to get contents in a collection. If no colpath query param is passed

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))
coluuid = 'coluuid_example' # str | coluuid
dir = 'dir_example' # str | Directory (optional)

try:
    # Get contents in a collection
    api_response = api_instance.collections_coluuid_get(coluuid, dir=dir)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_coluuid_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **str**| coluuid | 
 **dir** | **str**| Directory | [optional] 

### Return type

[**list[CollectionsCollectionListResponse]**](CollectionsCollectionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collections_coluuid_post** {#collections_coluuid_post}
> str collections_coluuid_post(body, coluuid, dir=dir, overwrite=overwrite)

Add contents to a collection

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))
body = [56] # list[int] | Content IDs to add to collection
coluuid = 'coluuid_example' # str | Collection UUID
dir = 'dir_example' # str | Directory (optional)
overwrite = 'overwrite_example' # str | Overwrite conflicting files (optional)

try:
    # Add contents to a collection
    api_response = api_instance.collections_coluuid_post(body, coluuid, dir=dir, overwrite=overwrite)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_coluuid_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**list[int]**](int.md)| Content IDs to add to collection | 
 **coluuid** | **str**| Collection UUID | 
 **dir** | **str**| Directory | [optional] 
 **overwrite** | **str**| Overwrite conflicting files | [optional] 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collections_fs_add_post** {#collections_fs_add_post}
> str collections_fs_add_post(coluuid, content, dir=dir, overwrite=overwrite)

Add a file to a collection

This endpoint adds a file to a collection

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))
coluuid = 'coluuid_example' # str | Collection ID
content = 'content_example' # str | Content
dir = 'dir_example' # str | Directory inside collection (optional)
overwrite = 'overwrite_example' # str | Overwrite file if already exists in path (optional)

try:
    # Add a file to a collection
    api_response = api_instance.collections_fs_add_post(coluuid, content, dir=dir, overwrite=overwrite)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_fs_add_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **str**| Collection ID | 
 **content** | **str**| Content | 
 **dir** | **str**| Directory inside collection | [optional] 
 **overwrite** | **str**| Overwrite file if already exists in path | [optional] 

### Return type

**str**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collections_get** {#collections_get}
> list[CollectionsCollection] collections_get()

List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))

try:
    # List all collections
    api_response = api_instance.collections_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[CollectionsCollection]**](CollectionsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collections_post** {#collections_post}
> CollectionsCollection collections_post(body)

Create a new collection

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

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
api_instance = estuary_client.CollectionsApi(estuary_client.ApiClient(configuration))
body = estuary_client.ApiCreateCollectionBody() # ApiCreateCollectionBody | Collection name and description

try:
    # Create a new collection
    api_response = api_instance.collections_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->collections_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApiCreateCollectionBody**](ApiCreateCollectionBody.md)| Collection name and description | 

### Return type

[**CollectionsCollection**](CollectionsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

