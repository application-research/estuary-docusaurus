# WWW::SwaggerClient::AutoretrieveApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::AutoretrieveApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_autoretrieve_init_post**](AutoretrieveApi.md#admin_autoretrieve_init_post) | **POST** /admin/autoretrieve/init | Register autoretrieve server
[**admin_autoretrieve_list_get**](AutoretrieveApi.md#admin_autoretrieve_list_get) | **GET** /admin/autoretrieve/list | List autoretrieve servers
[**autoretrieve_heartbeat_post**](AutoretrieveApi.md#autoretrieve_heartbeat_post) | **POST** /autoretrieve/heartbeat | Marks autoretrieve server as up


# **admin_autoretrieve_init_post**
> admin_autoretrieve_init_post(addresses => $addresses, pub_key => $pub_key)

Register autoretrieve server

This endpoint registers a new autoretrieve server

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::AutoretrieveApi;
my $api_instance = WWW::SwaggerClient::AutoretrieveApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $addresses = WWW::SwaggerClient::Object::string->new(); # string | Autoretrieve's comma-separated list of addresses
my $pub_key = WWW::SwaggerClient::Object::string->new(); # string | Autoretrieve's public key

eval { 
    $api_instance->admin_autoretrieve_init_post(addresses => $addresses, pub_key => $pub_key);
};
if ($@) {
    warn "Exception when calling AutoretrieveApi->admin_autoretrieve_init_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addresses** | **string**| Autoretrieve&#39;s comma-separated list of addresses | 
 **pub_key** | **string**| Autoretrieve&#39;s public key | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_autoretrieve_list_get**
> admin_autoretrieve_list_get()

List autoretrieve servers

This endpoint lists all registered autoretrieve servers

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::AutoretrieveApi;
my $api_instance = WWW::SwaggerClient::AutoretrieveApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    $api_instance->admin_autoretrieve_list_get();
};
if ($@) {
    warn "Exception when calling AutoretrieveApi->admin_autoretrieve_list_get: $@\n";
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

# **autoretrieve_heartbeat_post**
> autoretrieve_heartbeat_post(token => $token)

Marks autoretrieve server as up

This endpoint updates the lastConnection field for autoretrieve

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::AutoretrieveApi;
my $api_instance = WWW::SwaggerClient::AutoretrieveApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $token = 'token_example'; # string | Autoretrieve's auth token

eval { 
    $api_instance->autoretrieve_heartbeat_post(token => $token);
};
if ($@) {
    warn "Exception when calling AutoretrieveApi->autoretrieve_heartbeat_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **string**| Autoretrieve&#39;s auth token | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

