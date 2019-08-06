export const SERVER_ADDRESS = process.env.SERVICE_ADDR
  ? process.env.SERVICE_ADDR
  : "http://mozi.ai:3002";

export const AnnotationStatus = {
  ACTIVE: 1,
  COMPLETED: 2,
  ERROR: -1
};

export const getSession = id => {
  window.location.href = `${window.location}?id=${id}`;
};

export const getParameterValueFromURL = variable => {
  const vars = window.location.search.substring(1).split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
};

export const fetchAnnotationStatus = id => {
  return fetch(`${SERVER_ADDRESS}/result/${id}`)
    .then(response => response.json())
    .then(response => {
      return response.result
        ? Object.assign({}, response, {
            result: JSON.parse(response.result)
          })
        : {
            status: AnnotationStatus.ERROR,
            statusMessage: response.response
          };
    });
};

export const downloadSchemeFile = () => {
  window.open(
    `${SERVER_ADDRESS}/result_file/${getParameterValueFromURL("id")}`
  );
};

export const downloadCSVFile = fileName => {
  window.open(`${SERVER_ADDRESS}/csv_file/${fileName}`);
};
