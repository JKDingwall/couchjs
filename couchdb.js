// Copyright 2011 Iris Couch
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

module.exports = handler

var http = require('http')

function handler(req, res) {
  res.writeHead(200)
  res.end('Hello: ' + req.url + '\n')
}

if(require.main === module) {
  var http = require('http')
  var server = http.createServer(handler)
  server.listen(3000)
  console.log('Listening on :3000')
}
