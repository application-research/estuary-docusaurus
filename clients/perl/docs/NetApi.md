# WWW::SwaggerClient::NetApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::NetApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**net_addrs_get**](NetApi.md#net_addrs_get) | **GET** /net/addrs | Net Addrs
[**public_miners_failures_miner_get**](NetApi.md#public_miners_failures_miner_get) | **GET** /public/miners/failures/{miner} | Get all miners
[**public_miners_get**](NetApi.md#public_miners_get) | **GET** /public/miners | Get all miners
[**public_net_addrs_get**](NetApi.md#public_net_addrs_get) | **GET** /public/net/addrs | Net Addrs
[**public_net_peers_get**](NetApi.md#public_net_peers_get) | **GET** /public/net/peers | Net Peers


# **net_addrs_get**
> ARRAY[string] net_addrs_get()

Net Addrs

This endpoint is used to get net addrs

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::NetApi;
my $api_instance = WWW::SwaggerClient::NetApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->net_addrs_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling NetApi->net_addrs_get: $@\n";
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

# **public_miners_failures_miner_get**
> public_miners_failures_miner_get(miner => $miner)

Get all miners

This endpoint returns all miners

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::NetApi;
my $api_instance = WWW::SwaggerClient::NetApi->new(

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
    warn "Exception when calling NetApi->public_miners_failures_miner_get: $@\n";
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
use WWW::SwaggerClient::NetApi;
my $api_instance = WWW::SwaggerClient::NetApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->public_miners_get();
};
if ($@) {
    warn "Exception when calling NetApi->public_miners_get: $@\n";
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

# **public_net_addrs_get**
> ARRAY[string] public_net_addrs_get()

Net Addrs

This endpoint is used to get net addrs

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::NetApi;
my $api_instance = WWW::SwaggerClient::NetApi->new(

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
    warn "Exception when calling NetApi->public_net_addrs_get: $@\n";
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
use WWW::SwaggerClient::NetApi;
my $api_instance = WWW::SwaggerClient::NetApi->new(

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
    warn "Exception when calling NetApi->public_net_peers_get: $@\n";
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

