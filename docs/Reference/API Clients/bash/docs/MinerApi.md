# MinerApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicMinersDealsMinerGet**](MinerApi.md#publicMinersDealsMinerGet) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**publicMinersStatsMinerGet**](MinerApi.md#publicMinersStatsMinerGet) | **GET** /public/miners/stats/{miner} | Get miner stats


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

