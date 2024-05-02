import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Props {
    label: string;
    value: Dayjs | null | undefined;
    minDate?: Dayjs | null | undefined;
    onChange: (newValue: Dayjs | null) => void;
}

export default function DatePickerValue({
    minDate,
    label,
    value,
    onChange,
}: Props) {
    // Disable dates before minDate
    const disableBeforeMinDate = (date: Dayjs) => {
        return date.isBefore(minDate || dayjs());
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                sx={{ width: '100%' }}
                label={label}
                value={value}
                onChange={onChange}
                // Disable dates before minDate when label is 'To'
                shouldDisableDate={
                    label === 'To' ? disableBeforeMinDate : undefined
                }
                disableFuture
            />
        </LocalizationProvider>
    );
}
