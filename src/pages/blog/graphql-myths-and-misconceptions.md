---
templateKey: blog-post
title: GraphQL Myths and Misconceptions
date: 2020-04-26T02:07:56.809Z
description: Clearing up the confusion around GraphQL
featuredpost: true
featuredimage: /img/woman-in-white-cap-sleeved-shirt-blowing-dust-632722.jpg
tags:
  - graphql
---
So, tell me why I was having a debate with a staff engineer on my team about the benefits of [GraphQL](https://graphql.org/) and he tried to shut it down by saying: You only like it because it is good for front-end developers.

Honestly, I was a little bit upset because I thought it was one of the few times in my career where another engineer who knew only server-side development was looking down on my opinions because I love building user interfaces.

After giving it a little thought, I realized he was right. GraphQL is really good for the client-side. It is also great for the server-side but that wasn’t the focus of our conversation.

When comparing both GraphQL and REST, one observation that can be made is that a typical REST service is optimized for the server whiles GraphQL services are optimized for both the client and server-side development.

In order words, GraphQL services are designed to make clients happy and efficient.

This is not the first time I’ve had discussions like this so I’d love to go ahead and discuss a few misconceptions about GraphQL that I’ve encountered in my GraphQL evangelism journey.

- - -

# 1. You Are Exposing Your Whole Database

“But William, with GraphQL, you are exposing your whole database to clients to do whatever they want.”

You are not exposing your whole database. I’ve had conversations with people who sarcastically describe GraphQL as a way to expose your whole database and allow clients to query whatever they want from your database.

This is usually described as a con and makes it seem like GraphQL is basically a database connector for your front end. There are are a few problems with this definition.

## **You can have a GraphQL service without a database**

Just as GraphQL services do not have to be based on Graph databases, you can have a GraphQL service without a database. It can be used for services that perform computations and processing or proxy to other services.

## **You design your own schema**

Since you design your own GraphQL schema, the service is only going to expose what you want to be accessible through your schema.

## **You can limit the complexity of a user's query**

Since GraphQL queries can be nested and batched, there are tools that enable you to enforce some restrictions on the complexity of the query.

For example, there are tools like [GraphQL Query Complexity](https://github.com/slicknode/graphql-query-complexity) that help protect against bad actors by limiting the complexity of queries and preventing queries that are overly nested.

- - -

# 2. GraphQL Is Not Secure

A GraphQL service is as secure as you make it. One thing that needs to be understood is that GraphQL is just one part of your application; the query layer.

This is one thing that was reiterated by the creators of GraphQL when they spoke with other companies like Airbnb to see how GraphQL was being used in the wild.

By the time Facebook started using GraphQL, they already had well-built security and data fetching layers that GraphQL could fit into so they didn’t find the need to emphasize these things in the [GraphQL specification](https://spec.graphql.org/June2018/).

They assumed all the layers and tooling they had at Facebook were obvious and available to other developers and companies. This made it difficult for the community to come to a consensus on how to handle authentication and authorization on a GraphQL application.

The good news is many of the security methods and applications we have come to love in our REST services can be also be used in similar ways to protect GraphQL services.

Here are a few ways you can implement security (Some are very similar to what we already do for REST services)

* [JSON Web Tokens](https://jwt.io/introduction/): Just pass these through the header as you would for your REST service.
* API keys: You can implement your own API key system or proxy the service through an API gateway to secure application.[Yelp’s public GraphQL API](https://www.yelp.com/developers/graphql/guides/intro)i s a great example of this.
* [GraphQL directives](http://spec.graphql.org/June2018/#sec-Language.Directives): You can use GraphQL directives as interceptors to solve the problem of enforcing access permissions to parts of your graph.[Apollo GraphQL](https://www.apollographql.com/) has a great example of this by implementing an auth directive.

More on using directives to enforce access permissions:

```graphql
directive @auth(
  requires: Role = ADMIN,
) on OBJECT | FIELD_DEFINITION

enum Role {
  ADMIN
  REVIEWER
  USER
  UNKNOWN
}

type User @auth(requires: USER) {
  name: String
  #can be accessed by user with admin rights only
  banned: Boolean @auth(requires: ADMIN) 
  #can be accessed by user with reviewer rights only
  canPost: Boolean @auth(requires: REVIEWER) 
}
```

In the example above, copied from [Apollo GraphQL’s documentation,](https://www.apollographql.com/docs/graphql-tools/schema-directives/#enforcing-access-permissions) you can see that access is controlled by the user’s role using the `@auth`directive. The banned field can only be accessed by `ADMIN`level users while the `canPost`field can only be accessed by users with `REVIEWER`  level roles.

- - -

# 3. GraphQL Is Only for Mobile and Web Apps

“If you do not have multiple mobile and web clients, there is no reason to use GraphQL.”

GraphQL was originally born with Facebook’s shift into the mobile world. It has seen great adoption from the front end and full stack world which makes it easy for some enterprise architects to dismiss it as a phony trend in the front-end world.

There is nothing that limits you from using GraphQL for server-to-server connections.

Due to the great developer experience of GraphQL services, some great developers have built GraphQL implementations for already existing solutions.

Here are a few examples.

* [GraphQL-Kafka-Subscriptions](https://github.com/ancashoria/graphql-kafka-subscriptions): This is a library that enables you to query and publish topics to [Kafka](https://kafka.apache.org/) using GraphQL subscriptions.
* [GraphQL-Redis-Subscriptions](https://github.com/davidyaha/graphql-redis-subscriptions): An interface to subscribe to a [Redis](https://redis.io/) message broker.
* [Rejoiner](https://rejoiner.io/): Uniform GraphQL schema from [gRPC](https://grpc.io/) microservices.

- - -

# 4. HTTP/2 Is Going to Kill GraphQL

https://twitter.com/philsturgeon/status/1177804924064804864

Oh yeah. This is a big one. One of the major selling points of GraphQL is that it enables clients to batch and fetch multiple resources in one HTTP request. This is appealing because making an HTTP request is very expensive.

With HTTP/2, the cost of establishing an HTTP connection is greatly reduced so the appeal of this selling point diminished.

So, does this mean that GraphQL will be dead and pointless once everyone starts using HTTP/2? I don’t think so. Even though, being able to batch queries is not the only reason why people use and love GraphQL.

The whole developer experience of GraphQL is awesome. Features like having a typed schema and a standard language to query APIs are also reasons why developers love GraphQL. Check out this well-written article if you want to take a deeper dive into this [medium post](https://medium.com/@__xuorig__/is-graphql-still-relevant-in-an-http2-world-64964f207b8). I think, in the long run, HTTP/2 will actually help improve the capabilities and efficiency of GraphQL instead of killing it.

- - -

# Conclusion

GraphQL is definitely not perfect but I think it has a lot to offer when it comes to improving the developer experience and how we build products.

Thanks for reading this post and let me know if you have any thoughts on this or there is anything I left out. Stay safe and wash your hands!