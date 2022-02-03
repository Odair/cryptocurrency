import Block from "./block";

class BlockChain {
  chain: Block[];
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBLock({ data }) {
    const newBlock = Block.mineBlock({
      data,
      lastBlock: this.chain[this.chain.length - 1],
    });

    this.chain.push(newBlock);
  }
}

export default BlockChain;
