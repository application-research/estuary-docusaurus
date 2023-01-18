# Swagger\Client\CollectionsApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsColuuidCommitPost**](CollectionsApi.md#collectionscoluuidcommitpost) | **POST** /collections/{coluuid}/commit | Produce a CID of the collection contents
[**collectionsColuuidContentsDelete**](CollectionsApi.md#collectionscoluuidcontentsdelete) | **DELETE** /collections/{coluuid}/contents | Deletes a content from a collection
[**collectionsColuuidDelete**](CollectionsApi.md#collectionscoluuiddelete) | **DELETE** /collections/{coluuid} | Deletes a collection
[**collectionsColuuidGet**](CollectionsApi.md#collectionscoluuidget) | **GET** /collections/{coluuid} | Get contents in a collection
[**collectionsColuuidPost**](CollectionsApi.md#collectionscoluuidpost) | **POST** /collections/{coluuid} | Add contents to a collection
[**collectionsFsAddPost**](CollectionsApi.md#collectionsfsaddpost) | **POST** /collections/fs/add | Add a file to a collection
[**collectionsGet**](CollectionsApi.md#collectionsget) | **GET** /collections/ | List all collections
[**collectionsPost**](CollectionsApi.md#collectionspost) | **POST** /collections/ | Create a new collection

## **collectionsColuuidCommitPost** {#collectionsColuuidCommitPost}
> string collectionsColuuidCommitPost($coluuid)

Produce a CID of the collection contents

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coluuid = "coluuid_example"; // string | coluuid

try {
    $result = $apiInstance->collectionsColuuidCommitPost($coluuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsColuuidCommitPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| coluuid |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **collectionsColuuidContentsDelete** {#collectionsColuuidContentsDelete}
> string collectionsColuuidContentsDelete($body, $coluuid, $contentid)

Deletes a content from a collection

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\MainDeleteContentFromCollectionBody(); // \Swagger\Client\Model\MainDeleteContentFromCollectionBody | Variable to use when filtering for files (must be either 'path' or 'content_id')
$coluuid = "coluuid_example"; // string | Collection ID
$contentid = "contentid_example"; // string | Content ID

try {
    $result = $apiInstance->collectionsColuuidContentsDelete($body, $coluuid, $contentid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsColuuidContentsDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MainDeleteContentFromCollectionBody**](../Model/MainDeleteContentFromCollectionBody.md)| Variable to use when filtering for files (must be either &#x27;path&#x27; or &#x27;content_id&#x27;) |
 **coluuid** | **string**| Collection ID |
 **contentid** | **string**| Content ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **collectionsColuuidDelete** {#collectionsColuuidDelete}
> string collectionsColuuidDelete($coluuid)

Deletes a collection

This endpoint is used to delete an existing collection.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coluuid = "coluuid_example"; // string | Collection ID

try {
    $result = $apiInstance->collectionsColuuidDelete($coluuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsColuuidDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| Collection ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **collectionsColuuidGet** {#collectionsColuuidGet}
> string collectionsColuuidGet($coluuid, $dir)

Get contents in a collection

This endpoint is used to get contents in a collection. If no colpath query param is passed

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coluuid = "coluuid_example"; // string | coluuid
$dir = "dir_example"; // string | Directory

try {
    $result = $apiInstance->collectionsColuuidGet($coluuid, $dir);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsColuuidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| coluuid |
 **dir** | **string**| Directory | [optional]

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **collectionsColuuidPost** {#collectionsColuuidPost}
> string collectionsColuuidPost($body, $coluuid)

Add contents to a collection

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = array(56); // int[] | Content IDs to add to collection
$coluuid = "coluuid_example"; // string | Collection UUID

try {
    $result = $apiInstance->collectionsColuuidPost($body, $coluuid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsColuuidPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**int[]**](../Model/int.md)| Content IDs to add to collection |
 **coluuid** | **string**| Collection UUID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **collectionsFsAddPost** {#collectionsFsAddPost}
> string collectionsFsAddPost($coluuid, $content, $path)

Add a file to a collection

This endpoint adds a file to a collection

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$coluuid = "coluuid_example"; // string | Collection ID
$content = "content_example"; // string | Content
$path = "path_example"; // string | Path to file

try {
    $result = $apiInstance->collectionsFsAddPost($coluuid, $content, $path);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsFsAddPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| Collection ID |
 **content** | **string**| Content |
 **path** | **string**| Path to file |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **collectionsGet** {#collectionsGet}
> \Swagger\Client\Model\CollectionsCollection[][] collectionsGet()

List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->collectionsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\CollectionsCollection[][]**](../Model/array.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **collectionsPost** {#collectionsPost}
> \Swagger\Client\Model\CollectionsCollection collectionsPost($body)

Create a new collection

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\CollectionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\MainCreateCollectionBody(); // \Swagger\Client\Model\MainCreateCollectionBody | Collection name and description

try {
    $result = $apiInstance->collectionsPost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CollectionsApi->collectionsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MainCreateCollectionBody**](../Model/MainCreateCollectionBody.md)| Collection name and description |

### Return type

[**\Swagger\Client\Model\CollectionsCollection**](../Model/CollectionsCollection.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

