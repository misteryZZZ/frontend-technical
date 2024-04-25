export default async function Footer() {
    return (
        <footer className="bg-gray-900 p-4 mt-8">
            <div className="max-w-6xl mx-auto">
                <p className="text-white text-center">
                Dibuat pada 23 April ©{new Date().getFullYear()} 
                </p>
            </div>
        </footer>
    );
}