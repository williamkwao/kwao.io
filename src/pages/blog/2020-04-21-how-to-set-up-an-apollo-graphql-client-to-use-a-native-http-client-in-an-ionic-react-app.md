---
templateKey: blog-post
title: How to Set Up an Apollo GraphQL Client to Use a Native HTTP Client in an
  Ionic/React App
date: 2020-03-17T02:16:01.967Z
description: Link a native plugin to your Apollo client to avoid CORS errors and
  run network requests in a background thread
featuredpost: true
featuredimage: /img/ionic-apollo.png
tags:
  - ionic
---
# Backstory

The recent release of [Ionic React](https://ionicframework.com/docs/react) had me very excited about hybrid applications, so I decided to dive in and build a demo mobile app. Things were going smoothly till I had a CORS error on my iOS simulator. I was under the assumption that I wouldn't encounter CORS issues because I was running this on a device. This reminded me of two facts:

* Ionic mobile applications still use the browser’s network layer since they are basically web apps.
* iOS enforces CORS restrictions on hybrid applications.

![Diagram displaying browser HTTP requests vs. native HTTP requests](/img/ionic-diagram.png "Diagram displaying browser HTTP requests vs. native HTTP requests")

With this in mind, I had two options. I could either add more CORS rules to my server to accept requests or use a native HTTP library to avoid these CORS restrictions. I chose the latter because I didn't want to add more relaxed CORS rules to my server, and I could also benefit from having my network calls run on a background thread.

- - -

# Advantages of Native Requests Over JavaScript Requests

According to Ionic and the owner of the [cordova-plugin-advanced-http](https://github.com/silkimen/cordova-plugin-advanced-http) repo, these are the advantages of using native requests. I definitely used native requests in my repo to bypass CORS restrictions.

* Ability to implement [SSL / TLS Pinning](https://labs.nettitude.com/tutorials/tls-certificate-pinning-101/)
* [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) restrictions do not apply
* Handling of HTTP code 401 — read more at [Issue CB-2415](https://issues.apache.org/jira/browse/CB-2415)
* Background threading — all requests are done in a background thread

- - -

# Requirements

* Set up an Ionic React project. If you don’t have one, you follow [these instructions](https://ionicframework.com/docs/react/quickstart).
* Install the [Cordova HTTP plugin](https://www.npmjs.com/package/cordova-plugin-advanced-http).
* Install Apollo Client.

# Install the Cordova HTTP Plugin

```
npm i cordova-plugin-advanced-http
ionic cap sync
```

# Initial Apollo Client Setup

```
npm i apollo-boost graphql
```

The folks at Apollo have done an amazing job with designing the Apollo Client API. It’s designed to be composable, so you can compose the client to use your preferred network layer. The only caveat is the network layer you pass to Apollo has to fit the web [Fetch API interface](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

- - -

# Set Up the Apollo Client With the Native Cordova Native HTTP Plugin

We can now build a wrapper on the native Cordova HTTP plugin to act like the Fetch API spec.

I used [http-status-codes](https://www.npmjs.com/package/http-status-codes) library to get the text representation of HTTP status codes. You can install it by running the command below.

```
npm i http-status-codes
```

```typescript
import HttpStatus from "http-status-codes";

export const cordovaHttpFetchImpl = async (url: string, options: any) => {
  let cordova: any = window.cordova;
  //if cordova is not available use web fetch
  if (!cordova) {
    return fetch(url, options);
  }
  let http = cordova.plugin.http;

  http.setDataSerializer("json");

  options.data = JSON.parse(options.body);
  options.method = options.method.toLowerCase();

  let response: any = await new Promise((resolve, reject) => {
    http.sendRequest(url, options, resolve, reject);
  });

  const responseBody =
    typeof response.data === `object` ? JSON.stringify(response.data) : response.data;
  const headers = new Headers();
  Object.entries(response.headers).forEach(function([key, value]) {
    headers.append(key, <string>value);
  });

  return new Response(responseBody, {
    status: response.status,
    statusText: HttpStatus.getStatusText(response.status),
    headers
  });
};
```

Let's break this down.

* **Line 6**: (Optional) This check returns the Fetch API if Cordova is not detected. This is for running in the browser with a CORS plugin.
* **Line 13:**Copy the body passed in by Apollo into the data key, since the HTTP plugin uses the data key for the request body.
* **Line 16: W**rap the HTTP plugin call in a promise and execute the request.
* Wrap the response from the HTTP plugin in a Fetch [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) interface and return it.

- - -

# Wrapping Up

Now we have our Fetch implementation of the Cordova native HTTP client, we can wire it up with our Apollo Client instantiation.

```typescript
import ApolloClient from "apollo-boost";
import { cordovaHttpFetchImpl } from "./cordova-http-fetch";

export let client = new ApolloClient({
  uri: "https://yourgraphqlapi.com",
  fetch: cordovaHttpFetchImpl,
});
```

Voilà! In this file, we now swap the initial Fetch with our Cordova HTTP Fetch implementation. You should now be able to make your GraphQL calls with Apollo Client through the native HTTP client, and avoid CORS errors.

I have set up a [demo repo on Github](https://github.com/williamkwao/ionic-react-apollo-yelp) using Yelp’s GraphQL API since it does not support CORS. Check it out if you want to see how it all comes together in a project.



- - -

# Possible Improvements

* Convert this into its own Cordova plugin so we can have a Fetch Interface native HTTP plugin.
* Make a pull request to [Cordova-plugin-advanced-HTTP](https://www.npmjs.com/package/cordova-plugin-advanced-http) repo as a feature. You can follow the work currently being done by the Capacitor team on this [pull request](https://github.com/ionic-team/capacitor/pull/2495).
* Write a native [Capacitor](https://capacitor.ionicframework.com/) HTTP client plugin with a Fetch interface implementation. This will be good since Ionic is pushing Capacitor as the successor to Cordova, and it will be.



- - -





# Awards

* [Axios Fetch](https://github.com/lifeomic/axios-fetch): I drew inspiration from this repo since this was also implemented as a way to use [Axios](https://github.com/axios/axios) as the network layer for Apollo.
* [Cordova-plugin-advanced-HTTP](https://www.npmjs.com/package/cordova-plugin-advanced-http): The Cordova plugin that enables you to make HTTP requests with a platform-native client.
* [Ionic](https://ionicframework.com/): For building an awesome framework that democratizes and makes mobile app development accessible to web developers.
* [Apollo GraphQL](https://www.apollographql.com/docs/react/): For making a very composable GraphQL client library that makes it possible to have solutions like this.