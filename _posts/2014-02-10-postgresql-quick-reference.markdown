---
layout: post
title: PostgreSQL Quick Reference
date: 2014-02-10 12:36:45
category: Database
tags: postgresql
---

This reference is based on Debian. Please do appropriate changes on your own operating system.

### Installation

{% highlight bash %}
sudo apt-get install postgresql-client

sudo apt-get install postgresql
{% endhighlight %}

PostgreSQL server is listening on 5432 by default.

Optionally you could choose to install pgAdmin III graphical administration utility.
{% highlight bash %}
sudo apt-get install pgadmin3
{% endhighlight %}

### Add new user and database

After initial installation, a database and database user both named "postgres" are generated automatically. In the mean while, a Linux user called "postgres" is created as well.

You can add new users and databases in different ways.

1). Use PostgreSQL console

Add new Linux user "newuser":
{% highlight bash %}
sudo adduser newuser
{% endhighlight %}

Switch to user "postgre":
{% highlight bash %}
sudo su - postgres
{% endhighlight %}

You can connect to PostgreSQL terminal now.
{% highlight bash %}
psql
{% endhighlight %}

No need password here as database user name is same with Linux user name.

In terminal, set password to "postgre":
{% highlight text %}
\password postgres
{% endhighlight %}

Then add database user "newuser" and set password.
{% highlight sql %}
CREATE USER newuser WITH PASSWORD 'password';
{% endhighlight %}

Create database "mydb" and set owner to "newuser":
{% highlight sql %}
CREATE DATABASE mydb OWNER newuser;
{% endhighlight %}

Don't forget to grant privileges. Otherwise, "newuser" still can't access "mydb".
{% highlight sql %}
GRANT ALL PRIVILEGES ON DATABASE mydb to newuser;
{% endhighlight %}

Use "\q" or ctrl+D to quit terminal.

2). Use shell commands

Create database user "newuser" and set him to superuser:
{% highlight bash %}
sudo -u postgres createuser --superuser newuser
{% endhighlight %}

Set password to "newuser" in terminal and quit terminal:
{% highlight bash %}
sudo -u postgres psql

\password dbuser

\q
{% endhighlight %}

Then create database in shell:
{% highlight bash %}
sudo -u postgres createdb -O newuser mydb
{% endhighlight %}

### Connect to database

{% highlight bash %}
psql -U newuser -d mydb -h 127.0.0.1 -p 5432
{% endhighlight %}

If the current Linux user has same name with database user, you can omit the username in above command and you won't be asked to provide password.
{% highlight bash %}
psql mydb
{% endhighlight %}

If there is a database named "newuser", you can even omit database name.
{% highlight bash %}
psql
{% endhighlight %}

To restore database from sql file:
{% highlight bash %}
psql mydb < mydb.sql
{% endhighlight %}

### Terminal commands
{% highlight text %}
\h: Gives syntax help on the specified SQL command
\?: Shows help information about the backslash commands
\l: List the names, owners, and character set encodings of all the databases in the server
\c [database_name]: Establishes a new connection to a PostgreSQL server
\d: Show a list of all tables, views, and sequences
\d [table_name]: Show details of specified table
\du: Lists all database roles
\e: Open external editor
{% endhighlight %}

### Basic CRUD
{% highlight sql %}
# Create new table
CREATE TABLE usertbl(name VARCHAR(20), signupdate DATE);
# Insert record
INSERT INTO usertbl(name, signupdate) VALUES('foo', '2013-12-22');
# Retrieve records
SELECT * FROM user_tbl;
# Update record
UPDATE user_tbl set name = 'bar' WHERE name = 'foo';
# Delete record
DELETE FROM user_tbl WHERE name = 'bar' ;
# Add column
ALTER TABLE user_tbl ADD email VARCHAR(40);
# Change column
ALTER TABLE usertbl ALTER COLUMN signupdate SET NOT NULL;
# Rename column
ALTER TABLE usertbl RENAME COLUMN signupdate TO signup;
# Delete column
ALTER TABLE user_tbl DROP COLUMN email;
# Rename table
ALTER TABLE usertbl RENAME TO backuptbl;
# Delete table
DROP TABLE IF EXISTS backup_tbl;
{% endhighlight %}

### References
* [PostgreSQL: Manuals](http://www.postgresql.org/docs/manuals/)
