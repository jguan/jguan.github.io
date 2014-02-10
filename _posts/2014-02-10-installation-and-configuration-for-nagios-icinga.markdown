---
layout: post
title: Installation and configuration for Nagios/Icinga
date: 2012-10-25 17:15:45
category: Linux
tags: [Nagios, Icinga]
---

### 0) Prerequisites

* Apache
* PHP
* GCC compiler
* GD development libraries

You can use yum to install these packages by running the following commands (as root):

{% highlight bash %}
yum install httpd php
yum install gcc glibc glibc-common
yum install gd gd-devel
yum install libjpeg libjpeg-devel libpng libpng-devel
yum install net-snmp net-snmp-devel net-snmp-utils
{% endhighlight %}

You also might need these packages if you don't have them yet:

{% highlight bash %}
yum install make
yum install openssl-devel
{% endhighlight %}

### 1) Create Account Information

Become the root user.

{% highlight bash %}
su -l
{% endhighlight %}

Create a new nagios/icinga user account and give it a password.

{% highlight bash %}
/usr/sbin/useradd -m nagios
passwd nagios
{% endhighlight %}

OR

{% highlight bash %}
/usr/sbin/useradd -m icinga
passwd icinga
{% endhighlight %}

Create a new nagcmd/icinga-cmd group for allowing external commands to be submitted through the web interface. Add both the nagios/icinga user and the apache user to the group.

{% highlight bash %}
/usr/sbin/groupadd nagcmd
/usr/sbin/usermod -a -G nagcmd nagios
/usr/sbin/usermod -a -G nagcmd apache
{% endhighlight %}

OR

{% highlight bash %}
/usr/sbin/groupadd icinga-cmd
/usr/sbin/usermod -a -G icinga-cmd icinga
/usr/sbin/usermod -a -G icinga-cmd apache
{% endhighlight %}

### 2)  Add RPMforge repo

Find the appropriate rpmforge-release package for your distribution at [http://repoforge.org/use/](http://repoforge.org/use/). For example, you can install it like:

{% highlight bash %}
rpm -ivh http://pkgs.repoforge.org/rpmforge-release/rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm
{% endhighlight %}

### 3) Install Nagios/Icinga

{% highlight bash %}
yum install nagios
{% endhighlight %}

OR

{% highlight bash %}
yum install icinga icinga-gui
{% endhighlight %}

### 4) Customize Configuration

Edit the /etc/nagios/objects/contacts.cfg or  /etc/icinga/objects/contacts.cfg config file with your favourite editor and change the email address associated with the icingaadmin contact definition to the address you'd like to use for receiving alerts.

### 5) Configure the Web Interface

Create a nagiosadmin/icingaadmin account for logging into the web interface. Remember the password you assign to this account - you'll need it later.

{% highlight bash %}
htpasswd -c /etc/nagios/htpasswd.users nagiosadmin
{% endhighlight %}

OR

{% highlight bash %}
htpasswd -c /etc/icinga/htpasswd.users icingaadmin
{% endhighlight %}

Restart Apache to make the new settings take effect.

{% highlight bash %}
service httpd restart
{% endhighlight %}

### 6) Install the Nagios Plugins

For both Nagios and Icinga, you need to install Nagios plugins.

{% highlight bash %}
yum install nagios-plugins-all
{% endhighlight %}

### 7) Modify SELinux Settings

See if SELinux is in Enforcing mode.

{% highlight bash %}
getenforce
{% endhighlight %}

Put SELinux into Permissive mode.

{% highlight bash %}
setenforce 0
{% endhighlight %}

To make this change permanent, you'll have to modify the settings in /etc/selinux/config and reboot.


### 8) Start Nagios/Icinga

Add Nagios/Icinga to the list of system services and have it automatically start when the system boots.

{% highlight bash %}
chkconfig --add nagios
chkconfig nagios on
{% endhighlight %}

OR

{% highlight bash %}
chkconfig --add icinga 
chkconfig icinga on 
{% endhighlight %}

Verify the sample Nagios/Icinga configuration files.

{% highlight bash %}
/usr/bin/nagios -v /etc/nagios/nagios.cfg
{% endhighlight %}

OR

{% highlight bash %}
/usr/bin/icinga -v /etc/icinga/icinga.cfg
{% endhighlight %}

If there are no errors, start Nagios.

{% highlight bash %}
service nagios start
{% endhighlight %}

OR

{% highlight bash %}
service icinga start
{% endhighlight %}

### 9) Login to the Web Interface

You should now be able to access the web interface at the URL below. You'll be prompted for the username (nagiosadmin/icingaadmin) and password you specified earlier.

[http://localhost/nagios/](http://localhost/nagios/) OR [http://localhost/icinga/](http://localhost/icinga/)

Click on the "Service Detail" navbar link to see details of what's being monitored on your local machine. It will take a few minutes to check all the services associated with your machine, as the checks are spread out over time.


### Monitor Remote Linux Host using Nagios/Icinga

#### 1. Install and configure Nagios Plugins and NRPE on the remote host

1) Create nagios account

{% highlight bash %}
useradd nagios
passwd nagios
{% endhighlight %}

2) Install nagios-plugin and nrpe

{% highlight bash %}
yum install nrpe
yum install nagios-plugins-all
{% endhighlight %}

3) Edit nrpe.cfg to allow your nagios/icinga server and customise configuration

Edit nrpe configuration file:

{% highlight bash %}
vi /etc/nagios/nrpe.cfg
{% endhighlight %}

Find line allowed_hosts . it is a comma separated list. add your nagios server ip to the list

