# MinerApi

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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MinerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MinerApi apiInstance = new MinerApi();
String miner = "miner_example"; // String | Miner claim message
try {
    ApiClaimMsgResponse result = apiInstance.minerClaimMinerGet(miner);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MinerApi#minerClaimMinerGet");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MinerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MinerApi apiInstance = new MinerApi();
MinerClaimMinerBody body = new MinerClaimMinerBody(); // MinerClaimMinerBody | Claim Miner Body
try {
    ApiClaimResponse result = apiInstance.minerClaimPost(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MinerApi#minerClaimPost");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MinerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MinerApi apiInstance = new MinerApi();
MinerMinerSetInfoParams body = new MinerMinerSetInfoParams(); // MinerMinerSetInfoParams | Miner set info params
String miner = "miner_example"; // String | Miner to set info for
try {
    ApiEmptyResp result = apiInstance.minerSetInfoMinerPut(body, miner);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MinerApi#minerSetInfoMinerPut");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MinerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MinerApi apiInstance = new MinerApi();
MinerSuspendMinerBody body = new MinerSuspendMinerBody(); // MinerSuspendMinerBody | Suspend Miner Body
String miner = "miner_example"; // String | Miner to suspend
try {
    ApiEmptyResp result = apiInstance.minerSuspendMinerPost(body, miner);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MinerApi#minerSuspendMinerPost");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MinerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MinerApi apiInstance = new MinerApi();
String miner = "miner_example"; // String | Miner to unsuspend
try {
    ApiEmptyResp result = apiInstance.minerUnsuspendMinerPut(miner);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MinerApi#minerUnsuspendMinerPut");
    e.printStackTrace();
}
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
> String publicMinersDealsMinerGet(miner, ignoreFailed)

Get all miners deals

This endpoint returns all miners deals

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MinerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MinerApi apiInstance = new MinerApi();
String miner = "miner_example"; // String | Filter by miner
String ignoreFailed = "ignoreFailed_example"; // String | Ignore Failed
try {
    String result = apiInstance.publicMinersDealsMinerGet(miner, ignoreFailed);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MinerApi#publicMinersDealsMinerGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Filter by miner |
 **ignoreFailed** | **String**| Ignore Failed | [optional]

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **publicMinersStatsMinerGet** {#publicMinersStatsMinerGet}
> String publicMinersStatsMinerGet(miner)

Get miner stats

This endpoint returns miner stats

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MinerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MinerApi apiInstance = new MinerApi();
String miner = "miner_example"; // String | Filter by miner
try {
    String result = apiInstance.publicMinersStatsMinerGet(miner);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MinerApi#publicMinersStatsMinerGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Filter by miner |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

