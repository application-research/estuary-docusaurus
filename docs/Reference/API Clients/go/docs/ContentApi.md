# ContentApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AdminInvitesGet**](ContentApi.md#AdminInvitesGet) | **Get** /admin/invites | Get Estuary invites
[**AdminInvitesPost**](ContentApi.md#AdminInvitesPost) | **Post** /admin/invites | Create an Estuary invite
[**ContentAddCarPost**](ContentApi.md#ContentAddCarPost) | **Post** /content/add-car | Add Car object
[**ContentAddIpfsPost**](ContentApi.md#ContentAddIpfsPost) | **Post** /content/add-ipfs | Add IPFS object
[**ContentAddPost**](ContentApi.md#ContentAddPost) | **Post** /content/add | Add new content
[**ContentAggregatedContentGet**](ContentApi.md#ContentAggregatedContentGet) | **Get** /content/aggregated/{content} | Get aggregated content stats
[**ContentAllDealsGet**](ContentApi.md#ContentAllDealsGet) | **Get** /content/all-deals | Get all deals for a user
[**ContentBwUsageContentGet**](ContentApi.md#ContentBwUsageContentGet) | **Get** /content/bw-usage/{content} | Get content bandwidth
[**ContentCreatePost**](ContentApi.md#ContentCreatePost) | **Post** /content/create | Add a new content
[**ContentDealsGet**](ContentApi.md#ContentDealsGet) | **Get** /content/deals | Content with deals
[**ContentEnsureReplicationDatacidGet**](ContentApi.md#ContentEnsureReplicationDatacidGet) | **Get** /content/ensure-replication/{datacid} | Ensure Replication
[**ContentFailuresContentGet**](ContentApi.md#ContentFailuresContentGet) | **Get** /content/failures/{content} | List all failures for a content
[**ContentIdGet**](ContentApi.md#ContentIdGet) | **Get** /content/{id} | Content
[**ContentImportdealPost**](ContentApi.md#ContentImportdealPost) | **Post** /content/importdeal | Import a deal
[**ContentListGet**](ContentApi.md#ContentListGet) | **Get** /content/list | List all pinned content
[**ContentReadContGet**](ContentApi.md#ContentReadContGet) | **Get** /content/read/{cont} | Read content
[**ContentStagingZonesGet**](ContentApi.md#ContentStagingZonesGet) | **Get** /content/staging-zones | Get staging zone for user
[**ContentStatsGet**](ContentApi.md#ContentStatsGet) | **Get** /content/stats | Get content statistics
[**ContentStatusIdGet**](ContentApi.md#ContentStatusIdGet) | **Get** /content/status/{id} | Content Status

## **AdminInvitesGet** {#AdminInvitesGet}
> string AdminInvitesGet(ctx, )
Get Estuary invites

This endpoint is used to list all estuary invites.

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

## **AdminInvitesPost** {#AdminInvitesPost}
> string AdminInvitesPost(ctx, code)
Create an Estuary invite

This endpoint is used to create an estuary invite.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **code** | **string**| Invite code to be created | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentAddCarPost** {#ContentAddCarPost}
> UtilContentAddResponse ContentAddCarPost(ctx, body, optional)
Add Car object

This endpoint is used to add a car object to the network. The object can be a file or a directory.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**string**](string.md)| Car | 
 **optional** | ***ContentApiContentAddCarPostOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContentApiContentAddCarPostOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ignoreDupes** | **optional.**| Ignore Dupes | 
 **filename** | **optional.**| Filename | 

### Return type

[**UtilContentAddResponse**](util.ContentAddResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentAddIpfsPost** {#ContentAddIpfsPost}
> string ContentAddIpfsPost(ctx, body, optional)
Add IPFS object

This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**UtilContentAddIpfsBody**](UtilContentAddIpfsBody.md)| IPFS Body | 
 **optional** | ***ContentApiContentAddIpfsPostOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContentApiContentAddIpfsPostOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ignoreDupes** | **optional.**| Ignore Dupes | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentAddPost** {#ContentAddPost}
> UtilContentAddResponse ContentAddPost(ctx, data, filename, optional)
Add new content

This endpoint is used to upload new content.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **data** | ***os.File*****os.File**|  | 
  **filename** | **string**|  | 
 **optional** | ***ContentApiContentAddPostOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContentApiContentAddPostOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **coluuid** | **optional.**| Collection UUID | 
 **replication** | **optional.**| Replication value | 
 **ignoreDupes** | **optional.**| Ignore Dupes true/false | 
 **lazyProvide** | **optional.**| Lazy Provide true/false | 
 **dir** | **optional.**| Directory | 

### Return type

[**UtilContentAddResponse**](util.ContentAddResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentAggregatedContentGet** {#ContentAggregatedContentGet}
> string ContentAggregatedContentGet(ctx, content)
Get aggregated content stats

This endpoint returns aggregated content stats

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **content** | **string**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentAllDealsGet** {#ContentAllDealsGet}
> string ContentAllDealsGet(ctx, begin, duration, all)
Get all deals for a user

This endpoint is used to get all deals for a user

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **begin** | **string**| Begin | 
  **duration** | **string**| Duration | 
  **all** | **string**| All | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentBwUsageContentGet** {#ContentBwUsageContentGet}
> string ContentBwUsageContentGet(ctx, content)
Get content bandwidth

This endpoint returns content bandwidth

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **content** | **string**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentCreatePost** {#ContentCreatePost}
> string ContentCreatePost(ctx, body, optional)
Add a new content

This endpoint adds a new content

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**UtilContentCreateBody**](UtilContentCreateBody.md)| Content | 
 **optional** | ***ContentApiContentCreatePostOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContentApiContentCreatePostOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ignoreDupes** | **optional.**| Ignore Dupes | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentDealsGet** {#ContentDealsGet}
> string ContentDealsGet(ctx, optional)
Content with deals

This endpoint lists all content with deals

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ContentApiContentDealsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ContentApiContentDealsGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **optional.Int32**| Limit | 
 **offset** | **optional.Int32**| Offset | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentEnsureReplicationDatacidGet** {#ContentEnsureReplicationDatacidGet}
> string ContentEnsureReplicationDatacidGet(ctx, datacid)
Ensure Replication

This endpoint ensures that the content is replicated to the specified number of providers

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **datacid** | **string**| Data CID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentFailuresContentGet** {#ContentFailuresContentGet}
> string ContentFailuresContentGet(ctx, content)
List all failures for a content

This endpoint returns all failures for a content

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **content** | **string**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentIdGet** {#ContentIdGet}
> string ContentIdGet(ctx, id)
Content

This endpoint returns a content by its ID

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **int32**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentImportdealPost** {#ContentImportdealPost}
> string ContentImportdealPost(ctx, body)
Import a deal

This endpoint imports a deal into the shuttle.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**MainImportDealBody**](MainImportDealBody.md)| Import a deal | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentListGet** {#ContentListGet}
> string ContentListGet(ctx, )
List all pinned content

This endpoint lists all content

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

## **ContentReadContGet** {#ContentReadContGet}
> string ContentReadContGet(ctx, cont)
Read content

This endpoint reads content from the blockstore

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cont** | **string**| CID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentStagingZonesGet** {#ContentStagingZonesGet}
> string ContentStagingZonesGet(ctx, )
Get staging zone for user

This endpoint is used to get staging zone for user.

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

## **ContentStatsGet** {#ContentStatsGet}
> string ContentStatsGet(ctx, limit, offset)
Get content statistics

This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a conten

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **limit** | **string**| limit | 
  **offset** | **string**| offset | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **ContentStatusIdGet** {#ContentStatusIdGet}
> string ContentStatusIdGet(ctx, id)
Content Status

This endpoint returns the status of a content

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **int32**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

