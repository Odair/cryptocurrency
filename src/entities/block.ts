import { GENESIS_DATA } from "../config/config";

interface Block {
  timeStamp : any, 
  data : any, 
  hash : any, 
  prevHash: string
}

interface MineBlockData {
  data : any, 
  lastBlock: Block
}

class Block {
  
  constructor({ timeStamp, data, hash, prevHash } : Block) {
    this.timeStamp = timeStamp;
    this.data = data;
    this.hash = hash;
    this.prevHash = prevHash;
  }


  static genesis() : Block {
    return new this(GENESIS_DATA)
  }

  static mineBlock(param : MineBlockData) : Block {
    return new this({
      timeStamp: Date.now(),
      data: param.data,
      hash: '',
      prevHash: param.lastBlock.hash
    })
  }
}

export default Block;
