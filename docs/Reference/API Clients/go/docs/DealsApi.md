# DealsApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DealEstimatePost**](DealsApi.md#DealEstimatePost) | **Post** /deal/estimate | Estimate the cost of a deal
[**DealInfoDealidGet**](DealsApi.md#DealInfoDealidGet) | **Get** /deal/info/{dealid} | Get Deal Info
[**DealProposalPropcidGet**](DealsApi.md#DealProposalPropcidGet) | **Get** /deal/proposal/{propcid} | Get Proposal
[**DealQueryMinerGet**](DealsApi.md#DealQueryMinerGet) | **Get** /deal/query/{miner} | Query Ask
[**DealStatusByProposalPropcidGet**](DealsApi.md#DealStatusByProposalPropcidGet) | **Get** /deal/status-by-proposal/{propcid} | Get Deal Status by PropCid
[**DealStatusMinerPropcidGet**](DealsApi.md#DealStatusMinerPropcidGet) | **Get** /deal/status/{miner}/{propcid} | Deal Status
[**DealTransferInProgressGet**](DealsApi.md#DealTransferInProgressGet) | **Get** /deal/transfer/in-progress | Transfer In Progress
[**DealTransferStatusPost**](DealsApi.md#DealTransferStatusPost) | **Post** /deal/transfer/status | Transfer Status
[**DealsFailuresGet**](DealsApi.md#DealsFailuresGet) | **Get** /deals/failures | Get storage failures for user
[**DealsMakeMinerPost**](DealsApi.md#DealsMakeMinerPost) | **Post** /deals/make/{miner} | Make Deal
[**DealsStatusDealGet**](DealsApi.md#DealsStatusDealGet) | **Get** /deals/status/{deal} | Get Deal Status
[**PublicDealsFailuresGet**](DealsApi.md#PublicDealsFailuresGet) | **Get** /public/deals/failures | Get storage failures
[**PublicMinersStorageQueryMinerGet**](DealsApi.md#PublicMinersStorageQueryMinerGet) | **Get** /public/miners/storage/query/{miner} | Query Ask

## **DealEstimatePost** {#DealEstimatePost}
> string DealEstimatePost(ctx, body)
Estimate the cost of a deal

This endpoint estimates the cost of a deal

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ApiEstimateDealBody**](ApiEstimateDealBody.md)| The size of the deal in bytes, the replication factor, and the duration of the deal in blocks | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealInfoDealidGet** {#DealInfoDealidGet}
> string DealInfoDealidGet(ctx, dealid)
Get Deal Info

This endpoint returns the deal info for a deal

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **dealid** | **int32**| Deal ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealProposalPropcidGet** {#DealProposalPropcidGet}
> string DealProposalPropcidGet(ctx, propcid)
Get Proposal

This endpoint returns the proposal for a deal

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **propcid** | **string**| Proposal CID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealQueryMinerGet** {#DealQueryMinerGet}
> string DealQueryMinerGet(ctx, miner)
Query Ask

This endpoint returns the ask for a given CID

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **miner** | **string**| CID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealStatusByProposalPropcidGet** {#DealStatusByProposalPropcidGet}
> string DealStatusByProposalPropcidGet(ctx, propcid)
Get Deal Status by PropCid

Get Deal Status by PropCid

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **propcid** | **string**| PropCid | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealStatusMinerPropcidGet** {#DealStatusMinerPropcidGet}
> string DealStatusMinerPropcidGet(ctx, miner, propcid)
Deal Status

This endpoint returns the status of a deal

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **miner** | **string**| Miner | 
  **propcid** | **string**| Proposal CID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealTransferInProgressGet** {#DealTransferInProgressGet}
> string DealTransferInProgressGet(ctx, )
Transfer In Progress

This endpoint returns the in-progress transfers

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

## **DealTransferStatusPost** {#DealTransferStatusPost}
> string DealTransferStatusPost(ctx, body)
Transfer Status

This endpoint returns the status of a transfer

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**ApiChannelIdParam**](ApiChannelIdParam.md)| Channel ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealsFailuresGet** {#DealsFailuresGet}
> string DealsFailuresGet(ctx, )
Get storage failures for user

This endpoint returns a list of storage failures for user

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

## **DealsMakeMinerPost** {#DealsMakeMinerPost}
> string DealsMakeMinerPost(ctx, body, miner)
Make Deal

This endpoint makes a deal for a given content and miner

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**string**](string.md)| Deal Request | 
  **miner** | **string**| Miner | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **DealsStatusDealGet** {#DealsStatusDealGet}
> string DealsStatusDealGet(ctx, deal)
Get Deal Status

This endpoint returns the status of a deal

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **deal** | **int32**| Deal ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **PublicDealsFailuresGet** {#PublicDealsFailuresGet}
> string PublicDealsFailuresGet(ctx, )
Get storage failures

This endpoint returns a list of storage failures

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

## **PublicMinersStorageQueryMinerGet** {#PublicMinersStorageQueryMinerGet}
> string PublicMinersStorageQueryMinerGet(ctx, miner)
Query Ask

This endpoint returns the ask for a given CID

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **miner** | **string**| CID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

