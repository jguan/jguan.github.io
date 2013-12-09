---
layout: post
title: Examples of Perl progress bar 
date: 2011/07/24 23:36:21
category: Perl
tags: perl
---

{% highlight perl %}
#!/usr/bin/perl
use strict;
use warnings;
$| = 1;
my $max = 10;
# 1. dots
for (1..$max) {
	print ".";
	print " Complete!\n" if ($_ == $max);
	sleep(1);
}
# output: " .......... Complete!"
#
# 2. simple percentage
for(1..$max) {
	my $percent = $_/$max*100;
	print "\r $percent %";
	sleep(1);
}
print "\n";  
# output: " 100 %"
#
$max = 100;
#
# 3. spinning bar
my @progress_symbol = ('-','\\','|','/');
my $n = 0;
for (my $i=1; $i<=$max; $i++){
	print "\r $progress_symbol[$n] $i %";
	$n = ($n>=3) ? 0 : $n+1;
	select(undef, undef, undef, 0.1);
}
print "\n";
# output: " / 100 %"
#
# 4. dynamic progress indicator 
for (my $i=1; $i<=$max; $i++){
	proc_bar($i,$max);
	select(undef, undef, undef, 0.2);
}
print "\n";
sub proc_bar{
	local $| = 1;
	my $i = $_[0] || return 0;
	my $n = $_[1] || return 0;
	print "\r\033[36m[\033[33m".("|" x int(($i/$n)*50)).
		(" " x (50 - int(($i/$n)*50)))."\033[36m]";
	printf("%2.1f%%\033[0m",$i/$n*100);
	local $| = 0;
}
# output: "[||||||||||||||||||||||||||||||||||||||||||||||||||]100.0%"
{% endhighlight %}
