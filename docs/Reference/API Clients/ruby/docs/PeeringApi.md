# SwaggerClient::PeeringApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_peering_peers_delete**](PeeringApi.md#admin_peering_peers_delete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
[**admin_peering_peers_get**](PeeringApi.md#admin_peering_peers_get) | **GET** /admin/peering/peers | List all Peering peers
[**admin_peering_peers_post**](PeeringApi.md#admin_peering_peers_post) | **POST** /admin/peering/peers | Add peers on Peering Service
[**admin_peering_start_post**](PeeringApi.md#admin_peering_start_post) | **POST** /admin/peering/start | Start Peering
[**admin_peering_status_get**](PeeringApi.md#admin_peering_status_get) | **GET** /admin/peering/status | Check Peering Status
[**admin_peering_stop_post**](PeeringApi.md#admin_peering_stop_post) | **POST** /admin/peering/stop | Stop Peering

## **admin_peering_peers_delete** {#admin_peering_peers_delete}
> String admin_peering_peers_delete(body)

Remove peers on Peering Service

This endpoint can be used to remove a Peer from the Peering Service

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

api_instance = SwaggerClient::PeeringApi.new
body = [true] # Array<BOOLEAN> | Peer ids


begin
  #Remove peers on Peering Service
  result = api_instance.admin_peering_peers_delete(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeeringApi->admin_peering_peers_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Array&lt;BOOLEAN&gt;**](BOOLEAN.md)| Peer ids | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json



## **admin_peering_peers_get** {#admin_peering_peers_get}
> String admin_peering_peers_get

List all Peering peers

This endpoint can be used to list all peers on Peering Service

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

api_instance = SwaggerClient::PeeringApi.new

begin
  #List all Peering peers
  result = api_instance.admin_peering_peers_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeeringApi->admin_peering_peers_get: #{e}"
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



## **admin_peering_peers_post** {#admin_peering_peers_post}
> String admin_peering_peers_post

Add peers on Peering Service

This endpoint can be used to add a Peer from the Peering Service

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

api_instance = SwaggerClient::PeeringApi.new

begin
  #Add peers on Peering Service
  result = api_instance.admin_peering_peers_post
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeeringApi->admin_peering_peers_post: #{e}"
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



## **admin_peering_start_post** {#admin_peering_start_post}
> String admin_peering_start_post

Start Peering

This endpoint can be used to start the Peering Service

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

api_instance = SwaggerClient::PeeringApi.new

begin
  #Start Peering
  result = api_instance.admin_peering_start_post
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeeringApi->admin_peering_start_post: #{e}"
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



## **admin_peering_status_get** {#admin_peering_status_get}
> String admin_peering_status_get

Check Peering Status

This endpoint can be used to check the Peering status

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

api_instance = SwaggerClient::PeeringApi.new

begin
  #Check Peering Status
  result = api_instance.admin_peering_status_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeeringApi->admin_peering_status_get: #{e}"
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



## **admin_peering_stop_post** {#admin_peering_stop_post}
> String admin_peering_stop_post

Stop Peering

This endpoint can be used to stop the Peering Service

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

api_instance = SwaggerClient::PeeringApi.new

begin
  #Stop Peering
  result = api_instance.admin_peering_stop_post
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeeringApi->admin_peering_stop_post: #{e}"
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



