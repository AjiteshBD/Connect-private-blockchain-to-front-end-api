const SHA256 = require('crypto-js/sha256');
const BlockchainClass = require('./simpleChain.js');
const BlockClass = require('./Block.js');
/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} server
     */
    constructor(server) {
        this.server = server;
        this.Blockchain = new BlockchainClass.Blockchain();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.server.route({
            method: 'GET',
            path: '/api/block/{index}',
            handler: (request, h) => {
              let block = this.Blockchain.getBlock(request.params.index);
              return block;

            }
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.server.route({
            method: 'POST',
            path: '/api/block',
            handler:  (request, h) => {

              if(null != request.payload)
              {

                 this.Blockchain.addBlock(new BlockClass.Block(request.payload));
              }
               //console.log(this.getBlockData());
               return this.getBlockData();
            }
        });
    }

    /**
     * Help method to inizialized Mock dataset, adds 10 test blocks to the blocks array
     */
  async  getBlockData() {
      let blocks = [];
        let height = await this.Blockchain.getBlockHeight();
        if(height > 0){

            for (let index = 0; index < height; index++) {
              console.log(index);

                let block = await this.Blockchain.getBlock(index);
                blocks.push(block);
            }
        }

        return blocks;
    }


}

/**
 * Exporting the BlockController class
 * @param {*} server
 */
module.exports = (server) => { return new BlockController(server);}
