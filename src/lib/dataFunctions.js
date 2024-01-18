export const filterData = (data, filterBy, value) => {
  const genroFiltrado = data.filter((item) => item.facts[filterBy] === value);
  return genroFiltrado;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    return data.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  if (sortOrder === "desc") {
    return data.slice().sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
};

export const computeStats = (data) => {
  const albumCounts = data.map((item) => parseInt(item.facts.albums));
  const sumaTotal = albumCounts.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );

  return sumaTotal;
};
