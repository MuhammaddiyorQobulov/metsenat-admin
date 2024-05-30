import { createI18n } from "vue-i18n";
import uz from "./uz";
import ru from "./ru";
import en from "./en";

const i18n = createI18n({
  locale: "uz", // set default locale
  fallbackLocale: "uz", // set fallback locale
  messages: { uz, ru, en },
});

export default i18n;
