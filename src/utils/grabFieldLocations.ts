/* eslint-disable no-console */
/** TypeScript Code Below used to Pull Tennis Field Locations. Export them as an object. Call "GetFieldLocs" to get field data. **/
const apiKey =
  'WMtY5WdsefmUdSbFbzPwxuSPU5kyVg1QpLYjTW23MCNy0DszfCY04avFNOD3b0Zu-JcK26FFkS3pY5qfIm4hKeZXsw9kJiuZZKbQJEiQTceVvPlMEOH2bmEv9IKZU8izsivoWX-mszSx4TdNLYlmg_vdhuidMU9p7qn1BUGfjS4';
const baseId = 'api:M0RZIVRH';
const endPoint = 'tennis_court_locations';
const apiUrl = `https://xxse-o31w-h0c3.n7c.xano.io/${baseId}/${endPoint}`;
export const getFieldLocs = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `${apiKey}`,
      },
    });
    const data = await response.json();
    const formattedData = data.map((record: { Tennis_Court_Name: string }) => {
      return {
        Tennis_Court_Name: record.Tennis_Court_Name,
      };
    });
  } catch (error) {
    console.log(error);
  }
};
