## Project overview

For this project, you will create a DApp by adding functionality to your smart contract and deploy it on the public testnet. To do so, you'll employ your blockchain identity to secure digital assets on the Ethereum platform using a smart contract. 


## console output
```bash
sudo truffle migrate --network rinkeby --reset --compile-all
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/StarNotary.sol...
Compiling ./node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol...
Compiling ./node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol...
Compiling ./node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol...
Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol...
Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol...
Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol...
Compiling ./node_modules/openzeppelin-solidity/contracts/utils/Address.sol...
Writing artifacts to ./build/contracts

Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 7003802


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x53fcb33b9202a179b8fc12cdcb1e7380c482e7f5cd7a1c00be980c495f31ef34
   > Blocks: 0            Seconds: 13
   > contract address:    0xd476D8B6FfdD38231d5FF9740220c230426a71d0
   > account:             0x9Ca2e22F73aA69Ce94A6C46021cFa928afD01e84
   > balance:             34.847305697
   > gas used:            277462
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00277462 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00277462 ETH

2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0xfed2ffbe8e109e3a7718df2666767bc0647a4dc3eecb95baf439c0b013bcca1e
   > Blocks: 0            Seconds: 9
   > contract address:    0x71EF221A0fFEe7149C89f88C94b103A187983143
   > account:             0x9Ca2e22F73aA69Ce94A6C46021cFa928afD01e84
   > balance:             34.818557477
   > gas used:            2832814
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02832814 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02832814 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.03110276 ETH
```

#### Contract address

https://rinkeby.etherscan.io/address/0x71EF221A0fFEe7149C89f88C94b103A187983143
```bash
0x71EF221A0fFEe7149C89f88C94b103A187983143
```

#### Contract Hash

https://rinkeby.etherscan.io/tx/0xcc3066c05026a76fcf5723a010d805d7137eaa3552f4099a6d8bff96160604cc
```bash
0xcc3066c05026a76fcf5723a010d805d7137eaa3552f4099a6d8bff96160604cc
```

#### Transaction ID

https://rinkeby.etherscan.io/tx/0xfed2ffbe8e109e3a7718df2666767bc0647a4dc3eecb95baf439c0b013bcca1e
```bash
0xfed2ffbe8e109e3a7718df2666767bc0647a4dc3eecb95baf439c0b013bcca1e
```

#### Star Token id

**1**
