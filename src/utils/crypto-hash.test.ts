import cryptoHash from './crypto-hash'

describe('Test crypt hash', () => {
    it('Should generate a SHA-256 hash', () =>{
        const hash = '73084ce0babe20e37b1e09d91b4f41037ff14a322171d6b843cafe2d33d5c8b2'
        expect(cryptoHash('oda')).toEqual(hash)
    })

    it('Should generate a SHA-256 hash even the params is in diffeent order', () =>{
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'two', 'one'))
    })
})