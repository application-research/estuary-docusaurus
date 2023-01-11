# WWW::SwaggerClient::CollectionsApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::CollectionsApi;
```

All URIs are relative to *https://api.estuary.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collections_coluuid_commit_post**](CollectionsApi.md#collections_coluuid_commit_post) | **POST** /collections/{coluuid}/commit | Produce a CID of the collection contents
[**collections_coluuid_contents_delete**](CollectionsApi.md#collections_coluuid_contents_delete) | **DELETE** /collections/{coluuid}/contents | Deletes a content from a collection
[**collections_coluuid_delete**](CollectionsApi.md#collections_coluuid_delete) | **DELETE** /collections/{coluuid} | Deletes a collection
[**collections_coluuid_get**](CollectionsApi.md#collections_coluuid_get) | **GET** /collections/{coluuid} | Get contents in a collection
[**collections_coluuid_post**](CollectionsApi.md#collections_coluuid_post) | **POST** /collections/{coluuid} | Add contents to a collection
[**collections_fs_add_post**](CollectionsApi.md#collections_fs_add_post) | **POST** /collections/fs/add | Add a file to a collection
[**collections_get**](CollectionsApi.md#collections_get) | **GET** /collections/ | List all collections
[**collections_post**](CollectionsApi.md#collections_post) | **POST** /collections/ | Create a new collection


# **collections_coluuid_commit_post**
> string collections_coluuid_commit_post(coluuid => $coluuid)

Produce a CID of the collection contents

This endpoint is used to save the contents in a collection, producing a top-level CID that references all the current CIDs in the collection.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $coluuid = 'coluuid_example'; # string | coluuid

eval { 
    my $result = $api_instance->collections_coluuid_commit_post(coluuid => $coluuid);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_coluuid_commit_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| coluuid | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_coluuid_contents_delete**
> string collections_coluuid_contents_delete(coluuid => $coluuid, contentid => $contentid, body => $body)

Deletes a content from a collection

This endpoint is used to delete an existing content from an existing collection. If two or more files with the same contentid exist in the collection, delete the one in the specified path

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $coluuid = 'coluuid_example'; # string | Collection ID
my $contentid = 'contentid_example'; # string | Content ID
my $body = WWW::SwaggerClient::Object::MainDeleteContentFromCollectionBody->new(); # MainDeleteContentFromCollectionBody | Variable to use when filtering for files (must be either 'path' or 'content_id')

eval { 
    my $result = $api_instance->collections_coluuid_contents_delete(coluuid => $coluuid, contentid => $contentid, body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_coluuid_contents_delete: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| Collection ID | 
 **contentid** | **string**| Content ID | 
 **body** | [**MainDeleteContentFromCollectionBody**](MainDeleteContentFromCollectionBody.md)| Variable to use when filtering for files (must be either &#39;path&#39; or &#39;content_id&#39;) | 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_coluuid_delete**
> collections_coluuid_delete(coluuid => $coluuid)

Deletes a collection

This endpoint is used to delete an existing collection.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $coluuid = 'coluuid_example'; # string | Collection ID

eval { 
    $api_instance->collections_coluuid_delete(coluuid => $coluuid);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_coluuid_delete: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| Collection ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_coluuid_get**
> string collections_coluuid_get(coluuid => $coluuid, dir => $dir)

Get contents in a collection

This endpoint is used to get contents in a collection. If no colpath query param is passed

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $coluuid = 'coluuid_example'; # string | coluuid
my $dir = 'dir_example'; # string | Directory

eval { 
    my $result = $api_instance->collections_coluuid_get(coluuid => $coluuid, dir => $dir);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_coluuid_get: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| coluuid | 
 **dir** | **string**| Directory | [optional] 

### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_coluuid_post**
> HASH[string,string] collections_coluuid_post(coluuid => $coluuid, content_i_ds => $content_i_ds)

Add contents to a collection

This endpoint adds already-pinned contents (that have ContentIDs) to a collection.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $coluuid = 'coluuid_example'; # string | coluuid
my $content_i_ds = [WWW::SwaggerClient::Object::ARRAY[int]->new()]; # ARRAY[int] | Content IDs to add to collection

eval { 
    my $result = $api_instance->collections_coluuid_post(coluuid => $coluuid, content_i_ds => $content_i_ds);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_coluuid_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| coluuid | 
 **content_i_ds** | **ARRAY[int]**| Content IDs to add to collection | 

### Return type

**HASH[string,string]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_fs_add_post**
> collections_fs_add_post(coluuid => $coluuid, content => $content, path => $path)

Add a file to a collection

This endpoint adds a file to a collection

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $coluuid = 'coluuid_example'; # string | Collection ID
my $content = 'content_example'; # string | Content
my $path = 'path_example'; # string | Path to file

eval { 
    $api_instance->collections_fs_add_post(coluuid => $coluuid, content => $content, path => $path);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_fs_add_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coluuid** | **string**| Collection ID | 
 **content** | **string**| Content | 
 **path** | **string**| Path to file | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_get**
> ARRAY[CollectionsCollection] collections_get()

List all collections

This endpoint is used to list all collections. Whenever a user logs on estuary, it will list all collections that the user has access to. This endpoint provides a way to list all collections to the user.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);


eval { 
    my $result = $api_instance->collections_get();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_get: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ARRAY[CollectionsCollection]**](CollectionsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collections_post**
> CollectionsCollection collections_post(body => $body)

Create a new collection

This endpoint is used to create a new collection. A collection is a representaion of a group of objects added on the estuary. This endpoint can be used to create a new collection.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CollectionsApi;
my $api_instance = WWW::SwaggerClient::CollectionsApi->new(

    # Configure API key authorization: bearerAuth
    api_key => {'Authorization' => 'YOUR_API_KEY'},
    # uncomment below to setup prefix (e.g. Bearer) for API key, if needed
    #api_key_prefix => {'Authorization' => 'Bearer'},
);

my $body = WWW::SwaggerClient::Object::MainCreateCollectionBody->new(); # MainCreateCollectionBody | Collection name and description

eval { 
    my $result = $api_instance->collections_post(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CollectionsApi->collections_post: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MainCreateCollectionBody**](MainCreateCollectionBody.md)| Collection name and description | 

### Return type

[**CollectionsCollection**](CollectionsCollection.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

