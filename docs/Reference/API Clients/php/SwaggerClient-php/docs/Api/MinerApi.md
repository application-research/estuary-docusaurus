# Swagger\Client\MinerApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicMinersDealsMinerGet**](MinerApi.md#publicminersdealsminerget) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**publicMinersStatsMinerGet**](MinerApi.md#publicminersstatsminerget) | **GET** /public/miners/stats/{miner} | Get miner stats

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

