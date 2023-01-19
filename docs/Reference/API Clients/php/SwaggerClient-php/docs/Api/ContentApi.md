# Swagger\Client\ContentApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminInvitesCodePost**](ContentApi.md#admininvitescodepost) | **POST** /admin/invites/{code} | Create an Estuary invite
[**adminInvitesGet**](ContentApi.md#admininvitesget) | **GET** /admin/invites | Get Estuary invites
[**contentAddCarPost**](ContentApi.md#contentaddcarpost) | **POST** /content/add-car | Add Car object
[**contentAddIpfsPost**](ContentApi.md#contentaddipfspost) | **POST** /content/add-ipfs | Add IPFS object
[**contentAddPost**](ContentApi.md#contentaddpost) | **POST** /content/add | Add new content
[**contentAggregatedContentGet**](ContentApi.md#contentaggregatedcontentget) | **GET** /content/aggregated/{content} | Get aggregated content stats
[**contentAllDealsGet**](ContentApi.md#contentalldealsget) | **GET** /content/all-deals | Get all deals for a user
[**contentBwUsageContentGet**](ContentApi.md#contentbwusagecontentget) | **GET** /content/bw-usage/{content} | Get content bandwidth
[**contentContentsGet**](ContentApi.md#contentcontentsget) | **GET** /content/contents | Get user contents
[**contentCreatePost**](ContentApi.md#contentcreatepost) | **POST** /content/create | Add a new content
[**contentDealsGet**](ContentApi.md#contentdealsget) | **GET** /content/deals | Content with deals
[**contentEnsureReplicationDatacidGet**](ContentApi.md#contentensurereplicationdatacidget) | **GET** /content/ensure-replication/{datacid} | Ensure Replication
[**contentFailuresContentGet**](ContentApi.md#contentfailurescontentget) | **GET** /content/failures/{content} | List all failures for a content
[**contentIdGet**](ContentApi.md#contentidget) | **GET** /content/{id} | Content
[**contentListGet**](ContentApi.md#contentlistget) | **GET** /content/list | List all pinned content
[**contentStagingZonesGet**](ContentApi.md#contentstagingzonesget) | **GET** /content/staging-zones | Get staging zone for user, excluding its contents
[**contentStagingZonesStagingZoneContentsGet**](ContentApi.md#contentstagingzonesstagingzonecontentsget) | **GET** /content/staging-zones/{staging_zone}/contents | Get contents for a staging zone
[**contentStagingZonesStagingZoneGet**](ContentApi.md#contentstagingzonesstagingzoneget) | **GET** /content/staging-zones/{staging_zone} | Get staging zone without its contents field populated
[**contentStatsGet**](ContentApi.md#contentstatsget) | **GET** /content/stats | Get content statistics
[**contentStatusIdGet**](ContentApi.md#contentstatusidget) | **GET** /content/status/{id} | Content Status

## **adminInvitesCodePost** {#adminInvitesCodePost}
> string adminInvitesCodePost($code)

Create an Estuary invite

This endpoint is used to create an estuary invite.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$code = "code_example"; // string | Invite code to be created

try {
    $result = $apiInstance->adminInvitesCodePost($code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->adminInvitesCodePost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **string**| Invite code to be created |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **adminInvitesGet** {#adminInvitesGet}
> string adminInvitesGet()

Get Estuary invites

This endpoint is used to list all estuary invites.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->adminInvitesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->adminInvitesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentAddCarPost** {#contentAddCarPost}
> \Swagger\Client\Model\UtilContentAddResponse contentAddCarPost($body, $ignore_dupes, $filename)

Add Car object

This endpoint is used to add a car object to the network. The object can be a file or a directory.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = "body_example"; // string | Car
$ignore_dupes = "ignore_dupes_example"; // string | Ignore Dupes
$filename = "filename_example"; // string | Filename

try {
    $result = $apiInstance->contentAddCarPost($body, $ignore_dupes, $filename);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentAddCarPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**string**](../Model/string.md)| Car |
 **ignore_dupes** | **string**| Ignore Dupes | [optional]
 **filename** | **string**| Filename | [optional]

### Return type

[**\Swagger\Client\Model\UtilContentAddResponse**](../Model/UtilContentAddResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentAddIpfsPost** {#contentAddIpfsPost}
> string contentAddIpfsPost($body, $ignore_dupes, $overwrite)

Add IPFS object

This endpoint is used to add an IPFS object to the network. The object can be a file or a directory.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\TypesIpfsPin(); // \Swagger\Client\Model\TypesIpfsPin | IPFS Body
$ignore_dupes = "ignore_dupes_example"; // string | Ignore Dupes
$overwrite = "overwrite_example"; // string | Overwrite conflicting files in collections

try {
    $result = $apiInstance->contentAddIpfsPost($body, $ignore_dupes, $overwrite);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentAddIpfsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\TypesIpfsPin**](../Model/TypesIpfsPin.md)| IPFS Body |
 **ignore_dupes** | **string**| Ignore Dupes | [optional]
 **overwrite** | **string**| Overwrite conflicting files in collections | [optional]

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentAddPost** {#contentAddPost}
> \Swagger\Client\Model\UtilContentAddResponse contentAddPost($data, $filename, $coluuid, $replication, $ignore_dupes, $overwrite, $lazy_provide, $dir)

Add new content

This endpoint is used to upload new content.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$data = "data_example"; // string | 
$filename = "filename_example"; // string | 
$coluuid = "coluuid_example"; // string | Collection UUID
$replication = 56; // int | Replication value
$ignore_dupes = "ignore_dupes_example"; // string | Ignore Dupes true/false
$overwrite = "overwrite_example"; // string | Overwrite files with the same path on same collection
$lazy_provide = "lazy_provide_example"; // string | Lazy Provide true/false
$dir = "dir_example"; // string | Directory

try {
    $result = $apiInstance->contentAddPost($data, $filename, $coluuid, $replication, $ignore_dupes, $overwrite, $lazy_provide, $dir);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentAddPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **string****string**|  |
 **filename** | **string**|  |
 **coluuid** | **string**| Collection UUID | [optional]
 **replication** | **int**| Replication value | [optional]
 **ignore_dupes** | **string**| Ignore Dupes true/false | [optional]
 **overwrite** | **string**| Overwrite files with the same path on same collection | [optional]
 **lazy_provide** | **string**| Lazy Provide true/false | [optional]
 **dir** | **string**| Directory | [optional]

### Return type

[**\Swagger\Client\Model\UtilContentAddResponse**](../Model/UtilContentAddResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentAggregatedContentGet** {#contentAggregatedContentGet}
> string contentAggregatedContentGet($content)

Get aggregated content stats

This endpoint returns aggregated content stats

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content = "content_example"; // string | Content ID

try {
    $result = $apiInstance->contentAggregatedContentGet($content);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentAggregatedContentGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **string**| Content ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentAllDealsGet** {#contentAllDealsGet}
> string contentAllDealsGet($begin, $duration, $all)

Get all deals for a user

This endpoint is used to get all deals for a user

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$begin = "begin_example"; // string | Begin
$duration = "duration_example"; // string | Duration
$all = "all_example"; // string | All

try {
    $result = $apiInstance->contentAllDealsGet($begin, $duration, $all);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentAllDealsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **begin** | **string**| Begin |
 **duration** | **string**| Duration |
 **all** | **string**| All |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentBwUsageContentGet** {#contentBwUsageContentGet}
> string contentBwUsageContentGet($content)

Get content bandwidth

This endpoint returns content bandwidth

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content = "content_example"; // string | Content ID

try {
    $result = $apiInstance->contentBwUsageContentGet($content);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentBwUsageContentGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **string**| Content ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentContentsGet** {#contentContentsGet}
> string contentContentsGet($limit, $offset)

Get user contents

This endpoint is used to get user contents

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = "limit_example"; // string | limit
$offset = "offset_example"; // string | offset

try {
    $result = $apiInstance->contentContentsGet($limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentContentsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **string**| limit |
 **offset** | **string**| offset |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentCreatePost** {#contentCreatePost}
> string contentCreatePost($body, $ignore_dupes)

Add a new content

This endpoint adds a new content

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\UtilContentCreateBody(); // \Swagger\Client\Model\UtilContentCreateBody | Content
$ignore_dupes = "ignore_dupes_example"; // string | Ignore Dupes

try {
    $result = $apiInstance->contentCreatePost($body, $ignore_dupes);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentCreatePost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\UtilContentCreateBody**](../Model/UtilContentCreateBody.md)| Content |
 **ignore_dupes** | **string**| Ignore Dupes | [optional]

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentDealsGet** {#contentDealsGet}
> string contentDealsGet($limit, $offset)

Content with deals

This endpoint lists all content with deals

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 56; // int | Limit
$offset = 56; // int | Offset

try {
    $result = $apiInstance->contentDealsGet($limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentDealsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit | [optional]
 **offset** | **int**| Offset | [optional]

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentEnsureReplicationDatacidGet** {#contentEnsureReplicationDatacidGet}
> string contentEnsureReplicationDatacidGet($datacid)

Ensure Replication

This endpoint ensures that the content is replicated to the specified number of providers

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$datacid = "datacid_example"; // string | Data CID

try {
    $result = $apiInstance->contentEnsureReplicationDatacidGet($datacid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentEnsureReplicationDatacidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datacid** | **string**| Data CID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentFailuresContentGet** {#contentFailuresContentGet}
> string contentFailuresContentGet($content)

List all failures for a content

This endpoint returns all failures for a content

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$content = "content_example"; // string | Content ID

try {
    $result = $apiInstance->contentFailuresContentGet($content);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentFailuresContentGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **string**| Content ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentIdGet** {#contentIdGet}
> string contentIdGet($id)

Content

This endpoint returns a content by its ID

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | Content ID

try {
    $result = $apiInstance->contentIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Content ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentListGet** {#contentListGet}
> string contentListGet()

List all pinned content

This endpoint lists all content

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->contentListGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentListGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentStagingZonesGet** {#contentStagingZonesGet}
> string contentStagingZonesGet()

Get staging zone for user, excluding its contents

This endpoint is used to get staging zone for user, excluding its contents.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->contentStagingZonesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentStagingZonesGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentStagingZonesStagingZoneContentsGet** {#contentStagingZonesStagingZoneContentsGet}
> string contentStagingZonesStagingZoneContentsGet($staging_zone, $limit, $offset)

Get contents for a staging zone

This endpoint is used to get the contents for a staging zone

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$staging_zone = 56; // int | Staging Zone Content ID
$limit = "limit_example"; // string | limit
$offset = "offset_example"; // string | offset

try {
    $result = $apiInstance->contentStagingZonesStagingZoneContentsGet($staging_zone, $limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentStagingZonesStagingZoneContentsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staging_zone** | **int**| Staging Zone Content ID |
 **limit** | **string**| limit |
 **offset** | **string**| offset |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentStagingZonesStagingZoneGet** {#contentStagingZonesStagingZoneGet}
> string contentStagingZonesStagingZoneGet($staging_zone)

Get staging zone without its contents field populated

This endpoint is used to get a staging zone, excluding its contents.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$staging_zone = 56; // int | Staging Zone Content ID

try {
    $result = $apiInstance->contentStagingZonesStagingZoneGet($staging_zone);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentStagingZonesStagingZoneGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **staging_zone** | **int**| Staging Zone Content ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentStatsGet** {#contentStatsGet}
> string contentStatsGet($limit, $offset)

Get content statistics

This endpoint is used to get content statistics. Every content stored in the network (estuary) is tracked by a unique ID which can be used to get information about the content. This endpoint will allow the consumer to get the collected stats of a content

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = "limit_example"; // string | limit
$offset = "offset_example"; // string | offset

try {
    $result = $apiInstance->contentStatsGet($limit, $offset);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentStatsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **string**| limit |
 **offset** | **string**| offset |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **contentStatusIdGet** {#contentStatusIdGet}
> string contentStatusIdGet($id)

Content Status

This endpoint returns the status of a content

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\ContentApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 56; // int | Content ID

try {
    $result = $apiInstance->contentStatusIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ContentApi->contentStatusIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Content ID |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

