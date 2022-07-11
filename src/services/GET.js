/**
 * Generic fetch to return data
 * @param {string} baseUrl
 * @param {string} resource For example /bonds
 * @param {object} config   Axios config
 * @returns {config} response
 *
 */

async function GET(baseUrl, resource, config) {
  try {
    const instance = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
    });

    const response = await instance.get(resource, config);

    return response;
  } catch (error) {

    const errorFiled = document.querySelector(".alertWarning")
    errorFiled.style = "display: none"
    errorFiled.innerText = error
    console.error(error);
    return error;
  }
}
