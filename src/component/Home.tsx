import * as React from "react";
import {useTranslation} from "react-i18next";

export default function Home() {
    const { t, i18n } = useTranslation();
    const [input, setInput] = React.useState("");
    return (
        <div className="text-center">
            <div>
                <input
                    type="text"
                    value={input}
                    className="text-center bg-transparent rounded px-4 py-2 outline-none active-none w-25"
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div>
                <button className="btn m-3 text-sm"> {t('cta')} </button>
            </div>
            <h2>[Home Layout]</h2>
        </div>
    );
}