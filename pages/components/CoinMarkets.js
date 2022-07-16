import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Box, Card, CardContent, InputAdornment, Table, TableBody, 
        TableCell, TableHead, TableRow, TextField, SvgIcon} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useTheme } from '@mui/material/styles';

const CoinMarkets = ({setCoin}) => {
    const theme = useTheme();
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    const fetchCoinMarkets = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setCoins(response.data);
            console.log(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchCoinMarkets();
    }, []);

    return (
        <>
            <Box sx={{pb: 2}}>
                <Card>
                    <CardContent>
                        <Box sx={{ maxWidth: 500 }}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <SvgIcon fontSize='small' color='action'>
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder='Search a cryptocurrency'
                                variant='outlined'
                                onChange={handleChange}
                                />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Card>
                <Box sx={{ maxWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Symbol</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>24h</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Volume</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Market Cap</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(filteredCoins.slice(0 , 5)).map(coin => (
                                <TableRow hover sx={{cursor:'pointer'}} key={coin.id} onClick={()=> setCoin(coin.id)}>
                                    <TableCell>
                                        <img 
                                            src={coin.image} 
                                            alt='crypto image' 
                                            style={{ height: '20px', width: '20px' }}
                                            />
                                    </TableCell>
                                    <TableCell>{coin.name}</TableCell>
                                    <TableCell>{coin.symbol}</TableCell>
                                    <TableCell>${coin.current_price.toFixed(2)}</TableCell>
                                    <TableCell>
                                        {coin.price_change_percentage_24h > 0 
                                            ? (
                                                <span 
                                                style={{ 
                                                    color: theme.palette.mode === 'dark' 
                                                            ? theme.palette.success.main 
                                                            : theme.palette.success.dark
                                                            
                                                    }}
                                                    >
                                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                            ) 
                                            : (
                                                <span 
                                                style={{ 
                                                    color: theme.palette.mode === 'dark' 
                                                            ? theme.palette.error.main 
                                                            : theme.palette.error.dark
                                                    }}
                                                    >
                                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                            )
                                        }
                                    </TableCell>
                                    <TableCell>${coin.total_volume.toLocaleString()}</TableCell>
                                    <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Card>
        </>
    );
};

export default CoinMarkets;