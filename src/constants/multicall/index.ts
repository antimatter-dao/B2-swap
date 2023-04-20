import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc1A04AAAD6ab57B0F11B656d09F68Be2d3cFf007'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
