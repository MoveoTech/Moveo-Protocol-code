import { useMemo } from 'react';

export const formatPrice = (price: number, isoCode = 'ILS'): string => {
  return new Intl.NumberFormat(isoCode, {
    style: 'currency',
    currency: isoCode,
    maximumFractionDigits: 0,
  }).format(price);
};

export const useFormatPrice = (price: number, isoCode = 'ILS'): string => {
  return useMemo(() => {
    return formatPrice(price, isoCode);
  }, [price, isoCode]);
};
