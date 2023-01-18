# PinningApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PinningPinsGet**](PinningApi.md#PinningPinsGet) | **Get** /pinning/pins | List all pin status objects
[**PinningPinsPinidDelete**](PinningApi.md#PinningPinsPinidDelete) | **Delete** /pinning/pins/{pinid} | Delete a pinned object
[**PinningPinsPinidGet**](PinningApi.md#PinningPinsPinidGet) | **Get** /pinning/pins/{pinid} | Get a pin status object
[**PinningPinsPinidPost**](PinningApi.md#PinningPinsPinidPost) | **Post** /pinning/pins/{pinid} | Replace a pinned object
[**PinningPinsPost**](PinningApi.md#PinningPinsPost) | **Post** /pinning/pins | Add and pin object

## **PinningPinsGet** {#PinningPinsGet}
> TypesIpfsListPinStatusResponse PinningPinsGet(ctx, )
List all pin status objects

This endpoint lists all pin status objects

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**TypesIpfsListPinStatusResponse**](types.IpfsListPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PinningPinsPinidDelete** {#PinningPinsPinidDelete}
> PinningPinsPinidDelete(ctx, pinid)
Delete a pinned object

This endpoint deletes a pinned object.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **pinid** | **string**| Pin ID | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PinningPinsPinidGet** {#PinningPinsPinidGet}
> TypesIpfsPinStatusResponse PinningPinsPinidGet(ctx, pinid)
Get a pin status object

This endpoint returns a pin status object.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **pinid** | **string**| cid | 

### Return type

[**TypesIpfsPinStatusResponse**](types.IpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PinningPinsPinidPost** {#PinningPinsPinidPost}
> TypesIpfsPinStatusResponse PinningPinsPinidPost(ctx, body, pinid)
Replace a pinned object

This endpoint replaces a pinned object.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TypesIpfsPin**](TypesIpfsPin.md)| New pin | 
  **pinid** | **string**| Pin ID to be replaced | 

### Return type

[**TypesIpfsPinStatusResponse**](types.IpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PinningPinsPost** {#PinningPinsPost}
> TypesIpfsPinStatusResponse PinningPinsPost(ctx, body, optional)
Add and pin object

This endpoint adds a pin to the IPFS daemon.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**TypesIpfsPin**](TypesIpfsPin.md)| Pin Body {cid:cid, name:name} | 
 **optional** | ***PinningApiPinningPinsPostOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a PinningApiPinningPinsPostOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ignoreDupes** | **optional.**| Ignore Dupes | 
 **overwrite** | **optional.**| Overwrite conflicting files in collections | 

### Return type

[**TypesIpfsPinStatusResponse**](types.IpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

