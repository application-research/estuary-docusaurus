# PublicApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetCidGet**](PublicApi.md#GetCidGet) | **Get** /get/{cid} | Get Full Content by Cid
[**PublicByCidCidGet**](PublicApi.md#PublicByCidCidGet) | **Get** /public/by-cid/{cid} | Get Content by Cid
[**PublicInfoGet**](PublicApi.md#PublicInfoGet) | **Get** /public/info | Get public node info
[**PublicMetricsDealsOnChainGet**](PublicApi.md#PublicMetricsDealsOnChainGet) | **Get** /public/metrics/deals-on-chain | Get deal metrics
[**PublicMinersDealsMinerGet**](PublicApi.md#PublicMinersDealsMinerGet) | **Get** /public/miners/deals/{miner} | Get all miners deals
[**PublicMinersFailuresMinerGet**](PublicApi.md#PublicMinersFailuresMinerGet) | **Get** /public/miners/failures/{miner} | Get all miners
[**PublicMinersStatsMinerGet**](PublicApi.md#PublicMinersStatsMinerGet) | **Get** /public/miners/stats/{miner} | Get miner stats
[**PublicNetAddrsGet**](PublicApi.md#PublicNetAddrsGet) | **Get** /public/net/addrs | Net Addrs
[**PublicNetPeersGet**](PublicApi.md#PublicNetPeersGet) | **Get** /public/net/peers | Net Peers
[**PublicStatsGet**](PublicApi.md#PublicStatsGet) | **Get** /public/stats | Public stats

## **GetCidGet** {#GetCidGet}
> GetCidGet(ctx, cid)
Get Full Content by Cid

This endpoint returns the content associated with a CID

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cid** | **string**| Cid | 

### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PublicByCidCidGet** {#PublicByCidCidGet}
> string PublicByCidCidGet(ctx, cid)
Get Content by Cid

This endpoint returns the content record associated with a CID

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cid** | **string**| Cid | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PublicInfoGet** {#PublicInfoGet}
> ApiPublicNodeInfo PublicInfoGet(ctx, )
Get public node info

This endpoint returns information about the node

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**ApiPublicNodeInfo**](api.publicNodeInfo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PublicMetricsDealsOnChainGet** {#PublicMetricsDealsOnChainGet}
> string PublicMetricsDealsOnChainGet(ctx, )
Get deal metrics

This endpoint is used to get deal metrics

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

## **PublicMinersDealsMinerGet** {#PublicMinersDealsMinerGet}
> string PublicMinersDealsMinerGet(ctx, miner, optional)
Get all miners deals

This endpoint returns all miners deals

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **miner** | **string**| Filter by miner | 
 **optional** | ***PublicApiPublicMinersDealsMinerGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a PublicApiPublicMinersDealsMinerGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ignoreFailed** | **optional.String**| Ignore Failed | 

### Return type

**string**

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

## **PublicMinersStatsMinerGet** {#PublicMinersStatsMinerGet}
> string PublicMinersStatsMinerGet(ctx, miner)
Get miner stats

This endpoint returns miner stats

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

## **PublicStatsGet** {#PublicStatsGet}
> string PublicStatsGet(ctx, )
Public stats

This endpoint is used to get public stats.

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

