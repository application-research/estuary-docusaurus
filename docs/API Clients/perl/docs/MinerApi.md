# WWW::SwaggerClient::MinerApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::MinerApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_miners_deals_miner_get**](MinerApi.md#public_miners_deals_miner_get) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**public_miners_stats_miner_get**](MinerApi.md#public_miners_stats_miner_get) | **GET** /public/miners/stats/{miner} | Get miner stats


# **public_miners_deals_miner_get**
> public_miners_deals_miner_get(miner => $miner, ignore_failed => $ignore_failed)

Get all miners deals

This endpoint returns all miners deals

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::MinerApi;
my $api_instance = WWW::SwaggerClient::MinerApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $miner = 'miner_example'; # string | Filter by miner
my $ignore_failed = 'ignore_failed_example'; # string | Ignore Failed

eval { 
    $api_instance->public_miners_deals_miner_get(miner => $miner, ignore_failed => $ignore_failed);
};
if ($@) {
    warn "Exception when calling MinerApi->public_miners_deals_miner_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Filter by miner | 
 **ignore_failed** | **string**| Ignore Failed | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_miners_stats_miner_get**
> public_miners_stats_miner_get(miner => $miner)

Get miner stats

This endpoint returns miner stats

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::MinerApi;
my $api_instance = WWW::SwaggerClient::MinerApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $miner = 'miner_example'; # string | Filter by miner

eval { 
    $api_instance->public_miners_stats_miner_get(miner => $miner);
};
if ($@) {
    warn "Exception when calling MinerApi->public_miners_stats_miner_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **miner** | **string**| Filter by miner | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

