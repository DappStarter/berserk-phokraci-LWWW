require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note script assume hidden narrow flee sponsor'; 
let testAccounts = [
"0x6ddc74ce094372405f7c15f1e83fcb983f8f5db058372c78bd0ba4d19d4722d0",
"0xab9e873034c714b6d5aafcf235255a5e5a5a588ed43e69765b48eb99db0f8acd",
"0x5fd536d14deff05068e56951187b9e0b37b7e32f87e499f20a850a05b4bfa496",
"0x7a8ef3ec5a92d3405a8f8555411ac5c2d38fe915942e01b739c258af08e16c34",
"0x356293442b6c91a331170176ab1d3897c32d6a5190d287d5bedec0cd29923557",
"0x1128e827336e7dec0ff4fd370f5d2e2c24acd5a16feb2d7b77cf5c5d86b55279",
"0x19ac413f9f5e30f630a36d2802ca27390f5b26dacd9c8737d9ebad89571cdf24",
"0x62cd22e07608be6198fd160da010b18ec5ab29c0f48e697445945b4c34f8b21b",
"0xc5eb86a4927a1c6b17d173f2c69e8a8ee014f5b71d77f5bdfab7a94c7a001305",
"0xc7abc2087f06ae1270f2a2a3905f819ffa185bde8c349bfe86c7458e5768f037"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


