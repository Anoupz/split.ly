# Split.ly


## Description

Split.ly allows friends to split wisely common expenses like the ones made during road trips, parties, etc... It is a weekend project made for the only purpose of learning. Things I used: AngularJS, ui-router, MongoDB, mongoose, Nodejs & Async.

## Demo

A live demo is available here: http://projects.kdelemme.com/splitly/app


## Todo
[ ] Add Tests
[ ] Update existing expense

## Installation

Get the sources:
```bash
git clone https://github.com/kdelemme/splitly.git
```

### NodeJS

In order to start the nodejs server, we need express, async and mongoose dependencies.

In the api directory, install the nodejs dependencies:
```bash
kevin@home:api$ npm install
```

### AngularJS

Use Gulp to build your JavaScript sources and to compile the less source:
```bash
kevin@home$ gulp
```

You should see:
```bash
kevin@home:$ gulp
[gulp] Using gulpfile gulpfile.js
[gulp] Starting 'scripts'...
[gulp] Starting 'styles'...
[gulp] Finished 'styles' after 37 ms
[gulp] Finished 'scripts' after 55 ms
[gulp] Starting 'default'...
[gulp] Finished 'default' after 13 μs
```

## Usage

### Server

Starts the nodejs application:
```bash
node api/app.js
```

You should see:
```bash
kevin@home:$ node api/app.js 
[INFO] Your project API started on port 3009
[DB] Successfully connected to: mongodb://localhost/splitly
```

### Client

Open your browser on `http://localhost/splitly/app` (You need a http server configured to handle localhost/splitly correctly, e.g, Apache, nginx, ...)

## Stack

* AngularJS v1.2.17
* ui-router v0.2.10
* Bootstrap v3.0.2
* MongoDB 
* Node.js
* mongoose v3.8.8
* async v0.9.0

## Licence
The MIT License (MIT)

Copyright (c) 2014 Kevin Delemme (kdelemme@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.