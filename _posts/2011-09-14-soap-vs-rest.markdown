---
layout: post
title: SOAP vs REST
date: 2011/09/14 21:41:06
category: Other
tags: [web service, soap, rest]
---
**Web service** is a software system designed to support interoperable machine-to-machine interaction over a network. 
**SOAP** (Simple Object Access Protocol) and **REST** (Representational State Transfer) are two popular approaches to 
implement web services. Before we compare the difference between them, let's start from their definitions.

### What's SOAP
SOAP is a protocol specification for exchanging structured information in the implementation of Web Services in computer networks. 
It relies on Extensible Markup Language (XML) for its message format, and usually relies on other Application Layer protocols, 
most notably Remote Procedure Call (RPC) and Hypertext Transfer Protocol (HTTP), for message negotiation and transmission. 
SOAP can form the foundation layer of a web services protocol stack, providing a basic messaging framework upon which web services can be built. 

### What's REST

REST is a style of software architecture for distributed hypermedia systems such as the World Wide Web. 
A RESTful web service (also called a RESTful web API) is a simple web service implemented using HTTP and the principles of REST. 
It is a collection of resources, with three defined aspects:

* the base URI for the web service, such as http://example.com/resources/
* the Internet media type of the data supported by the web service. This is often JSON, XML or YAML but can be any other valid Internet media type.
* the set of operations supported by the web service using HTTP methods (e.g., POST, GET, PUT or DELETE).

### SOAP vs REST

Here we go. Let's see their difference now. Unlike SOAP-based web services, there is no "official" standard for RESTful web services. 
This is because according to the definitions, REST is an architecture, unlike SOAP, which is a protocol. 
REST is an architectural style of large-scale networked software that takes advantage of the technologies and protocols of the World Wide Web. 
REST describes how distributed data objects, or resources, can be defined and addressed, stressing the easy exchange of information and scalability. 
Even though REST is not a standard, a RESTful implementation such as the Web can use standards like HTTP, URI, XML, etc.

### References
* <http://en.wikipedia.org/wiki/Web_service>
* <http://en.wikipedia.org/wiki/SOAP>
* <http://en.wikipedia.org/wiki/Representational_state_transfer>

