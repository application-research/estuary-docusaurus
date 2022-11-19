# {{classname}}

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AdminAutoretrieveInitPost**](AutoretrieveApi.md#AdminAutoretrieveInitPost) | **Post** /admin/autoretrieve/init | Register autoretrieve server
[**AdminAutoretrieveListGet**](AutoretrieveApi.md#AdminAutoretrieveListGet) | **Get** /admin/autoretrieve/list | List autoretrieve servers
[**AutoretrieveHeartbeatPost**](AutoretrieveApi.md#AutoretrieveHeartbeatPost) | **Post** /autoretrieve/heartbeat | Marks autoretrieve server as up

## **AdminAutoretrieveInitPost** {#AdminAutoretrieveInitPost}
> string AdminAutoretrieveInitPost(ctx, addresses, pubKey)
Register autoretrieve server

This endpoint registers a new autoretrieve server

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **addresses** | **string**|  | 
  **pubKey** | **string**|  | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **AdminAutoretrieveListGet** {#AdminAutoretrieveListGet}
> string AdminAutoretrieveListGet(ctx, )
List autoretrieve servers

This endpoint lists all registered autoretrieve servers

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

## **AutoretrieveHeartbeatPost** {#AutoretrieveHeartbeatPost}
> string AutoretrieveHeartbeatPost(ctx, token)
Marks autoretrieve server as up

This endpoint updates the lastConnection field for autoretrieve

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **token** | **string**| Autoretrieve&#x27;s auth token | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

