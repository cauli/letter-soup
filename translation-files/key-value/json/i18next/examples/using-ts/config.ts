import i18next from "i18next";

import ns1 from "./en/namespaceOne";

export const defaultNS = "ns1";

export const resources = {
  en: {
    ns1,
  },
};

i18next.init({
  lng: "en",
  debug: true,
  resources,
  defaultNS,
});
