---
layout: post
title: Revert committed change in Subversion
date: 2011/06/20 20:37:31
category: VCS
tags: svn
---
For whatever reason, maybe just committed unexpected change accidentally into SVN repository like me today, 
you want to revert the files to last or any previous version. The best solution is to use `svn merge` command. 
For example, you hope to change "world.txt" from current revision 2012 to 2011, you could do: 

{% highlight bash %}
# be sure you've updated
$ svn up

# run any of the following equivalent commands
$ svn merge -c -2012 path/to/world.txt
$ svn merge --change -2012 path/to/world.txt
$ svn merge --r 2012:2011 path/to/world.txt
$ svn merge --revision 2012:2011 path/to/world.txt

# of course, don't forget committing the change
$ svn commit -m "revert change committed in r2012"
{% endhighlight %}

The world is safe now.

### References
* <http://svnbook.red-bean.com/nightly/en/svn-book.html#svn.branchmerge.basicmerging.undo>

