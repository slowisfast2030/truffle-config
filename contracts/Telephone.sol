// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

import "truffle/console.sol";

contract Telephone {
    uint public secret;

    constructor(uint _secret) public payable { 
        console.log("Telephone::constructor\n\tsecret: %o", _secret); 
        secret = _secret;
    }

    function derivedSecret() public view returns (uint256) {
        uint256 telephoneSecret = 100 * secret + 1;
        console.log("The passphrase is: %o", secret);
        console.log("Leak it a hundred times, plus one: %o", telephoneSecret);
        return telephoneSecret; 
    }
}
