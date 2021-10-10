import React, { useState, useContext, useEffect } from "react"
import Context from "../../Context.js"
import ReactMarkdown from 'react-markdown'
import Tradingmd from './trading_psych.md'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import ReactApexCharts from 'react-apexcharts'
require('dotenv').config()

const TradingPsych = () => {
    const { store, setStore } = useContext(Context);
    const [md, setMd] = useState(null)
    useEffect(() => {
        fetch(Tradingmd)
        .then(res => res.text())
        .then(text => setMd(text))
    }, [])
    
    return(
        <div>
            <Container sx={{ py: 1 }} fixed>
                <Box sx={{ m: 2 }}>
                    <Typography variant="h2">
                        Trading Psychology
                    </Typography>
                    <ReactMarkdown>
                        {md}
                    </ReactMarkdown>
                </Box>
            </Container>
        </div>
    )
}

export default TradingPsych 