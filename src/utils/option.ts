import { Option } from '@/models/option';

type TranslateFunction = (v: string) => string;

export const translatedOptions = (
  options: string[],
  t: TranslateFunction,
): Option[] => {
  return options.map((o) => ({
    label: t(o),
    value: o,
  }));
};
