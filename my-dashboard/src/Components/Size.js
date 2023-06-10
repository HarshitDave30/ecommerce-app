import React from 'react'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { content } from './Content';
import { theme } from './Typography';

const sizeValue = ["SMALL", "MEDIUM", "LARGE", "ALL"];

export default function Size({ setProduct }) {
    const sizeClick = (id) => () => {
        if ("ALL" === id) {
            setProduct(content)
        }
        else {
            const user = content.filter((element, index) => element.size === id)
            setProduct(user)
        }
    }

    return (
        <>
            <Typography gutterBottom variant="h6" component="div">
                Select Your Size
            </Typography>
            <Stack direction="row" spacing={2}>
                {sizeValue.map((element, index) => {
                    const firstLetter = element[0];
                    return (
                        <Avatar key={index} onClick={sizeClick(element)} sx={{ backgroundColor: theme.palette.secondary.main, cursor: 'pointer' }}>{firstLetter}</Avatar>
                    )
                })}
            </Stack>
        </>
    )
}
