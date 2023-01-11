# Swagger\Client\PinningApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pinningPinsGet**](PinningApi.md#pinningpinsget) | **GET** /pinning/pins | List all pin status objects
[**pinningPinsPinidDelete**](PinningApi.md#pinningpinspiniddelete) | **DELETE** /pinning/pins/{pinid} | Delete a pinned object
[**pinningPinsPinidGet**](PinningApi.md#pinningpinspinidget) | **GET** /pinning/pins/{pinid} | Get a pin status object
[**pinningPinsPinidPost**](PinningApi.md#pinningpinspinidpost) | **POST** /pinning/pins/{pinid} | Replace a pinned object
[**pinningPinsPost**](PinningApi.md#pinningpinspost) | **POST** /pinning/pins | Add and pin object

## **pinningPinsGet** {#pinningPinsGet}
> \Swagger\Client\Model\TypesIpfsListPinStatusResponse pinningPinsGet()

List all pin status objects

This endpoint lists all pin status objects

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\PinningApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->pinningPinsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PinningApi->pinningPinsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\TypesIpfsListPinStatusResponse**](../Model/TypesIpfsListPinStatusResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **pinningPinsPinidDelete** {#pinningPinsPinidDelete}
> pinningPinsPinidDelete($pinid)

Delete a pinned object

This endpoint deletes a pinned object.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\PinningApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pinid = "pinid_example"; // string | Pin ID

try {
    $apiInstance->pinningPinsPinidDelete($pinid);
} catch (Exception $e) {
    echo 'Exception when calling PinningApi->pinningPinsPinidDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **string**| Pin ID |

### Return type

void (empty response body)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **pinningPinsPinidGet** {#pinningPinsPinidGet}
> \Swagger\Client\Model\TypesIpfsPinStatusResponse pinningPinsPinidGet($pinid)

Get a pin status object

This endpoint returns a pin status object.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\PinningApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pinid = "pinid_example"; // string | cid

try {
    $result = $apiInstance->pinningPinsPinidGet($pinid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PinningApi->pinningPinsPinidGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **string**| cid |

### Return type

[**\Swagger\Client\Model\TypesIpfsPinStatusResponse**](../Model/TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **pinningPinsPinidPost** {#pinningPinsPinidPost}
> \Swagger\Client\Model\TypesIpfsPinStatusResponse pinningPinsPinidPost($pinid, $body)

Replace a pinned object

This endpoint replaces a pinned object.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\PinningApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pinid = "pinid_example"; // string | Pin ID
$body = "body_example"; // string | Meta information of new pin

try {
    $result = $apiInstance->pinningPinsPinidPost($pinid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PinningApi->pinningPinsPinidPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **string**| Pin ID |
 **body** | [**string**](../Model/string.md)| Meta information of new pin | [optional]

### Return type

[**\Swagger\Client\Model\TypesIpfsPinStatusResponse**](../Model/TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

## **pinningPinsPost** {#pinningPinsPost}
> \Swagger\Client\Model\TypesIpfsPinStatusResponse pinningPinsPost($body)

Add and pin object

This endpoint adds a pin to the IPFS daemon.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure API key authorization: bearerAuth
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Authorization', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKeyPrefix('Authorization', 'Bearer');

$apiInstance = new Swagger\Client\Api\PinningApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$body = new \Swagger\Client\Model\TypesIpfsPin(); // \Swagger\Client\Model\TypesIpfsPin | Pin Body {cid:cid, name:name}

try {
    $result = $apiInstance->pinningPinsPost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PinningApi->pinningPinsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\TypesIpfsPin**](../Model/TypesIpfsPin.md)| Pin Body {cid:cid, name:name} |

### Return type

[**\Swagger\Client\Model\TypesIpfsPinStatusResponse**](../Model/TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

