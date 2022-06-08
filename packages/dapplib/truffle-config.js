require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name renew noble minor grid kangaroo army gasp'; 
let testAccounts = [
"0x9fd736ae4e4bba57f197b5eb7e24a86a4b7a812cea336bff83908c5a99bef821",
"0xa708c2bb13acff010c03b5ff53591238428db5e889971ecc42d0c508a322a8ad",
"0xc2f65408fdb5d8ebde279ee59cb23239fb22eb6ba8ef1d5fd47a3a49c53bf90b",
"0xabe5ad07595f56740447772fe51891e26823dc857c67894e38d32606ea3b847a",
"0xafdadc995cdf006b2f84d80319a98c06d210eae0eb6e25cd17bf4ddce45613b5",
"0x1d921b230759ab13084fb14ea5f7788b74ca16d20752d92dac506f3d82045626",
"0xfd6b0db28230bb592739b69a42b538255aa197e36a09586fa248d0e62fcef19b",
"0x4060011dd97a1fd4db1624838e3b576bce3b4e111ea57f00f31fc784c9a28d1a",
"0x2d33b39d17c90833f7ed37baacc683708325ef7c67378b40a27048377e16fb6a",
"0x1835dc47dd06ddb1fd8e793cf0d0e92106bfa6217aa03044533218422b7911de"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

