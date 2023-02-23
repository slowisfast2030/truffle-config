// 一旦合约经过compile后，就可以通过artifacts.require拿到合约抽象
// 进一步可以通过合约抽象拿到合约实例
var Telephone = artifacts.require('Telephone')

// 部署脚本本质上来说也是j脚本，所以js中的能用的函数或者变量，在部署脚本中也可以使用
const getRnd = function() {
    const [min, max] = [13, 1013];
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// 有些合约的构造函数需要初始化参数，deploy函数的第一个参数是合约抽象，后面的参数都是合约参数
module.exports = function(deployer){
    deployer.deploy(Telephone, getRnd())
}