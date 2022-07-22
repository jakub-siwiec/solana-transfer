import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import * as Web3 from '@solana/web3.js'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const [ keyPair, setKeyPair ] = useState("")

    
    useEffect(() => {

        async function main() {
            const newKeypair = await Web3.Keypair.generate()
            setKeyPair(newKeypair.secretKey.toString())
        }
        
        main().then(() => {
            console.log("Finished successfully")
        }).catch((error) => {
            console.error(error)
        })
    

    }, []);

    return (
        <div className={styles.container}>
            <p>Your Key Pair</p>
            <p>{keyPair}</p>
        </div>
    )
}

export default Home
