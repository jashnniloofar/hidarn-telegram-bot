export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const isTodayEven = (): boolean => Math.floor(Date.now() / (1000 * 24 * 3600)) % 2 === 0;

export const getCongratsSmile = (): string => {
  const smiles = ["🥂", "🎉", "🎊", "🥇", "🎖", "👏"];
  const index = Math.floor(Math.random() * smiles.length);
  return smiles[index];
};

export const toFarsiNumber = (str: string) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/\d/g, (x) => farsiDigits[x]);
};
