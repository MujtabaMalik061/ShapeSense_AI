import { ArrowRight, Check, Dumbbell, Sparkles } from "lucide-react";
import { IMAGES } from "../services/Constants";

const LandingHero = ({ ButtonClick }) => (
  <div className="ss-hero">
    <img
      className="ss-hero-image"
      src={IMAGES.slideImage2}
      alt="Athlete preparing for a barbell workout in a gym"
      fetchPriority="high"
    />
    <div className="ss-hero-shade" />
    <div className="ss-shell ss-hero-inner">
      <div className="ss-hero-copy">
        <span className="ss-eyebrow">
          <Sparkles size={15} /> A smarter approach to fitness
        </span>
        <h1>
          Your goals.
          <br />
          Your pace.
          <br />
          <span>Your stronger self.</span>
        </h1>
        <p>
          Make every day a step forward. Bring your workouts, nutrition, and AI
          guidance together in one place, built around you.
        </p>
        <div className="ss-actions">
          <button className="ss-button" onClick={ButtonClick}>
            Build my plan <ArrowRight size={18} />
          </button>
          <a className="ss-text-link" href="#workflow">
            See how it works <ArrowRight size={17} />
          </a>
        </div>
        <div className="ss-hero-notes">
          <span>
            <Check size={15} /> Tailored to your goals
          </span>
          <span>
            <Check size={15} /> Gym or home
          </span>
        </div>
      </div>
      <div className="ss-workout-note">
        <span className="ss-note-icon">
          <Dumbbell size={22} />
        </span>
        <div>
          <small>YOUR NEXT CHAPTER</small>
          <strong>A plan with purpose.</strong>
          <span>Train with intention. Build consistency.</span>
        </div>
      </div>
      <div className="ss-hero-bottom">
        <span>BUILT AROUND YOU. POWERED BY AI.</span>
        <a href="#features">
          Explore ShapeSense <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </div>
);

export default LandingHero;
