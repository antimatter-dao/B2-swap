import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeB8A613D654F39e1031d2Ee36433151fc37bbBFa'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
