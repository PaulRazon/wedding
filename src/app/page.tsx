"use client";

import { useState, useEffect, useRef } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Ceremony from "@/components/Ceremony";
import Reception from "@/components/Reception";
import DressCode from "@/components/DressCode";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import PhotoSection from "@/components/PhotoSection";
import LoveStoryCard from "@/components/LoveStoryCard";
import ReceptionDetails from "@/components/ReceptionDetails";
import WeddingSponsors from "@/components/WeddingSponsors";
import GiftsSection from "@/components/GiftsSection";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    setShowWelcome(false);
    // Start music automatically when invitation opens
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch(() => {
            // If autoplay fails, user will need to click the music button
            console.log("Autoplay prevented by browser");
          });
      }
    }, 1000);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <>
      {/* Welcome Screen */}
      {showWelcome && <WelcomeScreen onOpenInvitation={handleOpenInvitation} />}

      {/* Main Website */}
      <div
        className={`min-h-screen bg-wedding-light-bg dark:bg-wedding-dark-bg 
                     transition-colors duration-300 font-cormorant ${
                       showWelcome ? "hidden" : "block"
                     }`}
      >
        {/* Background Music */}
        <audio ref={audioRef} loop>
          <source src="/song.mp4" type="audio/mpeg" />
        </audio>

        {/* Navigation */}
        <Navbar isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />

        {/* Hero Section */}
        <Hero />

        {/* Love Story Card */}
        <LoveStoryCard />
        {/* Our Story Section */}
        <OurStory />
        {/* Photo Section 1 */}
        <PhotoSection
          imageUrl="/save-date.jpg"
          title="Queridas Almas Luminosas"
          quote="Estamos muy felices de dar este paso en nuestra vida y hoy queremos compartir nuestra alegría junto a ustedes. Por eso hemos elegido a las personas más cercanas en nuestra vida, ¡sería un gusto tenerte en un día tan significativo para nosotros!"
          reverse={false}
        />

        {/* Ceremony Section */}
        <Ceremony />

        {/* Photo Section 2 */}
        <PhotoSection
          imageUrl="/resource-photo-2.jpg"
          quote="El amor verdadero no se encuentra, se construye día a día con paciencia, comprensión y respeto mutuo."
          author="Anahí & Eduardo"
          reverse={true}
        />
        {/* Reception Section */}
        <Reception />

        {/* Dress Code Section */}
        <DressCode />

        {/* Gallery Section */}
        <Gallery />

        {/* Photo Section 3 */}
        <PhotoSection
          imageUrl="/resource-photo-3.jpg"
          quote="Dos almas con un solo pensamiento, dos corazones que laten como uno."
          author="Friedrich Halm"
          reverse={false}
        />

        

        {/* Footer */}
        <GiftsSection />
        {/* Reception Details */}
        <WeddingSponsors />

        
        

{/* RSVP Section */}
        <RSVP />
        <Footer />
        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />
      </div>
    </>
  );
}
