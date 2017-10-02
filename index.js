const CoinHive = require('coin-hive');

(async () => {

  // Create miner
  const miner = await CoinHive('jcUtG3sofFxd8m1alO58Ra5nUSFWGziP'); // Coin-Hive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
})();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});

server.listen(port);