export const Validators = {
    REQUIRED: (value: string) => value.trim() !== '',
    MIN_LENGTH: (value: string, minLength: number) => value.length < minLength,
    ONLY_NUMBERS: (value: string) => /^[0-9]+$/.test(value),
  };

