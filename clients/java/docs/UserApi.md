# UserApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userApiKeysGet**](UserApi.md#userApiKeysGet) | **GET** /user/api-keys | Get API keys for a user
[**userApiKeysKeyOrHashDelete**](UserApi.md#userApiKeysKeyOrHashDelete) | **DELETE** /user/api-keys/{key_or_hash} | Revoke a User API Key.
[**userApiKeysPost**](UserApi.md#userApiKeysPost) | **POST** /user/api-keys | Create API keys for a user
[**userExportGet**](UserApi.md#userExportGet) | **GET** /user/export | Export user data
[**userStatsGet**](UserApi.md#userStatsGet) | **GET** /user/stats | Get stats for the current user


## **userApiKeysGet** {#userApiKeysGet}
> List&lt;List&lt;MainGetApiKeysResp&gt;&gt; userApiKeysGet()

Get API keys for a user

This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.UserApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

UserApi apiInstance = new UserApi();
try {
    List<List<MainGetApiKeysResp>> result = apiInstance.userApiKeysGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UserApi#userApiKeysGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;List&lt;MainGetApiKeysResp&gt;&gt;**](List.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **userApiKeysKeyOrHashDelete** {#userApiKeysKeyOrHashDelete}
> String userApiKeysKeyOrHashDelete(keyOrHash)

Revoke a User API Key.

This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily used to access all estuary features. This endpoint can be used to revoke the API key that&#x27;s assigned to the user. Revoked API keys are completely deleted and are not recoverable.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.UserApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

UserApi apiInstance = new UserApi();
String keyOrHash = "keyOrHash_example"; // String | Key or Hash
try {
    String result = apiInstance.userApiKeysKeyOrHashDelete(keyOrHash);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UserApi#userApiKeysKeyOrHashDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyOrHash** | **String**| Key or Hash |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **userApiKeysPost** {#userApiKeysPost}
> MainGetApiKeysResp userApiKeysPost(expiry, perms)

Create API keys for a user

This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.UserApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

UserApi apiInstance = new UserApi();
String expiry = "expiry_example"; // String | Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h
String perms = "perms_example"; // String | Permissions -- currently unused
try {
    MainGetApiKeysResp result = apiInstance.userApiKeysPost(expiry, perms);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UserApi#userApiKeysPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expiry** | **String**| Expiration - Expiration - Valid time units are ns, us (or µs),  ms,  s,  m,  h.  for  example  300h | [optional]
 **perms** | **String**| Permissions -- currently unused | [optional]

### Return type

[**MainGetApiKeysResp**](MainGetApiKeysResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


## **userExportGet** {#userExportGet}
> String userExportGet()

Export user data

This endpoint is used to get API keys for a user.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.UserApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

UserApi apiInstance = new UserApi();
try {
    String result = apiInstance.userExportGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UserApi#userExportGet");
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


## **userStatsGet** {#userStatsGet}
> String userStatsGet()

Get stats for the current user

This endpoint is used to geet stats for the current user.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.UserApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

UserApi apiInstance = new UserApi();
try {
    String result = apiInstance.userStatsGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling UserApi#userStatsGet");
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

