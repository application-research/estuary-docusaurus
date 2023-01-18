# CollectionsApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsColuuidCommitPost**](CollectionsApi.md#collectionsColuuidCommitPost) | **POST** /collections/{coluuid}/commit | Produce a CID of the collection contents
[**collectionsColuuidContentsDelete**](CollectionsApi.md#collectionsColuuidContentsDelete) | **DELETE** /collections/{coluuid}/contents | Deletes a content from a collection
[**collectionsColuuidDelete**](CollectionsApi.md#collectionsColuuidDelete) | **DELETE** /collections/{coluuid} | Deletes a collection
[**collectionsColuuidGet**](CollectionsApi.md#collectionsColuuidGet) | **GET** /collections/{coluuid} | Get contents in a collection
[**collectionsColuuidPost**](CollectionsApi.md#collectionsColuuidPost) | **POST** /collections/{coluuid} | Add contents to a collection
[**collectionsFsAddPost**](CollectionsApi.md#collectionsFsAddPost) | **POST** /collections/fs/add | Add a file to a collection
[**collectionsGet**](CollectionsApi.md#collectionsGet) | **GET** /collections/ | List all collections
[**collectionsPost**](CollectionsApi.md#collectionsPost) | **POST** /collections/ | Create a new collection


## **collectionsColuuidCommitPost**

Produce a CID of the collection contents

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

### Example
```bash
 collectionsColuuidCommitPost coluuid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string** | coluuid |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collectionsColuuidContentsDelete**

Deletes a content from a collection

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

### Example
```bash
 collectionsColuuidContentsDelete coluuid=value contentid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string** | Collection ID |
 **contentid** | **string** | Content ID |
 **body** | [**Main.deleteContentFromCollectionBody**](Main.deleteContentFromCollectionBody.md) | Variable to use when filtering for files (must be either 'path' or 'content_id') |

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collectionsColuuidDelete**

Deletes a collection

This endpoint is used to delete an existing collection.

### Example
```bash
 collectionsColuuidDelete coluuid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string** | Collection ID |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: Not Applicable

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collectionsColuuidGet**

Get contents in a collection

This endpoint is used to get contents in a collection. If no colpath query param is passed

### Example
```bash
 collectionsColuuidGet coluuid=value  dir=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string** | coluuid |
 **dir** | **string** | Directory | [optional]

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collectionsColuuidPost**

Add contents to a collection

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

### Example
```bash
 collectionsColuuidPost coluuid=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string** | coluuid |
 **contentIDs** | **array[integer]** | Content IDs to add to collection |

### Return type

**map[String, string]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collectionsFsAddPost**

Add a file to a collection

This endpoint adds a file to a collection

### Example
```bash
 collectionsFsAddPost  coluuid=value  content=value  path=value
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string** | Collection ID |
 **content** | **string** | Content |
 **path** | **string** | Path to file |

### Return type

(empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collectionsGet**

List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

### Example
```bash
 collectionsGet
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**array[Collections.Collection]**](Collections.Collection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

## **collectionsPost**

Create a new collection

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

### Example
```bash
 collectionsPost
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Main.createCollectionBody**](Main.createCollectionBody.md) | Collection name and description |

### Return type

[**Collections.Collection**](Collections.Collection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not Applicable
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

