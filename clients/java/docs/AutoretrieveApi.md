# AutoretrieveApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminAutoretrieveInitPost**](AutoretrieveApi.md#adminAutoretrieveInitPost) | **POST** /admin/autoretrieve/init | Register autoretrieve server
[**adminAutoretrieveListGet**](AutoretrieveApi.md#adminAutoretrieveListGet) | **GET** /admin/autoretrieve/list | List autoretrieve servers
[**autoretrieveHeartbeatPost**](AutoretrieveApi.md#autoretrieveHeartbeatPost) | **POST** /autoretrieve/heartbeat | Marks autoretrieve server as up

<a name="adminAutoretrieveInitPost"></a>
## **adminAutoretrieveInitPost** {#adminAutoretrieveInitPost}
> String adminAutoretrieveInitPost(addresses, pubKey)

Register autoretrieve server

This endpoint registers a new autoretrieve server

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AutoretrieveApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AutoretrieveApi apiInstance = new AutoretrieveApi();
String addresses = "addresses_example"; // String | 
String pubKey = "pubKey_example"; // String | 
try {
    String result = apiInstance.adminAutoretrieveInitPost(addresses, pubKey);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AutoretrieveApi#adminAutoretrieveInitPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | **String**|  |
 **pubKey** | **String**|  |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="adminAutoretrieveListGet"></a>
## **adminAutoretrieveListGet** {#adminAutoretrieveListGet}
> String adminAutoretrieveListGet()

List autoretrieve servers

This endpoint lists all registered autoretrieve servers

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AutoretrieveApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AutoretrieveApi apiInstance = new AutoretrieveApi();
try {
    String result = apiInstance.adminAutoretrieveListGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AutoretrieveApi#adminAutoretrieveListGet");
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

<a name="autoretrieveHeartbeatPost"></a>
## **autoretrieveHeartbeatPost** {#autoretrieveHeartbeatPost}
> String autoretrieveHeartbeatPost(token)

Marks autoretrieve server as up

This endpoint updates the lastConnection field for autoretrieve

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AutoretrieveApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AutoretrieveApi apiInstance = new AutoretrieveApi();
String token = "token_example"; // String | Autoretrieve's auth token
try {
    String result = apiInstance.autoretrieveHeartbeatPost(token);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AutoretrieveApi#autoretrieveHeartbeatPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Autoretrieve&#x27;s auth token |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

