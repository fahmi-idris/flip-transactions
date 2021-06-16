export const toLocaleDate = (dateTime: string): string => {
  const date = new Date(dateTime);
  return date.toLocaleString('id-ID', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
};

export const toIdrCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(
    amount,
  );
};

export const toUppercase = (value: string): string => value.toUpperCase();
