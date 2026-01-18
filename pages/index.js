import React from 'react'

export default function Home() {
    return (
        //coloca o fundo preto e a fonte branca
       
        <div style={{ display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: 'black', 
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif'
            }}>
            <h1>Clonando o TabNews</h1>
        </div>
    )
}