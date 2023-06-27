import { getFieldLocs } from './utils/grabFieldLocations';
window.Webflow ||= [];
window.Webflow.push(() => {
  const myFieldLocs = getFieldLocs();
});
