A task that I was assigned.  


`node_servers/Task1`: NodeJS Backend + Vue Frontend, features a simple users data table app with inline editing.
 + Batch patching with individual error handling, rows with errors is kept&alerted while those that's valid is updated
 
`node_servers/Task2` + the whole repo: Trying to replicate the same thing but with Laravel (Sanctum) as the authenticate server, didn't go too well, Laravel's Auth::facade (Auth::login, Auth::logout) didn't work as I thought, so currently:
 + Login, logout on Laravel do the same thing to the app.
 + Login, logout on the app ~~however, won't login/logout of Laravel, tried every possible combination from 0AM to 7AM :shrug:--~~ syncs too! :)
 + (Sanctum natively uses Bearer method, but in this project it's modified to send&receive a HTTPOnly cookie also, to provide more security)
