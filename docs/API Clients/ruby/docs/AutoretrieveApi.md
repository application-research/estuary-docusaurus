# SwaggerClient::AutoretrieveApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_autoretrieve_init_post**](AutoretrieveApi.md#admin_autoretrieve_init_post) | **POST** /admin/autoretrieve/init | Register autoretrieve server
[**admin_autoretrieve_list_get**](AutoretrieveApi.md#admin_autoretrieve_list_get) | **GET** /admin/autoretrieve/list | List autoretrieve servers
[**autoretrieve_heartbeat_post**](AutoretrieveApi.md#autoretrieve_heartbeat_post) | **POST** /autoretrieve/heartbeat | Marks autoretrieve server as up

## **admin_autoretrieve_init_post** {#admin_autoretrieve_init_post}
> String admin_autoretrieve_init_post(addressespub_key)

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
addresses = 'addresses_example' # String | 
pub_key = 'pub_key_example' # String | 


begin
  #Register autoretrieve server
  result = api_instance.admin_autoretrieve_init_post(addressespub_key)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AutoretrieveApi->admin_autoretrieve_init_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | **String**|  | 
 **pub_key** | **String**|  | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



## **admin_autoretrieve_list_get** {#admin_autoretrieve_list_get}
> String admin_autoretrieve_list_get

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
  result = api_instance.admin_autoretrieve_list_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AutoretrieveApi->admin_autoretrieve_list_get: #{e}"
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



## **autoretrieve_heartbeat_post** {#autoretrieve_heartbeat_post}
> String autoretrieve_heartbeat_post(token)

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
  result = api_instance.autoretrieve_heartbeat_post(token)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AutoretrieveApi->autoretrieve_heartbeat_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Autoretrieve&#x27;s auth token | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



