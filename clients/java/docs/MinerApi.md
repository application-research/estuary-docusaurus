# MinerApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicMinersDealsMinerGet**](MinerApi.md#publicMinersDealsMinerGet) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**publicMinersStatsMinerGet**](MinerApi.md#publicMinersStatsMinerGet) | **GET** /public/miners/stats/{miner} | Get miner stats

<a name="publicMinersDealsMinerGet"></a>
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

<a name="publicMinersStatsMinerGet"></a>
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

