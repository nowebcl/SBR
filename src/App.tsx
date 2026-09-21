import React, { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';

import { HeroSlider } from './components/home/HeroSlider';
import { PropertySearchBar } from './components/home/PropertySearchBar';
import { AboutSection } from './components/home/AboutSection';
import { CounterStats } from './components/home/CounterStats';
import { FeaturedPropertySpotlight } from './components/home/FeaturedPropertySpotlight';
import { ServicesSection } from './components/home/ServicesSection';
import { FeaturedProperties } from './components/home/FeaturedProperties';
import { FloorPlansSection } from './components/home/FloorPlansSection';
import { VideoTourSection } from './components/home/VideoTourSection';
import { BuildingAmenities } from './components/home/BuildingAmenities';
import { LocationsGrid } from './components/home/LocationsGrid';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { PartnersBanner } from './components/home/PartnersBanner';
import { BlogSection } from './components/home/BlogSection';
import { CtaBanner } from './components/home/CtaBanner';

import { QuickViewModal } from './components/modals/QuickViewModal';
import { ScheduleVisitModal } from './components/modals/ScheduleVisitModal';
import { VideoModal } from './components/modals/VideoModal';
import { FavoritesDrawer } from './components/modals/FavoritesDrawer';
import { SearchModal } from './components/modals/SearchModal';
import { AddListingModal } from './components/modals/AddListingModal';

import { propertiesData } from './data/properties';
import { FilterState, Property } from './types';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export const App: React.FC = () => {
  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(['prop-1']);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Modals state
  const [quickViewProperty, setQuickViewProperty] = useState<Property | null>(null);
  const [scheduleProperty, setScheduleProperty] = useState<Property | null>(null);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);

  // Search and Filter state
  const [filters, setFilters] = useState<FilterState>({
    operation: 'Todos',
    propertyType: '',
    comuna: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      operation: 'Todos',
      propertyType: '',
      comuna: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: ''
    });
  };

  const handleSearchScroll = () => {
    const el = document.getElementById('propiedades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLocation = (comunaName: string) => {
    setFilters((prev) => ({ ...prev, comuna: comunaName }));
    handleSearchScroll();
  };

  // Toggle favorite
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter properties based on current filters
  const filteredProperties = propertiesData.filter((prop) => {
    if (filters.operation !== 'Todos' && prop.operation !== filters.operation) {
      return false;
    }
    if (filters.propertyType && prop.propertyType !== filters.propertyType) {
      return false;
    }
    if (filters.comuna && !prop.location.comuna.toLowerCase().includes(filters.comuna.toLowerCase())) {
      return false;
    }
    if (filters.maxPrice) {
      const maxUF = parseInt(filters.maxPrice);
      if (prop.operation === 'Venta' && prop.priceUF > maxUF) return false;
      if (prop.operation === 'Arriendo' && prop.priceUF > maxUF) return false;
    }
    if (filters.bedrooms && prop.specs.bedrooms < parseInt(filters.bedrooms)) {
      return false;
    }
    return true;
  });

  const favoriteProperties = propertiesData.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden w-full max-w-full relative">
      {/* Top Bar */}
      <TopBar onAddListingClick={() => setIsAddListingOpen(true)} />

      {/* Main Navbar */}
      <Navbar
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onScheduleVisit={() => {
          setScheduleProperty(null);
          setIsScheduleOpen(true);
        }}
      />

      {/* Mobile Drawer Menu */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onScheduleVisit={() => {
          setScheduleProperty(null);
          setIsScheduleOpen(true);
        }}
        onAddListing={() => setIsAddListingOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero Slider */}
        <HeroSlider
          onExploreProperties={handleSearchScroll}
          onScheduleVisit={() => {
            setScheduleProperty(null);
            setIsScheduleOpen(true);
          }}
        />

        {/* Floating Property Search Filter Bar */}
        <PropertySearchBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          onSearch={handleSearchScroll}
        />

        {/* About SBR.cl */}
        <AboutSection
          onScheduleVisit={() => {
            setScheduleProperty(null);
            setIsScheduleOpen(true);
          }}
        />

        {/* Counter Stats (Counter Up Area) */}
        <CounterStats />

        {/* Featured Property Spotlight (Quarter About Us Area 2: Today Sells Properties) */}
        <FeaturedPropertySpotlight
          property={propertiesData[1]}
          onQuickView={(prop) => setQuickViewProperty(prop)}
          onScheduleVisit={(prop) => {
            setScheduleProperty(prop);
            setIsScheduleOpen(true);
          }}
        />

        {/* Services Section (Quarter Feature Area 6: Our Main Focus) */}
        <ServicesSection
          onScheduleVisit={() => {
            setScheduleProperty(null);
            setIsScheduleOpen(true);
          }}
          onAddListing={() => setIsAddListingOpen(true)}
          onExploreProperties={handleSearchScroll}
        />

        {/* Featured Properties Section (Quarter Product Slider Area) */}
        <FeaturedProperties
          properties={filteredProperties}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onQuickView={(prop) => setQuickViewProperty(prop)}
        />

        {/* Apartments & Floor Plans Section (Quarter Apartments Plan Area) */}
        <FloorPlansSection
          onScheduleVisit={() => {
            setScheduleProperty(null);
            setIsScheduleOpen(true);
          }}
        />

        {/* Virtual Video Tour Section (Quarter Video Area) */}
        <VideoTourSection onOpenVideo={() => setIsVideoOpen(true)} />

        {/* Building Amenities (Quarter Category Area: Building Aminities) */}
        <BuildingAmenities onExploreProperties={handleSearchScroll} />

        {/* Cities & Locations Exploration (Quarter Top Categories) */}
        <LocationsGrid onSelectLocation={handleSelectLocation} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Partners and Banks Banner */}
        <PartnersBanner />

        {/* Blog & News */}
        <BlogSection />

        {/* Call to Action Banner */}
        <CtaBanner
          onScheduleVisit={() => {
            setScheduleProperty(null);
            setIsScheduleOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuickViewModal
        property={quickViewProperty}
        onClose={() => setQuickViewProperty(null)}
        onScheduleVisit={(prop) => {
          setScheduleProperty(prop);
          setIsScheduleOpen(true);
        }}
      />

      <ScheduleVisitModal
        isOpen={isScheduleOpen}
        property={scheduleProperty}
        onClose={() => {
          setIsScheduleOpen(false);
          setScheduleProperty(null);
        }}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        favorites={favoriteProperties}
        onClose={() => setIsFavoritesOpen(false)}
        onRemoveFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setQuickViewProperty(prop)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        properties={propertiesData}
        onClose={() => setIsSearchOpen(false)}
        onSelectProperty={(prop) => setQuickViewProperty(prop)}
      />

      <AddListingModal
        isOpen={isAddListingOpen}
        onClose={() => setIsAddListingOpen(false)}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
