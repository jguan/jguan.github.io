---
layout: post
title: How to change the target of a symbolic link in Linux
date: 2011/06/24 20:14:36
category: Linux
tags: symlink
---
The common way is to delete the original symlink then re-create it.
{% highlight bash %}
rm symlink; ln -s target symlink
{% endhighlight %}
But if you want to do it more conveniently and efficiently, you can *force* `ln` command to change the target of the soft link without deleting the old one explicitly. For example:
{% highlight bash %}
# original symlink
$ ln -s /path/to/target old_symlink

# change to the new symlink
$ ln -fs /path/to/target new_symlink
{% endhighlight %}

### References
* Linux Man pages
