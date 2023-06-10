import React from 'react'
import TextField from '@mui/material/TextField';
import { content } from './Content';

export default function Search({ setProduct }) {

    const handleChange = (e) => {
        const searchFilter = content.filter((element, index) =>
            element.type.toLowerCase().includes(e.toLowerCase())
        );
        setProduct(searchFilter)
    }

    return (
        <TextField id="standard-basic" onChange={(e) => handleChange(e.target.value)} label="Search..." sx={{ width: '100%', marginBottom: 5 }} variant="standard" />
    )
}
