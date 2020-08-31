const hexToBinary = require('hex-to-binary');
// const { GENESIS_DATA, MINE_RATE } = require('../config');
// const { cryptoHash } = require('../util');

class Block {
  constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }
}

module.exports = Block;