# Swagger\Client\MinerApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**minerClaimMinerGet**](MinerApi.md#minerclaimminerget) | **GET** /miner/claim/{miner} | Get Claim Miner Message
[**minerClaimPost**](MinerApi.md#minerclaimpost) | **POST** /miner/claim | Claim Miner
[**minerSetInfoMinerPut**](MinerApi.md#minersetinfominerput) | **PUT** /miner/set-info/{miner} | Set Miner Info
[**minerSuspendMinerPost**](MinerApi.md#minersuspendminerpost) | **POST** /miner/suspend/{miner} | Suspend Miner
[**minerUnsuspendMinerPut**](MinerApi.md#minerunsuspendminerput) | **PUT** /miner/unsuspend/{miner} | Unuspend Miner
[**publicMinersDealsMinerGet**](MinerApi.md#publicminersdealsminerget) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**publicMinersStatsMinerGet**](MinerApi.md#publicminersstatsminerget) | **GET** /public/miners/stats/{miner} | Get miner stats

## **minerClaimMinerGet** {#minerClaimMinerGet}
> \Swagger\Client\Model\ApiClaimMsgResponse minerClaimMinerGet($miner)

Get Claim Miner Message

This endpoint lets a user get the message in order to claim a miner

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\MinerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$miner = "miner_example"; // string | Miner claim message

try {
    $result = $apiInstance->minerClaimMinerGet($miner);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MinerApi->minerClaimMinerGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Miner claim message |

### Return type

[**\Swagger\Client\Model\ApiClaimMsgResponse**](../Model/ApiClaimMsgResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **minerClaimPost** {#minerClaimPost}
> \Swagger\Client\Model\ApiClaimResponse minerClaimPost($body)

Claim Miner

This endpoint lets a user claim a miner

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\MinerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\MinerClaimMinerBody(); // \Swagger\Client\Model\MinerClaimMinerBody | Claim Miner Body

try {
    $result = $apiInstance->minerClaimPost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MinerApi->minerClaimPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MinerClaimMinerBody**](../Model/MinerClaimMinerBody.md)| Claim Miner Body |

### Return type

[**\Swagger\Client\Model\ApiClaimResponse**](../Model/ApiClaimResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **minerSetInfoMinerPut** {#minerSetInfoMinerPut}
> \Swagger\Client\Model\ApiEmptyResp minerSetInfoMinerPut($body, $miner)

Set Miner Info

This endpoint lets a user set miner info.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\MinerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\MinerMinerSetInfoParams(); // \Swagger\Client\Model\MinerMinerSetInfoParams | Miner set info params
$miner = "miner_example"; // string | Miner to set info for

try {
    $result = $apiInstance->minerSetInfoMinerPut($body, $miner);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MinerApi->minerSetInfoMinerPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MinerMinerSetInfoParams**](../Model/MinerMinerSetInfoParams.md)| Miner set info params |
 **miner** | **string**| Miner to set info for |

### Return type

[**\Swagger\Client\Model\ApiEmptyResp**](../Model/ApiEmptyResp.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **minerSuspendMinerPost** {#minerSuspendMinerPost}
> \Swagger\Client\Model\ApiEmptyResp minerSuspendMinerPost($body, $miner)

Suspend Miner

This endpoint lets a user suspend a miner.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\MinerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\MinerSuspendMinerBody(); // \Swagger\Client\Model\MinerSuspendMinerBody | Suspend Miner Body
$miner = "miner_example"; // string | Miner to suspend

try {
    $result = $apiInstance->minerSuspendMinerPost($body, $miner);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MinerApi->minerSuspendMinerPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MinerSuspendMinerBody**](../Model/MinerSuspendMinerBody.md)| Suspend Miner Body |
 **miner** | **string**| Miner to suspend |

### Return type

[**\Swagger\Client\Model\ApiEmptyResp**](../Model/ApiEmptyResp.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **minerUnsuspendMinerPut** {#minerUnsuspendMinerPut}
> \Swagger\Client\Model\ApiEmptyResp minerUnsuspendMinerPut($miner)

Unuspend Miner

This endpoint lets a user unsuspend a miner.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\MinerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$miner = "miner_example"; // string | Miner to unsuspend

try {
    $result = $apiInstance->minerUnsuspendMinerPut($miner);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MinerApi->minerUnsuspendMinerPut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Miner to unsuspend |

### Return type

[**\Swagger\Client\Model\ApiEmptyResp**](../Model/ApiEmptyResp.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **publicMinersDealsMinerGet** {#publicMinersDealsMinerGet}
> string publicMinersDealsMinerGet($miner, $ignore_failed)

Get all miners deals

This endpoint returns all miners deals

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\MinerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$miner = "miner_example"; // string | Filter by miner
$ignore_failed = "ignore_failed_example"; // string | Ignore Failed

try {
    $result = $apiInstance->publicMinersDealsMinerGet($miner, $ignore_failed);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MinerApi->publicMinersDealsMinerGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Filter by miner |
 **ignore_failed** | **string**| Ignore Failed | [optional]

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **publicMinersStatsMinerGet** {#publicMinersStatsMinerGet}
> string publicMinersStatsMinerGet($miner)

Get miner stats

This endpoint returns miner stats

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\MinerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$miner = "miner_example"; // string | Filter by miner

try {
    $result = $apiInstance->publicMinersStatsMinerGet($miner);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MinerApi->publicMinersStatsMinerGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Filter by miner |

### Return type

**string**

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

