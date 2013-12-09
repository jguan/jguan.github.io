---
layout: post
title: Simplest cross-browser console.log() caller
date: 2011/07/21 21:41:33
category: Javascript 
tags: javascript
---
Simply embed this function into global JS file and call `log(argument)` to print variable in the console.
{% highlight javascript %}
function log(msg) {
	return; // comment this out to enable debugging
	if (window.console) {
		console.log(msg);
	} else {
		alert(msg);
	}
}
{% endhighlight %}
To get more powerful `log()`, please check [Paul's blog](http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/).
