// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

contract MyfirstContract {
   string myName = "yurright"; 

   function callyMyName() public view returns(string memory) {
return myName;
   }
}

