# MetricsApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicMetricsDealsOnChainGet**](MetricsApi.md#publicMetricsDealsOnChainGet) | **GET** /public/metrics/deals-on-chain | Get deal metrics


## **publicMetricsDealsOnChainGet** {#publicMetricsDealsOnChainGet}
> String publicMetricsDealsOnChainGet()

Get deal metrics

This endpoint is used to get deal metrics

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.MetricsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

MetricsApi apiInstance = new MetricsApi();
try {
    String result = apiInstance.publicMetricsDealsOnChainGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MetricsApi#publicMetricsDealsOnChainGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

