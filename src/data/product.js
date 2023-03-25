const formatCurrency = (options) => {
  const defaults = {
    value: null,
    currency: "VND",
  };
  const settings = Object.assign({}, defaults, options);
  const { value, currency } = settings;
  const currencyOptions = {
    style: "currency",
    currency: currency || "VND",
  };
  const res =
    value !== null && value !== undefined
      ? new Intl.NumberFormat("vi-VN", currencyOptions).format(value)
      : "N/A";

  return res;
};
const products = [
  {
    id: 0,
    img: "https://i.pinimg.com/564x/00/d8/1d/00d81d11d8952e0286157c7e93d61cad.jpg",
    name: "Asus rog strix",
    price: formatCurrency({ value: 100000 }),
    quantity: 1,
  },
  {
    id: 1,
    img: "https://i.pinimg.com/564x/b8/cf/a5/b8cfa5dd6e383b50a3ff671f5feab550.jpg",
    name: "Asus tuf gaming",
    price: formatCurrency({ value: 150000 }),
    quantity: 1,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/42/1b/32/421b3247bc394b9b80ad676dca4cf0df.jpg",
    name: "Acer Nitro gaming",
    price: formatCurrency({ value: 200000 }),
    quantity: 1,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/3c/8b/5a/3c8b5a646a81641d9b260fbca4c08cd0.jpg",
    name: "Rog zephyus duo",
    price: formatCurrency({ value: 250000 }),
    quantity: 1,
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/ad/21/db/ad21db077d31b9dbfaf01f83437627e8.jpg",
    name: "Macbook pro 16",
    price: formatCurrency({ value: 300000 }),
    quantity: 1,
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/38/67/1a/38671abac919e52871a8afe642cfd5ce.jpg",
    name: "Macbook air m1",
    price: formatCurrency({ value: 350000 }),
    quantity: 1,
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/b9/97/0a/b9970ad512082c6bb09302c9537c7da5.jpg",
    name: "MSI gf63 thin",
    price: formatCurrency({ value: 400000 }),
    quantity: 1,
  },
  {
    id: 7,
    img: "https://i.pinimg.com/564x/d1/32/c2/d132c2901deeea47b174ea4a632ed5c5.jpg",
    name: "MSI modern 14",
    price: formatCurrency({ value: 450000 }),
    quantity: 1,
  },
  {
    id: 8,
    img: "https://i.pinimg.com/564x/96/95/75/969575a2c256e0019266a8e4f7b1565e.jpg",
    name: "Asus zenbook X14",
    price: formatCurrency({ value: 500000 }),
    quantity: 1,
  },
  {
    id: 9,
    img: "https://i.pinimg.com/564x/66/3b/f9/663bf99748abd0ea773d8bfa7e846fbe.jpg",
    name: "Dell inspiron 16",
    price: formatCurrency({ value: 550000 }),
    quantity: 1,
  },
  {
    id: 10,
    img: "https://i.pinimg.com/564x/bb/8b/85/bb8b851649c858a568d05f65ff18ed5a.jpg",
    name: "Dell inspiron 3520",
    price: formatCurrency({ value: 600000 }),
    quantity: 1,
  },
  {
    id: 11,
    img: "https://i.pinimg.com/564x/26/5c/28/265c2830a3763575b07324355a38c022.jpg",
    name: "Lenovo legion 15",
    price: formatCurrency({ value: 650000 }),
    quantity: 1,
  },
];
export { products };
