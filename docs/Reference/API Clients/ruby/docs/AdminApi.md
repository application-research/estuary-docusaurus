# SwaggerClient::AdminApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_miners_get**](AdminApi.md#admin_miners_get) | **GET** /admin/miners/ | Get all miners
[**admin_peering_peers_delete**](AdminApi.md#admin_peering_peers_delete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
[**admin_peering_peers_get**](AdminApi.md#admin_peering_peers_get) | **GET** /admin/peering/peers | List all Peering peers
[**admin_peering_peers_post**](AdminApi.md#admin_peering_peers_post) | **POST** /admin/peering/peers | Add peers on Peering Service
[**admin_peering_start_post**](AdminApi.md#admin_peering_start_post) | **POST** /admin/peering/start | Start Peering
[**admin_peering_status_get**](AdminApi.md#admin_peering_status_get) | **GET** /admin/peering/status | Check Peering Status
[**admin_peering_stop_post**](AdminApi.md#admin_peering_stop_post) | **POST** /admin/peering/stop | Stop Peering
[**admin_system_config_get**](AdminApi.md#admin_system_config_get) | **GET** /admin/system/config | Get systems(estuary/shuttle) config
[**admin_users_get**](AdminApi.md#admin_users_get) | **GET** /admin/users | Get all users

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

api_instance = SwaggerClient::AdminApi.new

begin
  #Get all miners
  result = api_instance.admin_miners_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_miners_get: #{e}"
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

api_instance = SwaggerClient::AdminApi.new
body = ['body_example'] # Array<String> | Peer ids


begin
  #Remove peers on Peering Service
  result = api_instance.admin_peering_peers_delete(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_peering_peers_delete: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Array&lt;String&gt;**](String.md)| Peer ids | 

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

api_instance = SwaggerClient::AdminApi.new

begin
  #List all Peering peers
  result = api_instance.admin_peering_peers_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_peering_peers_get: #{e}"
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
> String admin_peering_peers_post(body)

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

api_instance = SwaggerClient::AdminApi.new
body = [SwaggerClient::PeeringPeeringPeer.new] # Array<PeeringPeeringPeer> | Peering Peer array


begin
  #Add peers on Peering Service
  result = api_instance.admin_peering_peers_post(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_peering_peers_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Array&lt;PeeringPeeringPeer&gt;**](PeeringPeeringPeer.md)| Peering Peer array | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
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

api_instance = SwaggerClient::AdminApi.new

begin
  #Start Peering
  result = api_instance.admin_peering_start_post
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_peering_start_post: #{e}"
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

api_instance = SwaggerClient::AdminApi.new

begin
  #Check Peering Status
  result = api_instance.admin_peering_status_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_peering_status_get: #{e}"
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

api_instance = SwaggerClient::AdminApi.new

begin
  #Stop Peering
  result = api_instance.admin_peering_stop_post
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_peering_stop_post: #{e}"
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



## **admin_system_config_get** {#admin_system_config_get}
> String admin_system_config_get

Get systems(estuary/shuttle) config

This endpoint is used to get system configs.

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

api_instance = SwaggerClient::AdminApi.new

begin
  #Get systems(estuary/shuttle) config
  result = api_instance.admin_system_config_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_system_config_get: #{e}"
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



## **admin_users_get** {#admin_users_get}
> String admin_users_get

Get all users

This endpoint is used to get all users.

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

api_instance = SwaggerClient::AdminApi.new

begin
  #Get all users
  result = api_instance.admin_users_get
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling AdminApi->admin_users_get: #{e}"
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



