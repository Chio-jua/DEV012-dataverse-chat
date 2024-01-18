import { computeStats } from "../lib/dataFunctions.js";

export const estadistica = (data) => {
  const contEst = document.createElement("div");
  contEst.className = "estadistica";
  contEst.setAttribute("id", "conteo");
  const parrafoEstadística = document.createElement("p");
  const sumaData = computeStats(data);
  parrafoEstadística.innerHTML = `Total de Albums: ${sumaData}`;
  contEst.appendChild(parrafoEstadística);
  return contEst;
};
