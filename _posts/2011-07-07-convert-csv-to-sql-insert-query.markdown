---
layout: post
title: Convert CSV to SQL insert query
date: 2011/07/07 00:04:11
category: Other
tags: vim
---
Recently I need to import data from CSV files into databases frequently. This post just records the process of conversion I'm using in Vim.

Assuming the CSV file is: 
{% highlight text %}
1, A , a
1, B , b
1, C , c
{% endhighlight %}

On each line, clean up all the spaces preceding and following the commas ",".  
`:%s/\s*,\s*/,/g`

Replace the beginning of each line by "(".  
`:%s/^/(`

Replace the end of each line by ")".  
`:%s/$/),`

Add double quotes (") to text fields.  
`:%s/\(.*\),\(.*\),\(.*\)/\1,"\2","\3"`

Or we can combine last three steps into one command.  
`:%s/\(.*\),\(.*\),\(.*\)/(\1,"\2","\3"),`

At last, complete the `INSERT` statement and don't forget to replace the last comma with semicolon ";".
{% highlight sql %}
INSERT INTO table_name VALUES
(1,"A","a"),
(1,"B","b"),
(1,"C","c");
{% endhighlight %}

