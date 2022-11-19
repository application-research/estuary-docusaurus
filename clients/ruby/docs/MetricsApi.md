# SwaggerClient::MetricsApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_metrics_deals_on_chain_get**](MetricsApi.md#public_metrics_deals_on_chain_get) | **GET** /public/metrics/deals-on-chain | Get deal metrics

## **public_metrics_deals_on_chain_get** {#public_metrics_deals_on_chain_get}
> String public_metrics_deals_on_chain_get

Get deal metrics

This endpoint is used to get deal metrics

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

api_instance = SwaggerClient::MetricsApi.new

begin
  #Get deal metrics
  result = api_instance.public_metrics_deals_on_chain_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MetricsApi->public_metrics_deals_on_chain_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



