# SwaggerClient::DefaultApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deal_transfer_status_post**](DefaultApi.md#deal_transfer_status_post) | **POST** /deal/transfer/status | 


# **deal_transfer_status_post**
> deal_transfer_status_post



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
  api_instance.deal_transfer_status_post
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->deal_transfer_status_post: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined



