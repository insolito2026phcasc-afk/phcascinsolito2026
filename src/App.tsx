import React, { useState, useEffect } from 'react';
import { Navbar, NavigationTab } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DepartmentBoxes } from './components/DepartmentBoxes';
import { GamesSection } from './components/GamesSection';
import { RulesSection } from './components/RulesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { GameDetailsModal } from './components/GameDetailsModal';
import { 
  INITIAL_GAMES, 
  GameEvent, 
  parseGamesFromCsvText,
  ORGANIZING_COMMITTEE_COORDINATORS,
  OrganizingCoordinator,
  parseOrganizingCoordinatorsFromCsvText
} from './data/festivalData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [games, setGames] = useState<GameEvent[]>(INITIAL_GAMES);
  const [organizingCoordinators, setOrganizingCoordinators] = useState<OrganizingCoordinator[]>(ORGANIZING_COMMITTEE_COORDINATORS);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedGameForModal, setSelectedGameForModal] = useState<GameEvent | null>(null);

  // Load games dynamically from public/games.csv so user can edit in Excel easily
  useEffect(() => {
    fetch('/games.csv')
      .then((res) => {
        if (!res.ok) throw new Error('CSV not found');
        return res.text();
      })
      .then((csvText) => {
        const parsed = parseGamesFromCsvText(csvText);
        if (parsed && parsed.length > 0) {
          setGames(parsed);
        }
      })
      .catch((err) => {
        // Fallback to INITIAL_GAMES
        console.info('Using default built-in games data', err);
      });

    // Load organizing committee coordinators from public/organizing_committee.csv
    fetch('/organizing_committee.csv')
      .then((res) => {
        if (!res.ok) throw new Error('Organizing CSV not found');
        return res.text();
      })
      .then((csvText) => {
        const parsed = parseOrganizingCoordinatorsFromCsvText(csvText);
        if (parsed && parsed.length > 0) {
          setOrganizingCoordinators(parsed);
        }
      })
      .catch((err) => {
        console.info('Using default organizing committee coordinators', err);
      });
  }, []);

  // Listen to hash changes if student opens with #brochure or #games
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'brochure') setCurrentTab('brochure');
      else if (hash === 'games') setCurrentTab('games');
      else if (hash === 'rules') setCurrentTab('rules');
      else if (hash === 'contact') setCurrentTab('contact');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDepartmentFromHome = (deptId: 'arts' | 'commerce' | 'science') => {
    setSelectedDepartment(deptId);
    setCurrentTab('games');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      
      {/* Top Navbar with College Logo Link, Tab Navigation, and Register CTA */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area: Navigates cleanly between separate sections */}
      <main className="flex-1">
        
        {/* TAB 1: HOME PAGE (Contains ONLY content from Hero Section to Department Wise Games Section) */}
        {currentTab === 'home' && (
          <div>
            {/* Hero Section with Welcome Message, Orange Announcement Banner & 3 Metric Cards */}
            <HeroSection
              onOpenBrochure={() => handleNavigate('brochure')}
              onExploreGames={() => {
                setSelectedDepartment('all');
                handleNavigate('games');
              }}
              onOpenHelpdesk={() => handleNavigate('contact')}
            />

            {/* Department Wise Games Box (Arts, Commerce, Science) */}
            <DepartmentBoxes
              games={games}
              onSelectDepartmentAndNavigate={handleSelectDepartmentFromHome}
            />
          </div>
        )}

        {/* TAB 2: GAMES & REGISTRATION (12 Games with rules, description, type, price, copy number) */}
        {currentTab === 'games' && (
          <GamesSection
            games={games}
            selectedDepartment={selectedDepartment}
            onSelectDepartment={(deptId) => setSelectedDepartment(deptId)}
            onOpenGameDetails={(game) => setSelectedGameForModal(game)}
          />
        )}

        {/* TAB 3: RULES AND REGULATIONS */}
        {currentTab === 'rules' && (
          <RulesSection />
        )}

        {/* TAB 4: HORIZONTAL 3-PAGE BROCHURE */}
        {currentTab === 'brochure' && (
          <BrochureModal
            games={games}
          />
        )}

        {/* TAB 5: GAME HEADS DIRECTORY & CONTACT INQUIRIES */}
        {currentTab === 'contact' && (
          <ContactSection 
            games={games} 
            organizingCoordinators={organizingCoordinators}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectDepartment={handleSelectDepartmentFromHome}
      />

      {/* Game Details & Rules Modal */}
      <GameDetailsModal
        game={selectedGameForModal}
        onClose={() => setSelectedGameForModal(null)}
      />

    </div>
  );
}
