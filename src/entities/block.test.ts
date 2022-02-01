import { GENESIS_DATA } from "../config/config";
import Block from "./block";

describe("Tests for blocks", () => {
  const timeStamp = 0
  const data = 'data'
  const hash = 'hash'
  const prevHash = 'prev-hash'
  const block = new Block({
      timeStamp,
      data,
      hash, 
      prevHash 
  });

  it("Blocks should have a timeStamp, data, hash and prevHash", () => {
      expect(block.timeStamp).toEqual(timeStamp)
      expect(block.data).toEqual(data)
      expect(block.hash).toEqual(hash)
      expect(block.prevHash).toEqual(prevHash)
  });

  describe('Tests of genesis block', () => {
      const genesisBlock = Block.genesis()
      
      it('Should return a instance of block', () => {
        expect(genesisBlock instanceof Block).toBe(true)
      })

      it('Should return a block with GENESIS_DATA', () => {
        expect(genesisBlock).toEqual(GENESIS_DATA)
      })
  })

  describe('Tests of mined block', () => {
    const lastBlock = Block.genesis()
    const data = 'mine data'
    const minedBlock = Block.mineBlock({ lastBlock, data })

    it('Should return a instance of block', () => {
      expect(minedBlock instanceof Block).toBe(true)
    })

    it('Should the prevHash to be equal to lastBlock hash', () => {
      expect(minedBlock.prevHash).toEqual(lastBlock.hash)
    })

    it('Should the data to be equal to param data', () => {
      expect(minedBlock.data).toEqual(data)
    })

    it('Should the timeStamp not to be undefined', () => {
      expect(minedBlock.timeStamp).not.toEqual(undefined)
    })

  })

});
