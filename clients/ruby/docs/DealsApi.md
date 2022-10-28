# SwaggerClient::DealsApi

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deal_estimate_post**](DealsApi.md#deal_estimate_post) | **POST** /deal/estimate | Estimate the cost of a deal
[**deal_info_dealid_get**](DealsApi.md#deal_info_dealid_get) | **GET** /deal/info/{dealid} | Get Deal Info
[**deal_proposal_propcid_get**](DealsApi.md#deal_proposal_propcid_get) | **GET** /deal/proposal/{propcid} | Get Proposal
[**deal_query_miner_get**](DealsApi.md#deal_query_miner_get) | **GET** /deal/query/{miner} | Query Ask
[**deal_status_by_proposal_propcid_get**](DealsApi.md#deal_status_by_proposal_propcid_get) | **GET** /deal/status-by-proposal/{propcid} | Get Deal Status by PropCid
[**deal_status_miner_propcid_get**](DealsApi.md#deal_status_miner_propcid_get) | **GET** /deal/status/{miner}/{propcid} | Deal Status
[**deal_transfer_in_progress_get**](DealsApi.md#deal_transfer_in_progress_get) | **GET** /deal/transfer/in-progress | Transfer In Progress
[**deals_failures_get**](DealsApi.md#deals_failures_get) | **GET** /deals/failures | Get storage failures for user
[**deals_make_miner_post**](DealsApi.md#deals_make_miner_post) | **POST** /deals/make/{miner} | Make Deal
[**deals_status_deal_get**](DealsApi.md#deals_status_deal_get) | **GET** /deals/status/{deal} | Get Deal Status
[**public_deals_failures_get**](DealsApi.md#public_deals_failures_get) | **GET** /public/deals/failures | Get storage failures
[**public_miners_storage_query_miner_get**](DealsApi.md#public_miners_storage_query_miner_get) | **GET** /public/miners/storage/query/{miner} | Query Ask


# **deal_estimate_post**
> deal_estimate_post(body)

Estimate the cost of a deal

This endpoint estimates the cost of a deal

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

api_instance = SwaggerClient::DealsApi.new

body = SwaggerClient::MainEstimateDealBody.new # MainEstimateDealBody | The size of the deal in bytes, the replication factor, and the duration of the deal in blocks


begin
  #Estimate the cost of a deal
  api_instance.deal_estimate_post(body)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deal_estimate_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainEstimateDealBody**](MainEstimateDealBody.md)| The size of the deal in bytes, the replication factor, and the duration of the deal in blocks | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **deal_info_dealid_get**
> deal_info_dealid_get(dealid)

Get Deal Info

This endpoint returns the deal info for a deal

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

api_instance = SwaggerClient::DealsApi.new

dealid = 56 # Integer | Deal ID


begin
  #Get Deal Info
  api_instance.deal_info_dealid_get(dealid)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deal_info_dealid_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealid** | **Integer**| Deal ID | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **deal_proposal_propcid_get**
> deal_proposal_propcid_get(propcid)

Get Proposal

This endpoint returns the proposal for a deal

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

api_instance = SwaggerClient::DealsApi.new

propcid = 'propcid_example' # String | Proposal CID


begin
  #Get Proposal
  api_instance.deal_proposal_propcid_get(propcid)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deal_proposal_propcid_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **String**| Proposal CID | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **deal_query_miner_get**
> deal_query_miner_get(miner)

Query Ask

This endpoint returns the ask for a given CID

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

api_instance = SwaggerClient::DealsApi.new

miner = 'miner_example' # String | CID


begin
  #Query Ask
  api_instance.deal_query_miner_get(miner)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deal_query_miner_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| CID | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **deal_status_by_proposal_propcid_get**
> deal_status_by_proposal_propcid_get(propcid)

Get Deal Status by PropCid

Get Deal Status by PropCid

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

api_instance = SwaggerClient::DealsApi.new

propcid = 'propcid_example' # String | PropCid


begin
  #Get Deal Status by PropCid
  api_instance.deal_status_by_proposal_propcid_get(propcid)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deal_status_by_proposal_propcid_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propcid** | **String**| PropCid | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **deal_status_miner_propcid_get**
> deal_status_miner_propcid_get(miner, propcid)

Deal Status

This endpoint returns the status of a deal

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

api_instance = SwaggerClient::DealsApi.new

miner = 'miner_example' # String | Miner

propcid = 'propcid_example' # String | Proposal CID


begin
  #Deal Status
  api_instance.deal_status_miner_propcid_get(miner, propcid)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deal_status_miner_propcid_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner | 
 **propcid** | **String**| Proposal CID | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **deal_transfer_in_progress_get**
> deal_transfer_in_progress_get

Transfer In Progress

This endpoint returns the in-progress transfers

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

api_instance = SwaggerClient::DealsApi.new

begin
  #Transfer In Progress
  api_instance.deal_transfer_in_progress_get
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deal_transfer_in_progress_get: #{e}"
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



# **deals_failures_get**
> deals_failures_get

Get storage failures for user

This endpoint returns a list of storage failures for user

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

api_instance = SwaggerClient::DealsApi.new

begin
  #Get storage failures for user
  api_instance.deals_failures_get
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deals_failures_get: #{e}"
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



# **deals_make_miner_post**
> deals_make_miner_post(miner, deal_request)

Make Deal

This endpoint makes a deal for a given content and miner

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

api_instance = SwaggerClient::DealsApi.new

miner = 'miner_example' # String | Miner

deal_request = 'deal_request_example' # String | Deal Request


begin
  #Make Deal
  api_instance.deals_make_miner_post(miner, deal_request)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deals_make_miner_post: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| Miner | 
 **deal_request** | **String**| Deal Request | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **deals_status_deal_get**
> deals_status_deal_get(deal)

Get Deal Status

This endpoint returns the status of a deal

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

api_instance = SwaggerClient::DealsApi.new

deal = 56 # Integer | Deal ID


begin
  #Get Deal Status
  api_instance.deals_status_deal_get(deal)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->deals_status_deal_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deal** | **Integer**| Deal ID | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **public_deals_failures_get**
> public_deals_failures_get

Get storage failures

This endpoint returns a list of storage failures

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

api_instance = SwaggerClient::DealsApi.new

begin
  #Get storage failures
  api_instance.public_deals_failures_get
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->public_deals_failures_get: #{e}"
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



# **public_miners_storage_query_miner_get**
> public_miners_storage_query_miner_get(miner)

Query Ask

This endpoint returns the ask for a given CID

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

api_instance = SwaggerClient::DealsApi.new

miner = 'miner_example' # String | CID


begin
  #Query Ask
  api_instance.public_miners_storage_query_miner_get(miner)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DealsApi->public_miners_storage_query_miner_get: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **String**| CID | 

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



