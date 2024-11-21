import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="hidden md:flex md:pl-3 py-2 md:py-4 w-full font-semibold">
      <select
        className="bg-tns-ash-gray-light focus:outline-none  cursor-pointer
        hover:ring-0" 
        onChange={changeLanguage}
        defaultValue={i18n.language}
      >
        <option value="en">EN</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
