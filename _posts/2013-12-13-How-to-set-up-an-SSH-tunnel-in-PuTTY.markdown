---
layout: post
title: How to set up an SSH tunnel in PuTTY
date: 2011-11-14 20:51:36
category: Other
tags: putty
---

In order to access some services on remote server with PuTTY, you'll need set up local ports to listen and forward to the server on corresponding ports. Take MySql(default port is 3306) as an example, you could connect to the remote MySql server on your local machine after setting up the tunnel.

1. In Putty Configuration, select Connection -> SSH -> Tunnels. Input "3306" for "Source port" field. PuTTY will listen on this port on your local machine. In "Destination" field, input server's domain name or IP with port. For example, "localhost:3306" or "127.0.0.1:3306". Then PuTTY could forward the connection to the server on the specified port.

	![Set up the tunnel](/assets/putty_tunnel1.png)

2. Don't forget to click "Add" button.

	![Add the tunnel](/assets/putty_tunnel2.png)

3. Last but not least, go back to Session tab and save the change to the session.

All Done!
