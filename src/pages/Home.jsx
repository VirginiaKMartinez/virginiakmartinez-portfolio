import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <section className="p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">{t("home.title")}</h1>
                <p className="text-lg text-gray-600 mb-8">
                    {t("home.subtitle")}
                </p>

                <div className="mt-10">
                    <a
                        href="/#projects"
                        className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                    >
                        {t("home.cta")}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
