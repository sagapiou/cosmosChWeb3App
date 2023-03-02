import type { NextPage } from "next"
import { FaucetSender } from "../components/FaucetSender"

const Home: NextPage = () => {
    return (
        <FaucetSender
            faucetAddress="cosmos1h4qn5cwtr76pvnaddlrhhg9m75k9zj78euzwar"
            rpcUrl="http://localhost:26657/"
        />
    )
}

export default Home
