# NetApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**netAddrsGet**](NetApi.md#netAddrsGet) | **GET** /net/addrs | Net Addrs
[**publicMinersFailuresMinerGet**](NetApi.md#publicMinersFailuresMinerGet) | **GET** /public/miners/failures/{miner} | Get all miners
[**publicMinersGet**](NetApi.md#publicMinersGet) | **GET** /public/miners | Get all miners
[**publicNetAddrsGet**](NetApi.md#publicNetAddrsGet) | **GET** /public/net/addrs | Net Addrs
[**publicNetPeersGet**](NetApi.md#publicNetPeersGet) | **GET** /public/net/peers | Net Peers

<a name="netAddrsGet"></a>
## **netAddrsGet** {#netAddrsGet}
> String netAddrsGet()

Net Addrs

This endpoint is used to get net addrs

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.NetApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

NetApi apiInstance = new NetApi();
try {
    String result = apiInstance.netAddrsGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling NetApi#netAddrsGet");
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

<a name="publicMinersFailuresMinerGet"></a>
## **publicMinersFailuresMinerGet** {#publicMinersFailuresMinerGet}
> String publicMinersFailuresMinerGet(miner)

Get all miners

This endpoint returns all miners

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.NetApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

NetApi apiInstance = new NetApi();
String miner = "miner_example"; // String | Filter by miner
try {
    String result = apiInstance.publicMinersFailuresMinerGet(miner);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling NetApi#publicMinersFailuresMinerGet");
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

<a name="publicMinersGet"></a>
## **publicMinersGet** {#publicMinersGet}
> String publicMinersGet()

Get all miners

This endpoint returns all miners

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.NetApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

NetApi apiInstance = new NetApi();
try {
    String result = apiInstance.publicMinersGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling NetApi#publicMinersGet");
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

<a name="publicNetAddrsGet"></a>
## **publicNetAddrsGet** {#publicNetAddrsGet}
> List&lt;String&gt; publicNetAddrsGet()

Net Addrs

This endpoint is used to get net addrs

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.NetApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

NetApi apiInstance = new NetApi();
try {
    List<String> result = apiInstance.publicNetAddrsGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling NetApi#publicNetAddrsGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;String&gt;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publicNetPeersGet"></a>
## **publicNetPeersGet** {#publicNetPeersGet}
> List&lt;String&gt; publicNetPeersGet()

Net Peers

This endpoint is used to get net peers

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.NetApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

NetApi apiInstance = new NetApi();
try {
    List<String> result = apiInstance.publicNetPeersGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling NetApi#publicNetPeersGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;String&gt;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

