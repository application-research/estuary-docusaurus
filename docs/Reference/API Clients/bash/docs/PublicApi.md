# PublicApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicByCidCidGet**](PublicApi.md#publicByCidCidGet) | **GET** /public/by-cid/{cid} | Get Content by Cid
[**publicInfoGet**](PublicApi.md#publicInfoGet) | **GET** /public/info | Get public node info
[**publicMetricsDealsOnChainGet**](PublicApi.md#publicMetricsDealsOnChainGet) | **GET** /public/metrics/deals-on-chain | Get deal metrics
[**publicMinersDealsMinerGet**](PublicApi.md#publicMinersDealsMinerGet) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**publicMinersFailuresMinerGet**](PublicApi.md#publicMinersFailuresMinerGet) | **GET** /public/miners/failures/{miner} | Get all miners
[**publicMinersGet**](PublicApi.md#publicMinersGet) | **GET** /public/miners | Get all miners
[**publicMinersStatsMinerGet**](PublicApi.md#publicMinersStatsMinerGet) | **GET** /public/miners/stats/{miner} | Get miner stats
[**publicNetAddrsGet**](PublicApi.md#publicNetAddrsGet) | **GET** /public/net/addrs | Net Addrs
[**publicNetPeersGet**](PublicApi.md#publicNetPeersGet) | **GET** /public/net/peers | Net Peers
[**publicStatsGet**](PublicApi.md#publicStatsGet) | **GET** /public/stats | Public stats


## **publicByCidCidGet**

Get Content by Cid

This endpoint returns the content associated with a CID

### Example
```bash
 publicByCidCidGet cid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **string** | Cid |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicInfoGet**

Get public node info

This endpoint returns information about the node

### Example
```bash
 publicInfoGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicMetricsDealsOnChainGet**

Get deal metrics

This endpoint is used to get deal metrics

### Example
```bash
 publicMetricsDealsOnChainGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicMinersDealsMinerGet**

Get all miners deals

This endpoint returns all miners deals

### Example
```bash
 publicMinersDealsMinerGet miner=value  ignore-failed=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string** | Filter by miner |
 **ignoreFailed** | **string** | Ignore Failed | [optional]

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicMinersFailuresMinerGet**

Get all miners

This endpoint returns all miners

### Example
```bash
 publicMinersFailuresMinerGet miner=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string** | Filter by miner |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicMinersGet**

Get all miners

This endpoint returns all miners

### Example
```bash
 publicMinersGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicMinersStatsMinerGet**

Get miner stats

This endpoint returns miner stats

### Example
```bash
 publicMinersStatsMinerGet miner=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string** | Filter by miner |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicNetAddrsGet**

Net Addrs

This endpoint is used to get net addrs

### Example
```bash
 publicNetAddrsGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

**array[string]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicNetPeersGet**

Net Peers

This endpoint is used to get net peers

### Example
```bash
 publicNetPeersGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

**array[string]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicStatsGet**

Public stats

This endpoint is used to get public stats.

### Example
```bash
 publicStatsGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

