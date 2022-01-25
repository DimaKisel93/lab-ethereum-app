// https://eth-ropsten.alchemyapi.io/v2/N-U69pV-Yj-XvzeSJjJCaFra8u76uTH1

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/N-U69pV-Yj-XvzeSJjJCaFra8u76uTH1', 
      accounts: ['35352c981d7bcd769e42987ffa7d7ba8fc945f6d1ff81fa40011d3893bc823e1']
    }
  }
}