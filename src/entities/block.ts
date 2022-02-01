import { GENESIS_DATA } from "../config/config";
import cryptoHash from "../utils/crypto-hash";

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
    const timeStamp = Date.now()
    const prevHash = param.lastBlock.hash
    const data = param.data

    return new this({
      timeStamp,
      data,
      prevHash,
      hash: cryptoHash(timeStamp, prevHash, data)
    })
  }
}

export default Block;
