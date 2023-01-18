# SwaggerClient::MinerApi

All URIs are relative to *//api.estuary.tech/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**miner_claim_miner_get**](MinerApi.md#miner_claim_miner_get) | **GET** /miner/claim/{miner} | Get Claim Miner Message
[**miner_claim_post**](MinerApi.md#miner_claim_post) | **POST** /miner/claim | Claim Miner
[**miner_set_info_miner_put**](MinerApi.md#miner_set_info_miner_put) | **PUT** /miner/set-info/{miner} | Set Miner Info
[**miner_suspend_miner_post**](MinerApi.md#miner_suspend_miner_post) | **POST** /miner/suspend/{miner} | Suspend Miner
[**miner_unsuspend_miner_put**](MinerApi.md#miner_unsuspend_miner_put) | **PUT** /miner/unsuspend/{miner} | Unuspend Miner
[**public_miners_deals_miner_get**](MinerApi.md#public_miners_deals_miner_get) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**public_miners_stats_miner_get**](MinerApi.md#public_miners_stats_miner_get) | **GET** /public/miners/stats/{miner} | Get miner stats

## **miner_claim_miner_get** {#miner_claim_miner_get}
> ApiClaimMsgResponse miner_claim_miner_get(miner)

Get Claim Miner Message

This endpoint lets a user get the message in order to claim a miner

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
miner = 'miner_example' # String | Miner claim message


begin
  #Get Claim Miner Message
  result = api_instance.miner_claim_miner_get(miner)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->miner_claim_miner_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner claim message | 

### Return type

[**ApiClaimMsgResponse**](ApiClaimMsgResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **miner_claim_post** {#miner_claim_post}
> ApiClaimResponse miner_claim_post(body)

Claim Miner

This endpoint lets a user claim a miner

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
body = SwaggerClient::MinerClaimMinerBody.new # MinerClaimMinerBody | Claim Miner Body


begin
  #Claim Miner
  result = api_instance.miner_claim_post(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->miner_claim_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerClaimMinerBody**](MinerClaimMinerBody.md)| Claim Miner Body | 

### Return type

[**ApiClaimResponse**](ApiClaimResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json



## **miner_set_info_miner_put** {#miner_set_info_miner_put}
> ApiEmptyResp miner_set_info_miner_put(bodyminer)

Set Miner Info

This endpoint lets a user set miner info.

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
body = SwaggerClient::MinerMinerSetInfoParams.new # MinerMinerSetInfoParams | Miner set info params
miner = 'miner_example' # String | Miner to set info for


begin
  #Set Miner Info
  result = api_instance.miner_set_info_miner_put(bodyminer)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->miner_set_info_miner_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerMinerSetInfoParams**](MinerMinerSetInfoParams.md)| Miner set info params | 
 **miner** | **String**| Miner to set info for | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json



## **miner_suspend_miner_post** {#miner_suspend_miner_post}
> ApiEmptyResp miner_suspend_miner_post(bodyminer)

Suspend Miner

This endpoint lets a user suspend a miner.

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
body = SwaggerClient::MinerSuspendMinerBody.new # MinerSuspendMinerBody | Suspend Miner Body
miner = 'miner_example' # String | Miner to suspend


begin
  #Suspend Miner
  result = api_instance.miner_suspend_miner_post(bodyminer)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->miner_suspend_miner_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MinerSuspendMinerBody**](MinerSuspendMinerBody.md)| Suspend Miner Body | 
 **miner** | **String**| Miner to suspend | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json



## **miner_unsuspend_miner_put** {#miner_unsuspend_miner_put}
> ApiEmptyResp miner_unsuspend_miner_put(miner)

Unuspend Miner

This endpoint lets a user unsuspend a miner.

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
miner = 'miner_example' # String | Miner to unsuspend


begin
  #Unuspend Miner
  result = api_instance.miner_unsuspend_miner_put(miner)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->miner_unsuspend_miner_put: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner to unsuspend | 

### Return type

[**ApiEmptyResp**](ApiEmptyResp.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **public_miners_deals_miner_get** {#public_miners_deals_miner_get}
> String public_miners_deals_miner_get(miner, opts)

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
  result = api_instance.public_miners_deals_miner_get(miner, opts)
  p result
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

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



## **public_miners_stats_miner_get** {#public_miners_stats_miner_get}
> String public_miners_stats_miner_get(miner)

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
  result = api_instance.public_miners_stats_miner_get(miner)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling MinerApi->public_miners_stats_miner_get: #{e}"
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



