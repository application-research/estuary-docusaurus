# SwaggerClient::NetApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_miners_get**](NetApi.md#admin_miners_get) | **GET** /admin/miners/ | Get all miners
[**public_miners_failures_miner_get**](NetApi.md#public_miners_failures_miner_get) | **GET** /public/miners/failures/{miner} | Get all miners
[**public_net_addrs_get**](NetApi.md#public_net_addrs_get) | **GET** /public/net/addrs | Net Addrs
[**public_net_peers_get**](NetApi.md#public_net_peers_get) | **GET** /public/net/peers | Net Peers

## **admin_miners_get** {#admin_miners_get}
> ApiMinerResp admin_miners_get

Get all miners

This endpoint returns all miners. Note: value may be cached

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

api_instance = SwaggerClient::NetApi.new

begin
  #Get all miners
  result = api_instance.admin_miners_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling NetApi->admin_miners_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiMinerResp**](ApiMinerResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **public_miners_failures_miner_get** {#public_miners_failures_miner_get}
> String public_miners_failures_miner_get(miner)

Get all miners

This endpoint returns all miners

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

api_instance = SwaggerClient::NetApi.new
miner = 'miner_example' # String | Filter by miner


begin
  #Get all miners
  result = api_instance.public_miners_failures_miner_get(miner)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling NetApi->public_miners_failures_miner_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Filter by miner | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **public_net_addrs_get** {#public_net_addrs_get}
> Array&lt;String&gt; public_net_addrs_get

Net Addrs

This endpoint is used to get net addrs

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

api_instance = SwaggerClient::NetApi.new

begin
  #Net Addrs
  result = api_instance.public_net_addrs_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling NetApi->public_net_addrs_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Array&lt;String&gt;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **public_net_peers_get** {#public_net_peers_get}
> Array&lt;String&gt; public_net_peers_get

Net Peers

This endpoint is used to get net peers

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

api_instance = SwaggerClient::NetApi.new

begin
  #Net Peers
  result = api_instance.public_net_peers_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling NetApi->public_net_peers_get: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Array&lt;String&gt;**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



