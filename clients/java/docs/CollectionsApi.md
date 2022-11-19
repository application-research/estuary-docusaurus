# CollectionsApi

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
> String collectionsColuuidCommitPost(coluuid)

Produce a CID of the collection contents

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
String coluuid = "coluuid_example"; // String | coluuid
try {
    String result = apiInstance.collectionsColuuidCommitPost(coluuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsColuuidCommitPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| coluuid |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsColuuidContentsDelete"></a>
## **collectionsColuuidContentsDelete** {#collectionsColuuidContentsDelete}
> String collectionsColuuidContentsDelete(body, coluuid, contentid)

Deletes a content from a collection

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
MainDeleteContentFromCollectionBody body = new MainDeleteContentFromCollectionBody(); // MainDeleteContentFromCollectionBody | Variable to use when filtering for files (must be either 'path' or 'content_id')
String coluuid = "coluuid_example"; // String | Collection ID
String contentid = "contentid_example"; // String | Content ID
try {
    String result = apiInstance.collectionsColuuidContentsDelete(body, coluuid, contentid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsColuuidContentsDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainDeleteContentFromCollectionBody**](MainDeleteContentFromCollectionBody.md)| Variable to use when filtering for files (must be either &#x27;path&#x27; or &#x27;content_id&#x27;) |
 **coluuid** | **String**| Collection ID |
 **contentid** | **String**| Content ID |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="collectionsColuuidDelete"></a>
## **collectionsColuuidDelete** {#collectionsColuuidDelete}
> String collectionsColuuidDelete(coluuid)

Deletes a collection

This endpoint is used to delete an existing collection.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
String coluuid = "coluuid_example"; // String | Collection ID
try {
    String result = apiInstance.collectionsColuuidDelete(coluuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsColuuidDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| Collection ID |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="collectionsColuuidGet"></a>
## **collectionsColuuidGet** {#collectionsColuuidGet}
> String collectionsColuuidGet(coluuid, dir)

Get contents in a collection

This endpoint is used to get contents in a collection. If no colpath query param is passed

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
String coluuid = "coluuid_example"; // String | coluuid
String dir = "dir_example"; // String | Directory
try {
    String result = apiInstance.collectionsColuuidGet(coluuid, dir);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsColuuidGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| coluuid |
 **dir** | **String**| Directory | [optional]

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsColuuidPost"></a>
## **collectionsColuuidPost** {#collectionsColuuidPost}
> String collectionsColuuidPost(body, coluuid)

Add contents to a collection

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
List<Integer> body = Arrays.asList(56); // List<Integer> | Content IDs to add to collection
String coluuid = "coluuid_example"; // String | Collection UUID
try {
    String result = apiInstance.collectionsColuuidPost(body, coluuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsColuuidPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**List&lt;Integer&gt;**](Integer.md)| Content IDs to add to collection |
 **coluuid** | **String**| Collection UUID |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="collectionsFsAddPost"></a>
## **collectionsFsAddPost** {#collectionsFsAddPost}
> String collectionsFsAddPost(coluuid, content, path)

Add a file to a collection

This endpoint adds a file to a collection

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
String coluuid = "coluuid_example"; // String | Collection ID
String content = "content_example"; // String | Content
String path = "path_example"; // String | Path to file
try {
    String result = apiInstance.collectionsFsAddPost(coluuid, content, path);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsFsAddPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **String**| Collection ID |
 **content** | **String**| Content |
 **path** | **String**| Path to file |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="collectionsGet"></a>
## **collectionsGet** {#collectionsGet}
> List&lt;List&lt;CollectionsCollection&gt;&gt; collectionsGet()

List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
try {
    List<List<CollectionsCollection>> result = apiInstance.collectionsGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;List&lt;CollectionsCollection&gt;&gt;**](List.md)

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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CollectionsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure API key authorization: bearerAuth
ApiKeyAuth bearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("bearerAuth");
bearerAuth.setApiKey("YOUR API KEY");
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearerAuth.setApiKeyPrefix("Token");

CollectionsApi apiInstance = new CollectionsApi();
MainCreateCollectionBody body = new MainCreateCollectionBody(); // MainCreateCollectionBody | Collection name and description
try {
    CollectionsCollection result = apiInstance.collectionsPost(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CollectionsApi#collectionsPost");
    e.printStackTrace();
}
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

