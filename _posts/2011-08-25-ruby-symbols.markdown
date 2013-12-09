---
layout: post
title: A Perl programmer's understanding of Ruby symbol
date: 2011/08/25 23:36:04
category: Ruby 
tags: ruby
---
Symbol is special data structure in Ruby and used widely in Rails. 
As a Perl programmer and Ruby/Rails learner, this new concept made me feel confused quite a while. So let's sort it out now.

### What is Symbol in Ruby
A symbol looks like a variable name with a prefixed colon, like :action, :items. 
It is the most basic Ruby object you can create. It's just a name and an internal ID. 
Symbols are useful because a given symbol name refers to the same object throughout a Ruby program.

### What's the difference between Symbols and Strings
Symbols are more efficient than Strings. Everything in Ruby is object so two strings with the same contents are two different objects, 
but for any given name there is only one Symbol object. This can save both time and memory. 

### Using Symbols as Hash Keys
Due to the advantage of Symbols, it's a good idea to use Symbols instead of Strings as hash keys in Ruby. 
The following 2 examples are using Strings and Symbols as hash keys respectively.

{% highlight ruby %}
user1 = { "name" => "Jeremy Guan", "email" => "example@example.com" }

user2 = { :name => "Jeremy Guan", :email => "example@example.com" }
{% endhighlight %}

### References
* <http://rubylearning.com/satishtalim/ruby_symbols.html>
* <http://ruby.railstutorial.org/chapters/rails-flavored-ruby#sec:hashes_and_symbols>

