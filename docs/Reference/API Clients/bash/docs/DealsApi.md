# DealsApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**dealEstimatePost**](DealsApi.md#dealEstimatePost) | **POST** /deal/estimate | Estimate the cost of a deal
[**dealInfoDealidGet**](DealsApi.md#dealInfoDealidGet) | **GET** /deal/info/{dealid} | Get Deal Info
[**dealProposalPropcidGet**](DealsApi.md#dealProposalPropcidGet) | **GET** /deal/proposal/{propcid} | Get Proposal
[**dealQueryMinerGet**](DealsApi.md#dealQueryMinerGet) | **GET** /deal/query/{miner} | Query Ask
[**dealStatusByProposalPropcidGet**](DealsApi.md#dealStatusByProposalPropcidGet) | **GET** /deal/status-by-proposal/{propcid} | Get Deal Status by PropCid
[**dealStatusMinerPropcidGet**](DealsApi.md#dealStatusMinerPropcidGet) | **GET** /deal/status/{miner}/{propcid} | Deal Status
[**dealTransferInProgressGet**](DealsApi.md#dealTransferInProgressGet) | **GET** /deal/transfer/in-progress | Transfer In Progress
[**dealsFailuresGet**](DealsApi.md#dealsFailuresGet) | **GET** /deals/failures | Get storage failures for user
[**dealsMakeMinerPost**](DealsApi.md#dealsMakeMinerPost) | **POST** /deals/make/{miner} | Make Deal
[**dealsStatusDealGet**](DealsApi.md#dealsStatusDealGet) | **GET** /deals/status/{deal} | Get Deal Status
[**publicDealsFailuresGet**](DealsApi.md#publicDealsFailuresGet) | **GET** /public/deals/failures | Get storage failures
[**publicMinersStorageQueryMinerGet**](DealsApi.md#publicMinersStorageQueryMinerGet) | **GET** /public/miners/storage/query/{miner} | Query Ask


## **dealEstimatePost**

Estimate the cost of a deal

This endpoint estimates the cost of a deal

### Example
```bash
 dealEstimatePost
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Main.estimateDealBody**](Main.estimateDealBody.md) | The size of the deal in bytes, the replication factor, and the duration of the deal in blocks |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **dealInfoDealidGet**

Get Deal Info

This endpoint returns the deal info for a deal

### Example
```bash
 dealInfoDealidGet dealid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealid** | **integer** | Deal ID |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **dealProposalPropcidGet**

Get Proposal

This endpoint returns the proposal for a deal

### Example
```bash
 dealProposalPropcidGet propcid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **string** | Proposal CID |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **dealQueryMinerGet**

Query Ask

This endpoint returns the ask for a given CID

### Example
```bash
 dealQueryMinerGet miner=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string** | CID |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **dealStatusByProposalPropcidGet**

Get Deal Status by PropCid

Get Deal Status by PropCid

### Example
```bash
 dealStatusByProposalPropcidGet propcid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **string** | PropCid |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **dealStatusMinerPropcidGet**

Deal Status

This endpoint returns the status of a deal

### Example
```bash
 dealStatusMinerPropcidGet miner=value propcid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string** | Miner |
 **propcid** | **string** | Proposal CID |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **dealTransferInProgressGet**

Transfer In Progress

This endpoint returns the in-progress transfers

### Example
```bash
 dealTransferInProgressGet
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

## **dealsFailuresGet**

Get storage failures for user

This endpoint returns a list of storage failures for user

### Example
```bash
 dealsFailuresGet
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

## **dealsMakeMinerPost**

Make Deal

This endpoint makes a deal for a given content and miner

### Example
```bash
 dealsMakeMinerPost miner=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string** | Miner |
 **dealRequest** | **string** | Deal Request |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **dealsStatusDealGet**

Get Deal Status

This endpoint returns the status of a deal

### Example
```bash
 dealsStatusDealGet deal=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deal** | **integer** | Deal ID |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **publicDealsFailuresGet**

Get storage failures

This endpoint returns a list of storage failures

### Example
```bash
 publicDealsFailuresGet
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

## **publicMinersStorageQueryMinerGet**

Query Ask

This endpoint returns the ask for a given CID

### Example
```bash
 publicMinersStorageQueryMinerGet miner=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string** | CID |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

