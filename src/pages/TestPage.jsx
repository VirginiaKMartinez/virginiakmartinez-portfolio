function TestPage() {
    return (
        <div className="min-h-screen bg-background text-textDark font-sans flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">
                Test de Tailwind personalizado
            </h1>
            <p className="text-link mb-4">¿Ves este texto en azul?</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-link transition">
                Botón de prueba
            </button>
        </div>
    );
}

export default TestPage;
