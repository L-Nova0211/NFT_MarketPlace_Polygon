import { useContext } from 'react'
import { useSelector } from 'react-redux'
import LowOnBalanceTip from '../molecules/LowOnBalanceTip'
import NavBar from '../molecules/NavBar'
import NFTModal from '../organisms/NFTModal'
import NFTModalProvider from '../providers/NFTModalProvider'
import { Web3Context } from '../providers/Web3Provider'

export default function BaseLayout ({ children, deauthenticate }) {
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  const { network, balance, isReady, hasWeb3 } = useContext(Web3Context)
  const isLowOnEther = balance < 0.1
  return (
    <>
      <NFTModalProvider>
        <NavBar deauthenticate={deauthenticate}/>
        {isAuthenticated}
        {hasWeb3 && isReady && network && isLowOnEther && <LowOnBalanceTip/>}
        {children}
        <NFTModal/>
      </NFTModalProvider>
    </>
  )
}
