# SwaggerClient::PinningApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pinning_pins_get**](PinningApi.md#pinning_pins_get) | **GET** /pinning/pins | List all pin status objects
[**pinning_pins_pinid_delete**](PinningApi.md#pinning_pins_pinid_delete) | **DELETE** /pinning/pins/{pinid} | Delete a pinned object
[**pinning_pins_pinid_get**](PinningApi.md#pinning_pins_pinid_get) | **GET** /pinning/pins/{pinid} | Get a pin status object
[**pinning_pins_pinid_post**](PinningApi.md#pinning_pins_pinid_post) | **POST** /pinning/pins/{pinid} | Replace a pinned object
[**pinning_pins_post**](PinningApi.md#pinning_pins_post) | **POST** /pinning/pins | Add and pin object

## **pinning_pins_get** {#pinning_pins_get}
> TypesIpfsListPinStatusResponse pinning_pins_get

List all pin status objects

This endpoint lists all pin status objects

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: bearerAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = SwaggerClient::PinningApi.new

begin
  #List all pin status objects
  result = api_instance.pinning_pins_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PinningApi->pinning_pins_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TypesIpfsListPinStatusResponse**](TypesIpfsListPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **pinning_pins_pinid_delete** {#pinning_pins_pinid_delete}
> pinning_pins_pinid_delete(pinid)

Delete a pinned object

This endpoint deletes a pinned object.

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: bearerAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = SwaggerClient::PinningApi.new
pinid = 'pinid_example' # String | Pin ID


begin
  #Delete a pinned object
  api_instance.pinning_pins_pinid_delete(pinid)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PinningApi->pinning_pins_pinid_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **String**| Pin ID | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **pinning_pins_pinid_get** {#pinning_pins_pinid_get}
> TypesIpfsPinStatusResponse pinning_pins_pinid_get(pinid)

Get a pin status object

This endpoint returns a pin status object.

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: bearerAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = SwaggerClient::PinningApi.new
pinid = 'pinid_example' # String | cid


begin
  #Get a pin status object
  result = api_instance.pinning_pins_pinid_get(pinid)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PinningApi->pinning_pins_pinid_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pinid** | **String**| cid | 

### Return type

[**TypesIpfsPinStatusResponse**](TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **pinning_pins_pinid_post** {#pinning_pins_pinid_post}
> TypesIpfsPinStatusResponse pinning_pins_pinid_post(bodypinid)

Replace a pinned object

This endpoint replaces a pinned object.

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: bearerAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = SwaggerClient::PinningApi.new
body = SwaggerClient::TypesIpfsPin.new # TypesIpfsPin | New pin
pinid = 'pinid_example' # String | Pin ID to be replaced


begin
  #Replace a pinned object
  result = api_instance.pinning_pins_pinid_post(bodypinid)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PinningApi->pinning_pins_pinid_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TypesIpfsPin**](TypesIpfsPin.md)| New pin | 
 **pinid** | **String**| Pin ID to be replaced | 

### Return type

[**TypesIpfsPinStatusResponse**](TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



## **pinning_pins_post** {#pinning_pins_post}
> TypesIpfsPinStatusResponse pinning_pins_post(body, opts)

Add and pin object

This endpoint adds a pin to the IPFS daemon.

### Example
```ruby
# load the gem
require 'swagger_client'
# setup authorization
SwaggerClient.configure do |config|
  # Configure API key authorization: bearerAuth
  config.api_key['Authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['Authorization'] = 'Bearer'
end

api_instance = SwaggerClient::PinningApi.new
body = SwaggerClient::TypesIpfsPin.new # TypesIpfsPin | Pin Body {cid:cid, name:name}
opts = { 
  ignore_dupes: 'ignore_dupes_example' # String | Ignore Dupes
  overwrite: 'overwrite_example' # String | Overwrite conflicting files in collections
}

begin
  #Add and pin object
  result = api_instance.pinning_pins_post(body, opts)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PinningApi->pinning_pins_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TypesIpfsPin**](TypesIpfsPin.md)| Pin Body {cid:cid, name:name} | 
 **ignore_dupes** | **String**| Ignore Dupes | [optional] 
 **overwrite** | **String**| Overwrite conflicting files in collections | [optional] 

### Return type

[**TypesIpfsPinStatusResponse**](TypesIpfsPinStatusResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



