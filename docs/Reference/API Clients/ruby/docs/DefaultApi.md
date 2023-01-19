# SwaggerClient::DefaultApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewer_get**](DefaultApi.md#viewer_get) | **GET** /viewer | Fetch viewer details

## **viewer_get** {#viewer_get}
> UtilViewerResponse viewer_get

Fetch viewer details

This endpoint fetches viewer details such as username, permissions, address, owned miners, user settings etc.

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

api_instance = SwaggerClient::DefaultApi.new

begin
  #Fetch viewer details
  result = api_instance.viewer_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->viewer_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UtilViewerResponse**](UtilViewerResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



