import LanguageData from './LanguageData.json';

export const getLanguage = (key, language) => {
    return LanguageData[key+"__"+language];
}