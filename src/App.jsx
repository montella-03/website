import { Features, Download, Wrappers } from './components'
import assets from './assets'
const App=()=> {
  return (
    <>
      <Wrappers
        title="Your own Nft store. Buy and sell"
        description="Buy, store and collect reasures of your NFTS."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <Wrappers
        title="Smart User NFT Interface MarketPlace"
        description="Get your NFTS at an affordable market price, hurry champ"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
       <Wrappers
        title="Deployment"
        description="ProNef is built using expo which runs natively
         on all users' devices. you can get the app easier,"
        mockupImg={assets.feature}
        reverse
      />
      <Wrappers
        title="Best way to show you progress, on native frameworks"
        description="List of NFTs on first screen, more information on second screen"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div>
        <p>Made with </p>
      </div>
    </>
      
     
    
  )
}

export default App
