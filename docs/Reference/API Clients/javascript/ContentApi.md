# EstuaryClient.ContentApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentAddCarPost**](ContentApi.md#contentAddCarPost) | **POST** /content/add-car | Add Car object
[**contentAddIpfsPost**](ContentApi.md#contentAddIpfsPost) | **POST** /content/add-ipfs | Add IPFS object
[**contentAddPost**](ContentApi.md#contentAddPost) | **POST** /content/add | Add new content
[**contentAggregatedContentGet**](ContentApi.md#contentAggregatedContentGet) | **GET** /content/aggregated/{content} | Get aggregated content stats
[**contentAllDealsGet**](ContentApi.md#contentAllDealsGet) | **GET** /content/all-deals | Get all deals for a user
[**contentBwUsageContentGet**](ContentApi.md#contentBwUsageContentGet) | **GET** /content/bw-usage/{content} | Get content bandwidth
[**contentCreatePost**](ContentApi.md#contentCreatePost) | **POST** /content/create | Add a new content
[**contentDealsGet**](ContentApi.md#contentDealsGet) | **GET** /content/deals | Content with deals
[**contentEnsureReplicationDatacidGet**](ContentApi.md#contentEnsureReplicationDatacidGet) | **GET** /content/ensure-replication/{datacid} | Ensure Replication
[**contentFailuresContentGet**](ContentApi.md#contentFailuresContentGet) | **GET** /content/failures/{content} | List all failures for a content
[**contentIdGet**](ContentApi.md#contentIdGet) | **GET** /content/{id} | Content
[**contentImportdealPost**](ContentApi.md#contentImportdealPost) | **POST** /content/importdeal | Import a deal
[**contentListGet**](ContentApi.md#contentListGet) | **GET** /content/list | List all pinned content
[**contentReadContGet**](ContentApi.md#contentReadContGet) | **GET** /content/read/{cont} | Read content
[**contentStagingZonesGet**](ContentApi.md#contentStagingZonesGet) | **GET** /content/staging-zones | Get staging zone for user
[**contentStatsGet**](ContentApi.md#contentStatsGet) | **GET** /content/stats | Get content statistics
[**contentStatusIdGet**](ContentApi.md#contentStatusIdGet) | **GET** /content/status/{id} | Content Status


<a name="contentAddCarPost"></a>
# **contentAddCarPost**
> contentAddCarPost(body, opts)

Add Car object

This endpoint is used to add a car object to the network. The object can be a file or a directory.

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var body = "body_example"; // String | Car

var opts = { 
  'ignoreDupes': "ignoreDupes_example", // String | Ignore Dupes
  'filename': "filename_example" // String | Filename
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentAddCarPost(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| Car | 
 **ignoreDupes** | **String**| Ignore Dupes | [optional] 
 **filename** | **String**| Filename | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentAddIpfsPost"></a>
# **contentAddIpfsPost**
> contentAddIpfsPost(body, opts)

Add IPFS object

This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var body = new EstuaryClient.UtilContentAddIpfsBody(); // UtilContentAddIpfsBody | IPFS Body

var opts = { 
  'ignoreDupes': "ignoreDupes_example" // String | Ignore Dupes
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentAddIpfsPost(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UtilContentAddIpfsBody**](UtilContentAddIpfsBody.md)| IPFS Body | 
 **ignoreDupes** | **String**| Ignore Dupes | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentAddPost"></a>
# **contentAddPost**
> UtilContentAddResponse contentAddPost(data, opts)

Add new content

This endpoint is used to upload new content.

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var data = "/path/to/file.txt"; // File | File to upload

var opts = { 
  'filename': "filename_example", // String | Filenam to use for upload
  'coluuid': "coluuid_example", // String | Collection UUID
  'replication': 56, // Number | Replication value
  'ignoreDupes': "ignoreDupes_example", // String | Ignore Dupes true/false
  'lazyProvide': "lazyProvide_example", // String | Lazy Provide true/false
  'dir': "dir_example" // String | Directory
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentAddPost(data, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **File**| File to upload | 
 **filename** | **String**| Filenam to use for upload | [optional] 
 **coluuid** | **String**| Collection UUID | [optional] 
 **replication** | **Number**| Replication value | [optional] 
 **ignoreDupes** | **String**| Ignore Dupes true/false | [optional] 
 **lazyProvide** | **String**| Lazy Provide true/false | [optional] 
 **dir** | **String**| Directory | [optional] 

### Return type

[**UtilContentAddResponse**](UtilContentAddResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="contentAggregatedContentGet"></a>
# **contentAggregatedContentGet**
> 'String' contentAggregatedContentGet(content)

Get aggregated content stats

This endpoint returns aggregated content stats

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var content = "content_example"; // String | Content ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentAggregatedContentGet(content, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **String**| Content ID | 

### Return type

**'String'**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentAllDealsGet"></a>
# **contentAllDealsGet**
> contentAllDealsGet(begin, duration, all)

Get all deals for a user

This endpoint is used to get all deals for a user

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var begin = "begin_example"; // String | Begin

var duration = "duration_example"; // String | Duration

var all = "all_example"; // String | All


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentAllDealsGet(begin, duration, all, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **begin** | **String**| Begin | 
 **duration** | **String**| Duration | 
 **all** | **String**| All | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentBwUsageContentGet"></a>
# **contentBwUsageContentGet**
> contentBwUsageContentGet(content)

Get content bandwidth

This endpoint returns content bandwidth

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var content = "content_example"; // String | Content ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentBwUsageContentGet(content, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **String**| Content ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentCreatePost"></a>
# **contentCreatePost**
> contentCreatePost(req, opts)

Add a new content

This endpoint adds a new content

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var req = new EstuaryClient.UtilContentCreateBody(); // UtilContentCreateBody | Content

var opts = { 
  'ignoreDupes': "ignoreDupes_example" // String | Ignore Dupes
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentCreatePost(req, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **req** | [**UtilContentCreateBody**](UtilContentCreateBody.md)| Content | 
 **ignoreDupes** | **String**| Ignore Dupes | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentDealsGet"></a>
# **contentDealsGet**
> contentDealsGet(opts)

Content with deals

This endpoint lists all content with deals

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var opts = { 
  'limit': 56, // Number | Limit
  'offset': 56 // Number | Offset
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentDealsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limit | [optional] 
 **offset** | **Number**| Offset | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentEnsureReplicationDatacidGet"></a>
# **contentEnsureReplicationDatacidGet**
> contentEnsureReplicationDatacidGet(datacid)

Ensure Replication

This endpoint ensures that the content is replicated to the specified number of providers

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var datacid = "datacid_example"; // String | Data CID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentEnsureReplicationDatacidGet(datacid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datacid** | **String**| Data CID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentFailuresContentGet"></a>
# **contentFailuresContentGet**
> 'String' contentFailuresContentGet(content)

List all failures for a content

This endpoint returns all failures for a content

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var content = "content_example"; // String | Content ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentFailuresContentGet(content, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **String**| Content ID | 

### Return type

**'String'**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentIdGet"></a>
# **contentIdGet**
> contentIdGet(id)

Content

This endpoint returns a content by its ID

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var id = 56; // Number | Content ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Content ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentImportdealPost"></a>
# **contentImportdealPost**
> contentImportdealPost(body)

Import a deal

This endpoint imports a deal into the shuttle.

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var body = new EstuaryClient.MainImportDealBody(); // MainImportDealBody | Import a deal


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentImportdealPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainImportDealBody**](MainImportDealBody.md)| Import a deal | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentListGet"></a>
# **contentListGet**
> ['String'] contentListGet()

List all pinned content

This endpoint lists all content

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentListGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentReadContGet"></a>
# **contentReadContGet**
> contentReadContGet(cont)

Read content

This endpoint reads content from the blockstore

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var cont = "cont_example"; // String | CID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentReadContGet(cont, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cont** | **String**| CID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentStagingZonesGet"></a>
# **contentStagingZonesGet**
> contentStagingZonesGet()

Get staging zone for user

This endpoint is used to get staging zone for user.

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentStagingZonesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentStatsGet"></a>
# **contentStatsGet**
> contentStatsGet(limit, offset)

Get content statistics

This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var limit = "limit_example"; // String | limit

var offset = "offset_example"; // String | offset


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentStatsGet(limit, offset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **String**| limit | 
 **offset** | **String**| offset | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="contentStatusIdGet"></a>
# **contentStatusIdGet**
> contentStatusIdGet(id)

Content Status

This endpoint returns the status of a content

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.ContentApi();

var id = 56; // Number | Content ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contentStatusIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Content ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

