# NetApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AdminMinersGet**](NetApi.md#AdminMinersGet) | **Get** /admin/miners/ | Get all miners
[**PublicMinersFailuresMinerGet**](NetApi.md#PublicMinersFailuresMinerGet) | **Get** /public/miners/failures/{miner} | Get all miners
[**PublicNetAddrsGet**](NetApi.md#PublicNetAddrsGet) | **Get** /public/net/addrs | Net Addrs
[**PublicNetPeersGet**](NetApi.md#PublicNetPeersGet) | **Get** /public/net/peers | Net Peers

## **AdminMinersGet** {#AdminMinersGet}
> ApiMinerResp AdminMinersGet(ctx, )
Get all miners

This endpoint returns all miners. Note: value may be cached

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**ApiMinerResp**](api.minerResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PublicMinersFailuresMinerGet** {#PublicMinersFailuresMinerGet}
> string PublicMinersFailuresMinerGet(ctx, miner)
Get all miners

This endpoint returns all miners

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **miner** | **string**| Filter by miner | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PublicNetAddrsGet** {#PublicNetAddrsGet}
> []string PublicNetAddrsGet(ctx, )
Net Addrs

This endpoint is used to get net addrs

### Required Parameters
This endpoint does not need any parameter.

### Return type

**[]string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PublicNetPeersGet** {#PublicNetPeersGet}
> []string PublicNetPeersGet(ctx, )
Net Peers

This endpoint is used to get net peers

### Required Parameters
This endpoint does not need any parameter.

### Return type

**[]string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

