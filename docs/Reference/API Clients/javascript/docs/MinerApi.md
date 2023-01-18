# EstuaryClient.MinerApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**minerClaimMinerGet**](MinerApi.md#minerClaimMinerGet) | **GET** /miner/claim/{miner} | Get Claim Miner Message
[**minerClaimPost**](MinerApi.md#minerClaimPost) | **POST** /miner/claim | Claim Miner
[**minerSetInfoMinerPut**](MinerApi.md#minerSetInfoMinerPut) | **PUT** /miner/set-info/{miner} | Set Miner Info
[**minerSuspendMinerPost**](MinerApi.md#minerSuspendMinerPost) | **POST** /miner/suspend/{miner} | Suspend Miner
[**minerUnsuspendMinerPut**](MinerApi.md#minerUnsuspendMinerPut) | **PUT** /miner/unsuspend/{miner} | Unuspend Miner
[**publicMinersDealsMinerGet**](MinerApi.md#publicMinersDealsMinerGet) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**publicMinersStatsMinerGet**](MinerApi.md#publicMinersStatsMinerGet) | **GET** /public/miners/stats/{miner} | Get miner stats


## **minerClaimMinerGet** {#minerClaimMinerGet}
> ApiClaimMsgResponse minerClaimMinerGet(miner)

Get Claim Miner Message

This endpoint lets a user get the message in order to claim a miner

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.MinerApi();
let miner = "miner_example"; // String | Miner claim message

apiInstance.minerClaimMinerGet(miner, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner claim message | 

### Return type

[**ApiClaimMsgResponse**](ApiClaimMsgResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **minerClaimPost** {#minerClaimPost}
> ApiClaimResponse minerClaimPost(body)

Claim Miner

This endpoint lets a user claim a miner

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.MinerApi();
let body = new EstuaryClient.MinerClaimMinerBody(); // MinerClaimMinerBody | Claim Miner Body

apiInstance.minerClaimPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## **minerSetInfoMinerPut** {#minerSetInfoMinerPut}
> ApiEmptyResp minerSetInfoMinerPut(body, miner)

Set Miner Info

This endpoint lets a user set miner info.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.MinerApi();
let body = new EstuaryClient.MinerMinerSetInfoParams(); // MinerMinerSetInfoParams | Miner set info params
let miner = "miner_example"; // String | Miner to set info for

apiInstance.minerSetInfoMinerPut(body, miner, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerMinerSetInfoParams**](MinerMinerSetInfoParams.md)| Miner set info params | 
 **miner** | **String**| Miner to set info for | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json


## **minerSuspendMinerPost** {#minerSuspendMinerPost}
> ApiEmptyResp minerSuspendMinerPost(body, miner)

Suspend Miner

This endpoint lets a user suspend a miner.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.MinerApi();
let body = new EstuaryClient.MinerSuspendMinerBody(); // MinerSuspendMinerBody | Suspend Miner Body
let miner = "miner_example"; // String | Miner to suspend

apiInstance.minerSuspendMinerPost(body, miner, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerSuspendMinerBody**](MinerSuspendMinerBody.md)| Suspend Miner Body | 
 **miner** | **String**| Miner to suspend | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json


## **minerUnsuspendMinerPut** {#minerUnsuspendMinerPut}
> ApiEmptyResp minerUnsuspendMinerPut(miner)

Unuspend Miner

This endpoint lets a user unsuspend a miner.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.MinerApi();
let miner = "miner_example"; // String | Miner to unsuspend

apiInstance.minerUnsuspendMinerPut(miner, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner to unsuspend | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **publicMinersDealsMinerGet** {#publicMinersDealsMinerGet}
> &#x27;String&#x27; publicMinersDealsMinerGet(miner, opts)

Get all miners deals

This endpoint returns all miners deals

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.MinerApi();
let miner = "miner_example"; // String | Filter by miner
let opts = { 
  'ignoreFailed': "ignoreFailed_example" // String | Ignore Failed
};
apiInstance.publicMinersDealsMinerGet(miner, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Filter by miner | 
 **ignoreFailed** | **String**| Ignore Failed | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **publicMinersStatsMinerGet** {#publicMinersStatsMinerGet}
> &#x27;String&#x27; publicMinersStatsMinerGet(miner)

Get miner stats

This endpoint returns miner stats

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.MinerApi();
let miner = "miner_example"; // String | Filter by miner

apiInstance.publicMinersStatsMinerGet(miner, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Filter by miner | 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

