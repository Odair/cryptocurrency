import Block from "./block";
import BlockChain from "./blockChain";

describe("blockchain tests", () => {
  const blockChain = new BlockChain();

  it("Should contains a chain instanceof Array", () => {
    expect(blockChain.chain instanceof Array).toBe(true);
  });

  it("Should have the first block with genesis data", () => {
    expect(blockChain.chain[0]).toEqual(Block.genesis());
  });

  it("Should add a new block to the chain", () => {
    const newData = "new data";
    blockChain.addBLock({ data: newData });

    expect(blockChain.chain[blockChain.chain.length - 1].data).toEqual(newData);
  });
});
