const mockItemList = [
  {
    id: 1,
    name: 'One',
  },
  {
    id: 2,
    name: 'Two',
  },
  {
    id: 3,
    name: 'Three',
  },
];

export const getItemList = () => new Promise((resolve) => {
  resolve(mockItemList);
});

export default getItemList;
