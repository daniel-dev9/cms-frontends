import React, { createContext, useState } from 'react';
import { IntlProvider } from "react-intl";

// lang mappings
import English from '../lang/en.json';
import French from '../lang/fr.json';
import Spanish from '../lang/sp.json';

// export the app context
export const Context = createContext(null);

const ConfigProvider = ({ children }) => {

    //  default locale = english
    const [locale, setLocale] = useState('en');
    const [messages, setMessages] = useState(English);

    // set the new locale in the app
    const selectLang = lan => {
        setLocale(lan);
        switch (lan) {
            case 'en':
                return setMessages(English);
            case 'fr':
                return setMessages(French);
            case 'sp':
                return setMessages(Spanish);
            default:
                return setMessages(English);
        }
    }

    return (
        <Context.Provider value={{ locale, selectLang }}>
            <IntlProvider messages={messages} locale={locale} defaultLocale="en">
                {children}
            </IntlProvider>
        </Context.Provider>
    )
}

export default ConfigProvider;