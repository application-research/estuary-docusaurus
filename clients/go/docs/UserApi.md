# \UserApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UserApiKeysGet**](UserApi.md#UserApiKeysGet) | **Get** /user/api-keys | Get API keys for a user
[**UserApiKeysKeyDelete**](UserApi.md#UserApiKeysKeyDelete) | **Delete** /user/api-keys/{key} | Revoke a User API Key.
[**UserApiKeysPost**](UserApi.md#UserApiKeysPost) | **Post** /user/api-keys | Create API keys for a user
[**UserExportGet**](UserApi.md#UserExportGet) | **Get** /user/export | Export user data
[**UserStatsGet**](UserApi.md#UserStatsGet) | **Get** /user/stats | Create API keys for a user


# **UserApiKeysGet**
> []MainGetApiKeysResp UserApiKeysGet(ctx, )
Get API keys for a user

This endpoint is used to get API keys for a user. In estuary, each user can be given multiple API keys (tokens). This endpoint can be used to retrieve all available API keys for a given user.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]MainGetApiKeysResp**](main.getApiKeysResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserApiKeysKeyDelete**
> UserApiKeysKeyDelete(ctx, key)
Revoke a User API Key.

This endpoint is used to revoke a user API key. In estuary, every user is assigned with an API key, this API key is generated and issued for each user and is primarily use to access all estuary features. This endpoint can be used to revoke the API key thats assigned to the user.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **key** | **string**| Key | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserApiKeysPost**
> MainGetApiKeysResp UserApiKeysPost(ctx, optional)
Create API keys for a user

This endpoint is used to create API keys for a user. In estuary, each user is given an API key to access all features.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***UserApiUserApiKeysPostOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a UserApiUserApiKeysPostOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expiry** | **optional.String**| Expiration - Expiration - Valid time units are ns, us (or µs), ms, s, m, h. for example 300h | 
 **perms** | **optional.String**| Permissions -- currently unused | 

### Return type

[**MainGetApiKeysResp**](main.getApiKeysResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserExportGet**
> string UserExportGet(ctx, )
Export user data

This endpoint is used to get API keys for a user.

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UserStatsGet**
> MainUserStatsResponse UserStatsGet(ctx, )
Create API keys for a user

This endpoint is used to create API keys for a user.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**MainUserStatsResponse**](main.userStatsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

