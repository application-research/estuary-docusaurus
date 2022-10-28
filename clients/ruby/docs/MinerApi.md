# SwaggerClient::MinerApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_miners_deals_miner_get**](MinerApi.md#public_miners_deals_miner_get) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**public_miners_stats_miner_get**](MinerApi.md#public_miners_stats_miner_get) | **GET** /public/miners/stats/{miner} | Get miner stats


# **public_miners_deals_miner_get**
> public_miners_deals_miner_get(miner, opts)

Get all miners deals

This endpoint returns all miners deals

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

api_instance = SwaggerClient::MinerApi.new

miner = 'miner_example' # String | Filter by miner

opts = { 
  ignore_failed: 'ignore_failed_example' # String | Ignore Failed
}

begin
  #Get all miners deals
  api_instance.public_miners_deals_miner_get(miner, opts)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->public_miners_deals_miner_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Filter by miner | 
 **ignore_failed** | **String**| Ignore Failed | [optional] 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **public_miners_stats_miner_get**
> public_miners_stats_miner_get(miner)

Get miner stats

This endpoint returns miner stats

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

api_instance = SwaggerClient::MinerApi.new

miner = 'miner_example' # String | Filter by miner


begin
  #Get miner stats
  api_instance.public_miners_stats_miner_get(miner)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->public_miners_stats_miner_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Filter by miner | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



