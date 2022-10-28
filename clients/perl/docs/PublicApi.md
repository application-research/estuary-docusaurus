# WWW::SwaggerClient::PublicApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::PublicApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_by_cid_cid_get**](PublicApi.md#public_by_cid_cid_get) | **GET** /public/by-cid/{cid} | Get Content by Cid
[**public_info_get**](PublicApi.md#public_info_get) | **GET** /public/info | Get public node info
[**public_metrics_deals_on_chain_get**](PublicApi.md#public_metrics_deals_on_chain_get) | **GET** /public/metrics/deals-on-chain | Get deal metrics
[**public_miners_deals_miner_get**](PublicApi.md#public_miners_deals_miner_get) | **GET** /public/miners/deals/{miner} | Get all miners deals
[**public_miners_failures_miner_get**](PublicApi.md#public_miners_failures_miner_get) | **GET** /public/miners/failures/{miner} | Get all miners
[**public_miners_get**](PublicApi.md#public_miners_get) | **GET** /public/miners | Get all miners
[**public_miners_stats_miner_get**](PublicApi.md#public_miners_stats_miner_get) | **GET** /public/miners/stats/{miner} | Get miner stats
[**public_net_addrs_get**](PublicApi.md#public_net_addrs_get) | **GET** /public/net/addrs | Net Addrs
[**public_net_peers_get**](PublicApi.md#public_net_peers_get) | **GET** /public/net/peers | Net Peers
[**public_stats_get**](PublicApi.md#public_stats_get) | **GET** /public/stats | Public stats


# **public_by_cid_cid_get**
> public_by_cid_cid_get(cid => $cid)

Get Content by Cid

This endpoint returns the content associated with a CID

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $cid = 'cid_example'; # string | Cid

eval { 
    $api_instance->public_by_cid_cid_get(cid => $cid);
};
if ($@) {
    warn "Exception when calling PublicApi->public_by_cid_cid_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **string**| Cid | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_info_get**
> public_info_get()

Get public node info

This endpoint returns information about the node

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->public_info_get();
};
if ($@) {
    warn "Exception when calling PublicApi->public_info_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_metrics_deals_on_chain_get**
> public_metrics_deals_on_chain_get()

Get deal metrics

This endpoint is used to get deal metrics

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->public_metrics_deals_on_chain_get();
};
if ($@) {
    warn "Exception when calling PublicApi->public_metrics_deals_on_chain_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_miners_deals_miner_get**
> public_miners_deals_miner_get(miner => $miner, ignore_failed => $ignore_failed)

Get all miners deals

This endpoint returns all miners deals

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

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
    warn "Exception when calling PublicApi->public_miners_deals_miner_get: $@\n";
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

# **public_miners_failures_miner_get**
> public_miners_failures_miner_get(miner => $miner)

Get all miners

This endpoint returns all miners

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $miner = 'miner_example'; # string | Filter by miner

eval { 
    $api_instance->public_miners_failures_miner_get(miner => $miner);
};
if ($@) {
    warn "Exception when calling PublicApi->public_miners_failures_miner_get: $@\n";
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

# **public_miners_get**
> public_miners_get()

Get all miners

This endpoint returns all miners

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->public_miners_get();
};
if ($@) {
    warn "Exception when calling PublicApi->public_miners_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

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
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

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
    warn "Exception when calling PublicApi->public_miners_stats_miner_get: $@\n";
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

# **public_net_addrs_get**
> ARRAY[string] public_net_addrs_get()

Net Addrs

This endpoint is used to get net addrs

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->public_net_addrs_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PublicApi->public_net_addrs_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**ARRAY[string]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_net_peers_get**
> ARRAY[string] public_net_peers_get()

Net Peers

This endpoint is used to get net peers

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->public_net_peers_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PublicApi->public_net_peers_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**ARRAY[string]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_stats_get**
> public_stats_get()

Public stats

This endpoint is used to get public stats.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PublicApi;
my $api_instance = WWW::SwaggerClient::PublicApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->public_stats_get();
};
if ($@) {
    warn "Exception when calling PublicApi->public_stats_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

