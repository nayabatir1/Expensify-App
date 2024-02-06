import type {Form} from '@src/types/onyx';

const INPUT_IDS = {
    DATE_TIME: 'dateTime',
} as const;

type SettingsStatusClearDateForm = Form<{
    [INPUT_IDS.DATE_TIME]: string;
}>;

export type {SettingsStatusClearDateForm};
export default INPUT_IDS;
