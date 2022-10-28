# SwaggerClient::AutoretrieveApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_autoretrieve_init_post**](AutoretrieveApi.md#admin_autoretrieve_init_post) | **POST** /admin/autoretrieve/init | Register autoretrieve server
[**admin_autoretrieve_list_get**](AutoretrieveApi.md#admin_autoretrieve_list_get) | **GET** /admin/autoretrieve/list | List autoretrieve servers
[**autoretrieve_heartbeat_post**](AutoretrieveApi.md#autoretrieve_heartbeat_post) | **POST** /autoretrieve/heartbeat | Marks autoretrieve server as up


# **admin_autoretrieve_init_post**
> admin_autoretrieve_init_post(addresses, pub_key)

Register autoretrieve server

This endpoint registers a new autoretrieve server

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

api_instance = SwaggerClient::AutoretrieveApi.new

addresses = 'addresses_example' # String | Autoretrieve's comma-separated list of addresses

pub_key = 'pub_key_example' # String | Autoretrieve's public key


begin
  #Register autoretrieve server
  api_instance.admin_autoretrieve_init_post(addresses, pub_key)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AutoretrieveApi->admin_autoretrieve_init_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | **String**| Autoretrieve&#39;s comma-separated list of addresses | 
 **pub_key** | **String**| Autoretrieve&#39;s public key | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **admin_autoretrieve_list_get**
> admin_autoretrieve_list_get

List autoretrieve servers

This endpoint lists all registered autoretrieve servers

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

api_instance = SwaggerClient::AutoretrieveApi.new

begin
  #List autoretrieve servers
  api_instance.admin_autoretrieve_list_get
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AutoretrieveApi->admin_autoretrieve_list_get: #{e}"
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
 - **Accept**: application/json



# **autoretrieve_heartbeat_post**
> autoretrieve_heartbeat_post(token)

Marks autoretrieve server as up

This endpoint updates the lastConnection field for autoretrieve

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

api_instance = SwaggerClient::AutoretrieveApi.new

token = 'token_example' # String | Autoretrieve's auth token


begin
  #Marks autoretrieve server as up
  api_instance.autoretrieve_heartbeat_post(token)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AutoretrieveApi->autoretrieve_heartbeat_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Autoretrieve&#39;s auth token | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



