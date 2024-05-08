import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    value: number;
    onChange: (event: SelectChangeEvent) => void;
}

export default function ArticlePageSizeSelect({ value, onChange }: Props) {
    return (
        <FormControl fullWidth>
            <InputLabel id="selectPageSize">Page size:</InputLabel>
            <SelectMUI
                labelId="selectPageSize"
                value={value.toString()}
                defaultValue={value.toString()}
                label="Page size"
                onChange={onChange}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </SelectMUI>
        </FormControl>
    );
}
