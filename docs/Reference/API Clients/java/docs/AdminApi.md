# AdminApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminMinersGet**](AdminApi.md#adminMinersGet) | **GET** /admin/miners/ | Get all miners
[**adminPeeringPeersDelete**](AdminApi.md#adminPeeringPeersDelete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
[**adminPeeringPeersGet**](AdminApi.md#adminPeeringPeersGet) | **GET** /admin/peering/peers | List all Peering peers
[**adminPeeringPeersPost**](AdminApi.md#adminPeeringPeersPost) | **POST** /admin/peering/peers | Add peers on Peering Service
[**adminPeeringStartPost**](AdminApi.md#adminPeeringStartPost) | **POST** /admin/peering/start | Start Peering
[**adminPeeringStatusGet**](AdminApi.md#adminPeeringStatusGet) | **GET** /admin/peering/status | Check Peering Status
[**adminPeeringStopPost**](AdminApi.md#adminPeeringStopPost) | **POST** /admin/peering/stop | Stop Peering
[**adminSystemConfigGet**](AdminApi.md#adminSystemConfigGet) | **GET** /admin/system/config | Get systems(estuary/shuttle) config
[**adminUsersGet**](AdminApi.md#adminUsersGet) | **GET** /admin/users | Get all users


## **adminMinersGet** {#adminMinersGet}
> ApiMinerResp adminMinersGet()

Get all miners

This endpoint returns all miners. Note: value may be cached

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
try {
    ApiMinerResp result = apiInstance.adminMinersGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminMinersGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiMinerResp**](ApiMinerResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **adminPeeringPeersDelete** {#adminPeeringPeersDelete}
> String adminPeeringPeersDelete(body)

Remove peers on Peering Service

This endpoint can be used to remove a Peer from the Peering Service

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
List<String> body = Arrays.asList("body_example"); // List<String> | Peer ids
try {
    String result = apiInstance.adminPeeringPeersDelete(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminPeeringPeersDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**List&lt;String&gt;**](String.md)| Peer ids |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json


## **adminPeeringPeersGet** {#adminPeeringPeersGet}
> String adminPeeringPeersGet()

List all Peering peers

This endpoint can be used to list all peers on Peering Service

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
try {
    String result = apiInstance.adminPeeringPeersGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminPeeringPeersGet");
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


## **adminPeeringPeersPost** {#adminPeeringPeersPost}
> String adminPeeringPeersPost(body)

Add peers on Peering Service

This endpoint can be used to add a Peer from the Peering Service

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
List<PeeringPeeringPeer> body = Arrays.asList(new PeeringPeeringPeer()); // List<PeeringPeeringPeer> | Peering Peer array
try {
    String result = apiInstance.adminPeeringPeersPost(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminPeeringPeersPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**List&lt;PeeringPeeringPeer&gt;**](PeeringPeeringPeer.md)| Peering Peer array |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json


## **adminPeeringStartPost** {#adminPeeringStartPost}
> String adminPeeringStartPost()

Start Peering

This endpoint can be used to start the Peering Service

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
try {
    String result = apiInstance.adminPeeringStartPost();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminPeeringStartPost");
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


## **adminPeeringStatusGet** {#adminPeeringStatusGet}
> String adminPeeringStatusGet()

Check Peering Status

This endpoint can be used to check the Peering status

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
try {
    String result = apiInstance.adminPeeringStatusGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminPeeringStatusGet");
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


## **adminPeeringStopPost** {#adminPeeringStopPost}
> String adminPeeringStopPost()

Stop Peering

This endpoint can be used to stop the Peering Service

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
try {
    String result = apiInstance.adminPeeringStopPost();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminPeeringStopPost");
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


## **adminSystemConfigGet** {#adminSystemConfigGet}
> String adminSystemConfigGet()

Get systems(estuary/shuttle) config

This endpoint is used to get system configs.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
try {
    String result = apiInstance.adminSystemConfigGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminSystemConfigGet");
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


## **adminUsersGet** {#adminUsersGet}
> String adminUsersGet()

Get all users

This endpoint is used to get all users.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AdminApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

AdminApi apiInstance = new AdminApi();
try {
    String result = apiInstance.adminUsersGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AdminApi#adminUsersGet");
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

