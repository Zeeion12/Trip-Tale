
import { useState } from 'react';
import { Button } from './ui/button';
import { MapPin, MessageCircle, Users, Menu, X } from 'lucide-react';

interface NavbarProps {
    currentView: string;
    onNavigate: (view: string) => void;
}

const Navbar = ({ currentView, onNavigate }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Beranda', icon: MapPin },
        { id: 'itinerary', label: 'Buat Itinerary', icon: MapPin },
        { id: 'forum', label: 'Forum', icon: MessageCircle },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => onNavigate('home')}
                    >
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">TripTale</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => onNavigate(item.id)}
                                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${currentView === item.id
                                        ? 'bg-orange-100 text-orange-600'
                                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                            Masuk
                        </Button>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            Daftar Gratis
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-600" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-600" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            onNavigate(item.id);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${currentView === item.id
                                            ? 'bg-orange-100 text-orange-600'
                                            : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.label}</span>
                                    </button>
                                );
                            })}

                            <div className="pt-4 space-y-2">
                                <Button variant="ghost" className="w-full text-gray-600 hover:text-orange-600">
                                    Masuk
                                </Button>
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                                    Daftar Gratis
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
