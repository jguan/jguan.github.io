---
layout: post
title: Excluding NULL values when using NOT IN operator
date: 2011/07/05 22:20:13
category: Database
tags: sql
---
Let's see an example retrieving the elements exist in Table *A* but not in Table *B* first.
{% highlight sql %}
-- Input
-----------------------------------
select * 
from A
-----------------------------------
-- Output
----------
name
----------
Bing
Google
Yahoo
----------
-- Input
-----------------------------------
select * 
from B
-----------------------------------
-- Output
----------
name   
----------
Bing 
Yahoo
NULL
----------
-- Input
-----------------------------------
select name 
from A 
where name not in (
    select name 
	from B 
	where name is not null
)
-----------------------------------
-- Output
----------
name
----------
Google
----------
-----------------------------------
{% endhighlight %}
In the last query, if you remove *"where name is not null"* clause, you won't get expected result. 
The reason is when comparing "Google" in Table *A* with Table *B*, the logic is equivalent to:  
*"Google" <> "Bing" (TRUE) and "Google" <> "Yahoo" (TRUE) and "Google" <> null (UNKNOWN)*  
This leads to *UNKNOWN* finally in `WHERE` clause so nothing will return. In a word, just remember to 
exclude **NULL** values when using `NOT IN` in `WHERE` clause.

