---
layout: post
title: How to Fix 'Got a packet bigger than max_allowed_packet bytes' MySQL Error
date: 2011/08/08 19:54:20
category: MySQL
tags: mysql
---
When I tried to import data from a dump file into a new MySQL database, 
I got "Got a packet bigger than 'max_allowed_packet' bytes" error. 
Apparently 'max_allowed_packet' needs to be increased 
and I don't have the change permanently. To fix that, just run 
the following commands in MySQL console:

{% highlight sql %}
set global net_buffer_length=9999999; 
set global max_allowed_packet=9999999999;
{% endhighlight %}

Or replace the values with some very large numbers work for you. Don't quit the MySQL console yet and run the importing command on another terminal. 
The problem should be gone now.

