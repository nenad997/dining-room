export function filterData(data, filter) {
  return data.filter((item) => {
    return item.mealType === filter;
  });
}
