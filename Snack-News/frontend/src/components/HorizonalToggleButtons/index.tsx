import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface Props {
    value: string;
    onChange: (event: React.MouseEvent<HTMLElement>, newView: string) => void;
}

export default function HorizontalToggleButtons({ value, onChange }: Props) {
    return (
        <ToggleButtonGroup
            size="small"
            value={value}
            exclusive
            onChange={onChange}
        >
            <ToggleButton value="grid" aria-label="grid" title="grid">
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="simple" title="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="masonry" aria-label="masonry" title="masonry">
                <ViewQuiltIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
