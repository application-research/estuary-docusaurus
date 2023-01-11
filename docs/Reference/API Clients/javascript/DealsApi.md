# EstuaryClient.DealsApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealEstimatePost**](DealsApi.md#dealEstimatePost) | **POST** /deal/estimate | Estimate the cost of a deal
[**dealInfoDealidGet**](DealsApi.md#dealInfoDealidGet) | **GET** /deal/info/{dealid} | Get Deal Info
[**dealProposalPropcidGet**](DealsApi.md#dealProposalPropcidGet) | **GET** /deal/proposal/{propcid} | Get Proposal
[**dealQueryMinerGet**](DealsApi.md#dealQueryMinerGet) | **GET** /deal/query/{miner} | Query Ask
[**dealStatusByProposalPropcidGet**](DealsApi.md#dealStatusByProposalPropcidGet) | **GET** /deal/status-by-proposal/{propcid} | Get Deal Status by PropCid
[**dealStatusMinerPropcidGet**](DealsApi.md#dealStatusMinerPropcidGet) | **GET** /deal/status/{miner}/{propcid} | Deal Status
[**dealTransferInProgressGet**](DealsApi.md#dealTransferInProgressGet) | **GET** /deal/transfer/in-progress | Transfer In Progress
[**dealsFailuresGet**](DealsApi.md#dealsFailuresGet) | **GET** /deals/failures | Get storage failures for user
[**dealsMakeMinerPost**](DealsApi.md#dealsMakeMinerPost) | **POST** /deals/make/{miner} | Make Deal
[**dealsStatusDealGet**](DealsApi.md#dealsStatusDealGet) | **GET** /deals/status/{deal} | Get Deal Status
[**publicDealsFailuresGet**](DealsApi.md#publicDealsFailuresGet) | **GET** /public/deals/failures | Get storage failures
[**publicMinersStorageQueryMinerGet**](DealsApi.md#publicMinersStorageQueryMinerGet) | **GET** /public/miners/storage/query/{miner} | Query Ask


<a name="dealEstimatePost"></a>
# **dealEstimatePost**
> dealEstimatePost(body)

Estimate the cost of a deal

This endpoint estimates the cost of a deal

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var body = new EstuaryClient.MainEstimateDealBody(); // MainEstimateDealBody | The size of the deal in bytes, the replication factor, and the duration of the deal in blocks


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealEstimatePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainEstimateDealBody**](MainEstimateDealBody.md)| The size of the deal in bytes, the replication factor, and the duration of the deal in blocks | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dealInfoDealidGet"></a>
# **dealInfoDealidGet**
> dealInfoDealidGet(dealid)

Get Deal Info

This endpoint returns the deal info for a deal

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var dealid = 56; // Number | Deal ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealInfoDealidGet(dealid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealid** | **Number**| Deal ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dealProposalPropcidGet"></a>
# **dealProposalPropcidGet**
> dealProposalPropcidGet(propcid)

Get Proposal

This endpoint returns the proposal for a deal

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var propcid = "propcid_example"; // String | Proposal CID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealProposalPropcidGet(propcid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **String**| Proposal CID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dealQueryMinerGet"></a>
# **dealQueryMinerGet**
> dealQueryMinerGet(miner)

Query Ask

This endpoint returns the ask for a given CID

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var miner = "miner_example"; // String | CID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealQueryMinerGet(miner, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| CID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dealStatusByProposalPropcidGet"></a>
# **dealStatusByProposalPropcidGet**
> dealStatusByProposalPropcidGet(propcid)

Get Deal Status by PropCid

Get Deal Status by PropCid

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var propcid = "propcid_example"; // String | PropCid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealStatusByProposalPropcidGet(propcid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **String**| PropCid | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dealStatusMinerPropcidGet"></a>
# **dealStatusMinerPropcidGet**
> dealStatusMinerPropcidGet(miner, propcid)

Deal Status

This endpoint returns the status of a deal

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var miner = "miner_example"; // String | Miner

var propcid = "propcid_example"; // String | Proposal CID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealStatusMinerPropcidGet(miner, propcid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner | 
 **propcid** | **String**| Proposal CID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dealTransferInProgressGet"></a>
# **dealTransferInProgressGet**
> dealTransferInProgressGet()

Transfer In Progress

This endpoint returns the in-progress transfers

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealTransferInProgressGet(callback);
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

<a name="dealsFailuresGet"></a>
# **dealsFailuresGet**
> dealsFailuresGet()

Get storage failures for user

This endpoint returns a list of storage failures for user

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealsFailuresGet(callback);
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

<a name="dealsMakeMinerPost"></a>
# **dealsMakeMinerPost**
> dealsMakeMinerPost(miner, dealRequest)

Make Deal

This endpoint makes a deal for a given content and miner

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var miner = "miner_example"; // String | Miner

var dealRequest = "dealRequest_example"; // String | Deal Request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealsMakeMinerPost(miner, dealRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner | 
 **dealRequest** | **String**| Deal Request | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dealsStatusDealGet"></a>
# **dealsStatusDealGet**
> dealsStatusDealGet(deal)

Get Deal Status

This endpoint returns the status of a deal

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var deal = 56; // Number | Deal ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dealsStatusDealGet(deal, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deal** | **Number**| Deal ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publicDealsFailuresGet"></a>
# **publicDealsFailuresGet**
> publicDealsFailuresGet()

Get storage failures

This endpoint returns a list of storage failures

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.publicDealsFailuresGet(callback);
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

<a name="publicMinersStorageQueryMinerGet"></a>
# **publicMinersStorageQueryMinerGet**
> publicMinersStorageQueryMinerGet(miner)

Query Ask

This endpoint returns the ask for a given CID

### Example
```javascript
var EstuaryClient = require('estuary-client');
var defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

var apiInstance = new EstuaryClient.DealsApi();

var miner = "miner_example"; // String | CID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.publicMinersStorageQueryMinerGet(miner, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| CID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

