---
layout: post
title: Stop git tracking your files 
date: 2011/06/24 00:04:47
category: VCS
tags: git
---
I'm a new git user. The question came up to me is after I created a git repository with `git init`,
I suddenly changed my mind. That is to say, I don't want git to track the directories and files in
this repository but of course I don't want to lose my work either. git itself don't have a command
for this situation but the fix is quit easy actually. As git keeps all of its files in the .git directory, 
what I need to do is just to remove it.

{% highlight bash %}
# Just make sure you are doing the right thing, because all info from git will lose after doing this.
$ rm -rf .git
{% endhighlight %}

### References
* <http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide#320140>

