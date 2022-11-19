# EstuaryClient.CollectionsApi

All URIs are relative to *//api.estuary.tech/*

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

<a name="collectionsColuuidCommitPost"></a>
## **collectionsColuuidCommitPost** {#collectionsColuuidCommitPost}
> &#x27;String&#x27; collectionsColuuidCommitPost(coluuid)

Produce a CID of the collection contents

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
let coluuid = "coluuid_example"; // String | coluuid

apiInstance.collectionsColuuidCommitPost(coluuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| coluuid | 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsColuuidContentsDelete"></a>
## **collectionsColuuidContentsDelete** {#collectionsColuuidContentsDelete}
> &#x27;String&#x27; collectionsColuuidContentsDelete(body, coluuid, contentid)

Deletes a content from a collection

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
let body = new EstuaryClient.MainDeleteContentFromCollectionBody(); // MainDeleteContentFromCollectionBody | Variable to use when filtering for files (must be either 'path' or 'content_id')
let coluuid = "coluuid_example"; // String | Collection ID
let contentid = "contentid_example"; // String | Content ID

apiInstance.collectionsColuuidContentsDelete(body, coluuid, contentid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainDeleteContentFromCollectionBody**](MainDeleteContentFromCollectionBody.md)| Variable to use when filtering for files (must be either &#x27;path&#x27; or &#x27;content_id&#x27;) | 
 **coluuid** | **String**| Collection ID | 
 **contentid** | **String**| Content ID | 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="collectionsColuuidDelete"></a>
## **collectionsColuuidDelete** {#collectionsColuuidDelete}
> &#x27;String&#x27; collectionsColuuidDelete(coluuid)

Deletes a collection

This endpoint is used to delete an existing collection.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
let coluuid = "coluuid_example"; // String | Collection ID

apiInstance.collectionsColuuidDelete(coluuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| Collection ID | 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="collectionsColuuidGet"></a>
## **collectionsColuuidGet** {#collectionsColuuidGet}
> &#x27;String&#x27; collectionsColuuidGet(coluuid, opts)

Get contents in a collection

This endpoint is used to get contents in a collection. If no colpath query param is passed

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
let coluuid = "coluuid_example"; // String | coluuid
let opts = { 
  'dir': "dir_example" // String | Directory
};
apiInstance.collectionsColuuidGet(coluuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| coluuid | 
 **dir** | **String**| Directory | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsColuuidPost"></a>
## **collectionsColuuidPost** {#collectionsColuuidPost}
> &#x27;String&#x27; collectionsColuuidPost(body, coluuid)

Add contents to a collection

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
let body = [3.4]; // [Number] | Content IDs to add to collection
let coluuid = "coluuid_example"; // String | Collection UUID

apiInstance.collectionsColuuidPost(body, coluuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Number]**](Number.md)| Content IDs to add to collection | 
 **coluuid** | **String**| Collection UUID | 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsFsAddPost"></a>
## **collectionsFsAddPost** {#collectionsFsAddPost}
> &#x27;String&#x27; collectionsFsAddPost(coluuid, content, path)

Add a file to a collection

This endpoint adds a file to a collection

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
let coluuid = "coluuid_example"; // String | Collection ID
let content = "content_example"; // String | Content
let path = "path_example"; // String | Path to file

apiInstance.collectionsFsAddPost(coluuid, content, path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| Collection ID | 
 **content** | **String**| Content | 
 **path** | **String**| Path to file | 

### Return type

**&#x27;String&#x27;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsGet"></a>
## **collectionsGet** {#collectionsGet}
> [[CollectionsCollection]] collectionsGet()

List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
apiInstance.collectionsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[[CollectionsCollection]]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsPost"></a>
## **collectionsPost** {#collectionsPost}
> CollectionsCollection collectionsPost(body)

Create a new collection

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

### Example
```javascript
import {EstuaryClient} from 'estuary-client';
let defaultClient = EstuaryClient.ApiClient.instance;

// Configure API key authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new EstuaryClient.CollectionsApi();
let body = new EstuaryClient.MainCreateCollectionBody(); // MainCreateCollectionBody | Collection name and description

apiInstance.collectionsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainCreateCollectionBody**](MainCreateCollectionBody.md)| Collection name and description | 

### Return type

[**CollectionsCollection**](CollectionsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

