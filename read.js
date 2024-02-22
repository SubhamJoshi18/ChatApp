//WEBSOCKET

//Normal
/*

Client send a request to the server
and server send a response to the client
and server is closed
REQUEST RESPONSE CYCLE IS CLOSED
Communication is a single way

       SERVER


                     
USER 1----------------------USER 2
directly communication is not possible
you need a server
user 2 check the server if there is message for me in the server
user 1 post the message in the server

let suppose 
user 1 post or send a message to the server and user 2
always kept on checking or act like a event loop in this stage
to check if there is message for user 2 or not or any other user expect
who is posting the messge in the server
This thing is called Polling --- checking server every time
this is overkill , cause if there is 1000 client and every second 
all client is polling than your server become complex or simply
understand load is increasing


And we have WebSockets 

header ma vancha ki upgrade garna parcha
http upgraded to the websocket 
and request response cycle is not closed
and the connection way is bi directional
connection is not closed unless you want


IMPORTANT TOPIC UPGRADE
upgrade Header to upgrade established client or server connection to different protocol
Connection:Upgrade
Updgrade:Websocket
Full Duplex Communication 

*/
