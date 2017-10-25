#!/usr/bin/env node

var sha3 = require('ethereumjs-util').sha3;
var rlp = require('rlp');
var [address, nonce] = process.argv.slice(2);

if (!address) {
  throw new Error('address is required');
}

address = normalizeAddress(address);
nonce = Number(nonce || 0);

var contractAddress = sha3(rlp.encode([address, nonce])).toString('hex').slice(24);

console.log(normalizeAddress(contractAddress));

function normalizeAddress(address) {
  if (address[0] === '0' && (address[1] === 'x' || address[1] === 'X')) {
    return address;
  }

  return '0x' + address;
}
