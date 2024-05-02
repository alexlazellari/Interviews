import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    value: string;
    onChange: (event: SelectChangeEvent) => void;
}

export default function Select({ value, onChange }: Props) {
    return (
        <FormControl fullWidth>
            <InputLabel id="selectSortBy">Sort by</InputLabel>
            <SelectMUI
                labelId="selectSortBy"
                value={value}
                label="Sort by"
                onChange={onChange}
            >
                <MenuItem value="publishedAt">Published At</MenuItem>
                <MenuItem value="relevancy">Relevancy</MenuItem>
                <MenuItem value="popularity">Popularity</MenuItem>
            </SelectMUI>
        </FormControl>
    );
}
