# WWW::SwaggerClient::PeersApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::PeersApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_peering_peers_delete**](PeersApi.md#admin_peering_peers_delete) | **DELETE** /admin/peering/peers | Remove peers on Peering Service
[**admin_peering_peers_get**](PeersApi.md#admin_peering_peers_get) | **GET** /admin/peering/peers | List all Peering peers
[**admin_peering_peers_post**](PeersApi.md#admin_peering_peers_post) | **POST** /admin/peering/peers | Add peers on Peering Service
[**admin_peering_start_post**](PeersApi.md#admin_peering_start_post) | **POST** /admin/peering/start | Start Peering
[**admin_peering_status_get**](PeersApi.md#admin_peering_status_get) | **GET** /admin/peering/status | Check Peering Status
[**admin_peering_stop_post**](PeersApi.md#admin_peering_stop_post) | **POST** /admin/peering/stop | Stop Peering


# **admin_peering_peers_delete**
> admin_peering_peers_delete(body => $body)

Remove peers on Peering Service

This endpoint can be used to remove a Peer from the Peering Service

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PeersApi;
my $api_instance = WWW::SwaggerClient::PeersApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $body = [WWW::SwaggerClient::Object::ARRAY[string]->new()]; # ARRAY[string] | Peer ids

eval { 
    $api_instance->admin_peering_peers_delete(body => $body);
};
if ($@) {
    warn "Exception when calling PeersApi->admin_peering_peers_delete: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ARRAY[string]**| Peer ids | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_peering_peers_get**
> admin_peering_peers_get()

List all Peering peers

This endpoint can be used to list all peers on Peering Service

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PeersApi;
my $api_instance = WWW::SwaggerClient::PeersApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->admin_peering_peers_get();
};
if ($@) {
    warn "Exception when calling PeersApi->admin_peering_peers_get: $@\n";
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

# **admin_peering_peers_post**
> admin_peering_peers_post()

Add peers on Peering Service

This endpoint can be used to add a Peer from the Peering Service

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PeersApi;
my $api_instance = WWW::SwaggerClient::PeersApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->admin_peering_peers_post();
};
if ($@) {
    warn "Exception when calling PeersApi->admin_peering_peers_post: $@\n";
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

# **admin_peering_start_post**
> admin_peering_start_post()

Start Peering

This endpoint can be used to start the Peering Service

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PeersApi;
my $api_instance = WWW::SwaggerClient::PeersApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->admin_peering_start_post();
};
if ($@) {
    warn "Exception when calling PeersApi->admin_peering_start_post: $@\n";
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

# **admin_peering_status_get**
> admin_peering_status_get()

Check Peering Status

This endpoint can be used to check the Peering status

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PeersApi;
my $api_instance = WWW::SwaggerClient::PeersApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->admin_peering_status_get();
};
if ($@) {
    warn "Exception when calling PeersApi->admin_peering_status_get: $@\n";
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

# **admin_peering_stop_post**
> admin_peering_stop_post()

Stop Peering

This endpoint can be used to stop the Peering Service

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::PeersApi;
my $api_instance = WWW::SwaggerClient::PeersApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->admin_peering_stop_post();
};
if ($@) {
    warn "Exception when calling PeersApi->admin_peering_stop_post: $@\n";
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

