# CollectionsApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CollectionsColuuidCommitPost**](CollectionsApi.md#CollectionsColuuidCommitPost) | **Post** /collections/{coluuid}/commit | Produce a CID of the collection contents
[**CollectionsColuuidContentsDelete**](CollectionsApi.md#CollectionsColuuidContentsDelete) | **Delete** /collections/{coluuid}/contents | Deletes a content from a collection
[**CollectionsColuuidDelete**](CollectionsApi.md#CollectionsColuuidDelete) | **Delete** /collections/{coluuid} | Deletes a collection
[**CollectionsColuuidGet**](CollectionsApi.md#CollectionsColuuidGet) | **Get** /collections/{coluuid} | Get contents in a collection
[**CollectionsColuuidPost**](CollectionsApi.md#CollectionsColuuidPost) | **Post** /collections/{coluuid} | Add contents to a collection
[**CollectionsFsAddPost**](CollectionsApi.md#CollectionsFsAddPost) | **Post** /collections/fs/add | Add a file to a collection
[**CollectionsGet**](CollectionsApi.md#CollectionsGet) | **Get** /collections/ | List all collections
[**CollectionsPost**](CollectionsApi.md#CollectionsPost) | **Post** /collections/ | Create a new collection

## **CollectionsColuuidCommitPost** {#CollectionsColuuidCommitPost}
> string CollectionsColuuidCommitPost(ctx, coluuid)
Produce a CID of the collection contents

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **coluuid** | **string**| coluuid | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **CollectionsColuuidContentsDelete** {#CollectionsColuuidContentsDelete}
> string CollectionsColuuidContentsDelete(ctx, body, coluuid, contentid)
Deletes a content from a collection

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**MainDeleteContentFromCollectionBody**](MainDeleteContentFromCollectionBody.md)| Variable to use when filtering for files (must be either &#x27;path&#x27; or &#x27;content_id&#x27;) | 
  **coluuid** | **string**| Collection ID | 
  **contentid** | **string**| Content ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **CollectionsColuuidDelete** {#CollectionsColuuidDelete}
> string CollectionsColuuidDelete(ctx, coluuid)
Deletes a collection

This endpoint is used to delete an existing collection.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **coluuid** | **string**| Collection ID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **CollectionsColuuidGet** {#CollectionsColuuidGet}
> string CollectionsColuuidGet(ctx, coluuid, optional)
Get contents in a collection

This endpoint is used to get contents in a collection. If no colpath query param is passed

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **coluuid** | **string**| coluuid | 
 **optional** | ***CollectionsApiCollectionsColuuidGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a CollectionsApiCollectionsColuuidGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dir** | **optional.String**| Directory | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **CollectionsColuuidPost** {#CollectionsColuuidPost}
> string CollectionsColuuidPost(ctx, body, coluuid)
Add contents to a collection

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**[]int32**](int32.md)| Content IDs to add to collection | 
  **coluuid** | **string**| Collection UUID | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **CollectionsFsAddPost** {#CollectionsFsAddPost}
> string CollectionsFsAddPost(ctx, coluuid, content, path)
Add a file to a collection

This endpoint adds a file to a collection

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **coluuid** | **string**| Collection ID | 
  **content** | **string**| Content | 
  **path** | **string**| Path to file | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **CollectionsGet** {#CollectionsGet}
> [][]CollectionsCollection CollectionsGet(ctx, )
List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[][]CollectionsCollection**](array.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **CollectionsPost** {#CollectionsPost}
> CollectionsCollection CollectionsPost(ctx, body)
Create a new collection

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**MainCreateCollectionBody**](MainCreateCollectionBody.md)| Collection name and description | 

### Return type

[**CollectionsCollection**](collections.Collection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