{% highlight bash %}
allowed_hosts=127.0.0.1,192.168.1.100
{% endhighlight %}

For customised configuration, please see nrpe.cfg.

4) IPTables

If you are running iptables or a firewall between the server and host, make sure that the host is allowing port 5666 from the server's IP address.

5) Start nrpe service on system start up

{% highlight bash %}
chkconfig nrpe on
{% endhighlight %}

6)  Start nrpe service

{% highlight bash %}
service nrpe start
{% endhighlight %}

#### 2. Configure on the monitoring server to monitor remote host

1)  Install nrpe

{% highlight bash %}
yum install nrpe
{% endhighlight %}

2) Check check_nrpe on the monitoring server

Verify whether monitoring server can talk to the remotehost. For example:

{% highlight bash %}
/usr/lib64/nagios/plugins/check_nrpe -H 192.168.1.3
NRPE v2.13
{% endhighlight %}

3) Create host and service definition for remotehost

Create a new configuration file /etc/nagios/objects/remotehost.cfg OR /etc/icinga/objects/remotehost.cfg to define the host and service definition for this particular remotehost.

For more details, please see scilinux2.cfg.

4) Restart the nagios/Icinga service

{% highlight bash %}
service nagios restart OR service Icinga restart 
{% endhighlight %}

### Examples of customising configuration

#### 1. Check disk space on local host

{% highlight bash %}
# Define a service to check the disk space of the root partition
# on the local machine.
# Warning if < 25% free, critical if < 10% free space on partition.
define service{
        use                   local-service         ; Name of service template to use
        host_name             localhost
        service_description   Root Partition
        check_command         check_local_disk!25%!10%!/
        }
{% endhighlight %}

#### 2. Check Apache on local host

{% highlight bash %}
# Define a service to check HTTP on the local machine.
define service{
        use                   local-service         ; Name of service template to use
        host_name             localhost
        service_description   HTTP
        check_command         check_http
        }
{% endhighlight %}

#### 3. Check how many Apache processes are running on local host

1) Add check_daemons in /etc/nagios/objects/commands.cfg OR /etc/icinga/objects/commands.cfg

{% highlight bash %}
#check daemons
define command{
        command_name    check_daemons
        command_line    $USER1$/check_procs -c $ARG1$:$ARG2$ -C $ARG3$
        }
{% endhighlight %}

2) Add service in /etc/nagios/objects/localhost.cfg OR /etc/icinga/objects/localhost.cfg

{% highlight bash %}
# Define a service to check the number of currently running Apache procs
# on the local machine. Critical if the number is not in the range from 1 to 20

define service{
        use                    local-service         ; Name of service template to use
        host_name              localhost
        service_description    HTTP daemons
        check_command          check_daemons!1!20!httpd
        }
{% endhighlight %}

#### 4. Check PostgreSQL on remote host

1) Add check_nrpe in /etc/nagios/objects/commands.cfg OR /etc/icinga/objects/commands.cfg on monitoring server

To check remote host, check_nrpe is essential.

Note: Make sure check_nrpe is in /usr/lib64/nagios/plugins($USER1$)

{% highlight bash %}
#check nrpe
define command{
        command_name    check_nrpe
        command_line    $USER1$/check_nrpe -H $HOSTADDRESS$ -c $ARG1$
        }
{% endhighlight %}

2) Add check_pgsql in /etc/nagios/nrpe.cfg on remote host

{% highlight bash %}
command[check_pgsql]=/usr/lib64/nagios/plugins/check_pgsql
{% endhighlight %}

3) Check check_pgsql on monitoring server

{% highlight bash %}
/usr/lib64/nagios/plugins/check_nrpe -H scilinux2 -c check_pgsql
{% endhighlight %}

If you see the error like:

{% highlight bash %}
CRITICAL - no connection to 'template1' (FATAL:  Ident authentication failed for user "nrpe")
{% endhighlight %}

Add user 'nrpe' on remote host.

{% highlight bash %}
su - postgres
createuser nrpe
{% endhighlight %}

4)  Add service in /etc/nagios/objects/scilinux2.cfg OR /etc/icinga/objects/scilinux2.cfg

{% highlight bash %}
define service{
        use                    generic-service
        host_name              scilinux2
        service_description    check-pgsql
        check_command          check_nrpe!check_pgsql
        }
{% endhighlight %}

Note: All plugins in /usr/lib64/nagios/plugins, run them with -h for help. Fo example:

{% highlight bash %}
/usr/lib64/nagios/plugins/check_disk -h
{% endhighlight %}

### References

* [http://nagios.sourceforge.net/docs/3_0/quickstart-fedora.html](http://nagios.sourceforge.net/docs/3_0/quickstart-fedora.html)
* [http://docs.icinga.org/latest/en/quickstart-icinga.html](http://docs.icinga.org/latest/en/quickstart-icinga.html)
* [http://blog.roozbehk.com/post/25059446631/nrpe-monitoring-linux-remote-hosts-nagios](http://blog.roozbehk.com/post/25059446631/nrpe-monitoring-linux-remote-hosts-nagios)
* [http://www.thegeekstuff.com/2008/06/how-to-monitor-remote-linux-host-using-nagios-30/](http://www.thegeekstuff.com/2008/06/how-to-monitor-remote-linux-host-using-nagios-30/)
* [http://wiki.tyk.nu/index.php?title=Check_pgsql_-_NRPE_PostgreSQL_check](http://wiki.tyk.nu/index.php?title=Check_pgsql_-_NRPE_PostgreSQL_check)
