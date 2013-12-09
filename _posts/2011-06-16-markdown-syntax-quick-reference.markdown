---
layout: post
title: Markdown Syntax Quick Reference
date: 2011/06/16 20:40:45
category: Markdown
tags: markdown
---
> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz 
> allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert 
> it to structurally valid XHTML (or HTML)".  
> - Wikipedia

### Block elements

#### Paragraphs and line breaks

A paragraph is one or more consecutive lines, separated by blank line.
To insert a `<br />`, end a line with two or more spaces.

#### Headers

*Setext-style*

<p class="nomargin">Markdown:</p>
{% highlight text %}
This is an H1
=============
This is an H2
-------------
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<h1>This is an H1</h1>
<h2>This is an H2</h2>
{% endhighlight %}

*Atx-style*

<p class="nomargin">Markdown:</p>
{% highlight text %}
# This is an H1
## This is an H2
### This is an H3
#### This is an H4
##### This is an H5
###### This is an H6
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<h1>This is an H1</h1>
<h2>This is an H2</h2>
<h3>This is an H3</h3>
<h4>This is an H4</h4>
<h5>This is an H5</h5>
<h6>This is an H6</h6>
{% endhighlight %}

#### Blockquotes

<p class="nomargin">Markdown:</p>
{% highlight text %}
> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");
>
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<blockquote>
  <h2>This is a header.</h2>
<ol>
<li>This is the first list item.</li>
<li>This is the second list item.</li>
</ol>
<p>Here's some example code:</p>
<pre><code>return shell_exec("echo $input | $markdown_script");
</code></pre>
<p>This is the first level of quoting.</p>
<blockquote>
  <p>This is nested blockquote.</p>
</blockquote>
<p>Back to the first level.</p>
</blockquote>
{% endhighlight %}

#### Lists

Unordered lists use asterisks *, pluses +, or hyphens -

<p class="nomargin">Markdown:</p>
{% highlight text %}
*   Red
*   Green
*   Blue
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<ul>
<li>Red</li>
<li>Green</li>
<li>Blue</li>
</ul>
{% endhighlight %}


Ordered lists

<p class="nomargin">Markdown:</p>
{% highlight text %}
1.  Bird
2.  McHale
3.  Parish
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<ol>
<li>Bird</li>
<li>McHale</li>
<li>Parish</li>
</ol>
{% endhighlight %}

#### Code blocks

To produce a code block, indent every line of the block by at least 4 spaces or 1 tab.

<p class="nomargin">Markdown:</p>
{% highlight text %}
    tell application "Foo"
        beep
    end tell
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<pre><code>tell application "Foo"
    beep
end tell
</code></pre>
{% endhighlight %}

#### Horizontal rules

<p class="nomargin">Markdown:</p>
{% highlight text %}
* * *
***
*****
- - -
__________________________________
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<hr />
<hr />
<hr />
<hr />
{% endhighlight %}

### Span elements

#### Links

*inline-style*

<p class="nomargin">Markdown:</p>
{% highlight text %}
This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
{% endhighlight %}


<p class="nomargin">HTML:</p>
{% highlight html %}
<p>This is <a href="http://example.com/" title="Title">an example</a> inline link.</p>
<p><a href="http://example.net/">This link</a> has no title attribute.</p>
{% endhighlight %}


*reference-style*

<p class="nomargin">Markdown:</p>
{% highlight text %}
This is [an example][id] reference-style link.
[id]: http://example.com/  "Optional Title Here"
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p>This is <a href="http://example.com/" title="Optional Title Here">an example</a> reference-style link.</p>
{% endhighlight %}

<p class="nomargin">Markdown:</p>
{% highlight html %}
Visit [Daring Fireball][] for more information.
[Daring Fireball]: http://daringfireball.net/
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p>Visit <a href="http://daringfireball.net/">Daring Fireball</a> for more information.</p>
{% endhighlight %}

#### Emphasis

<p class="nomargin">Markdown:</p>
{% highlight text %}
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p><em>single asterisks</em></p>
<p><em>single underscores</em></p>
<p><strong>double asterisks</strong></p>
<p><strong>double underscores</strong></p>
{% endhighlight %}

#### Code

<p class="nomargin">Markdown:</p>
{% highlight text %}
Use the `printf()` function.
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p>Use the <code>printf()</code> function.</p>
{% endhighlight %}

#### Images

*inline-style*

<p class="nomargin">Markdown:</p>
{% highlight text %}
![Alt text](/path/to/img.jpg "Optional title")
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p><img src="/path/to/img.jpg" alt="Alt text" title="Optional title" /></p>
{% endhighlight %}

*reference-style*

<p class="nomargin">Markdown:</p>
{% highlight text %}
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p><img src="/path/to/img.jpg" alt="Alt text" title="" /></p>

<p><img src="/path/to/img.jpg" alt="Alt text" title="Optional title" /></p>
{% endhighlight %}


### Miscellaneous

#### Automatic links

<p class="nomargin">Markdown:</p>
{% highlight text %}
<http://example.com/>
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p><a href="http://example.com/">http://example.com/</a></p>
{% endhighlight %}

#### Backslash escapes

<p class="nomargin">The following characters could be escaped:</p>
{% highlight text %}
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
{% endhighlight %}

<p class="nomargin">Markdown:</p>
{% highlight text %}
\*literal asterisks\*
{% endhighlight %}

<p class="nomargin">HTML:</p>
{% highlight html %}
<p>*literal asterisks*</p>
{% endhighlight %}

### References
* [Daring Fireball: Markdown Syntax Documentation](http://daringfireball.net/projects/markdown/syntax/)
