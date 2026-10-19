import { useEffect } from "react";
import {
  ArrowRight,
  Apple,
  Brain,
  Check,
  ChevronDown,
  Dumbbell,
  HeartPulse,
  MessageCircle,
  Target,
  TrendingUp,
} from "lucide-react";
import { useNavigate, useOutletContext } from "react-router";
import LandingHero from "../components/LandingHero";
import { useAuth } from "../context/AuthContext";
import { userType } from "../services/Helpers";
import { IMAGES, sectionList } from "../services/Constants";
import { toast } from "sonner";
import "../assets/style/LandingPage.css";

const features = [
  {
    icon: Dumbbell,
    label: "01 / TRAIN",
    title: "More purpose in every rep.",
    text: "Create workout routines around your goals, experience, and available equipment.",
  },
  {
    icon: Apple,
    label: "02 / NOURISH",
    title: "Nutrition that fits your life.",
    text: "Get meal ideas and diet plans shaped around your preferences and fitness goals.",
  },
  {
    icon: HeartPulse,
    label: "03 / PROGRESS",
    title: "See the bigger picture.",
    text: "Keep your workouts, habits, and progress in view with a dedicated dashboard.",
  },
  {
    icon: Brain,
    label: "04 / LEARN",
    title: "A little guidance goes a long way.",
    text: "Ask your AI fitness coach questions about training and nutrition whenever you need direction.",
  },
];
const faqs = [
  [
    "Can I use ShapeSense as a beginner?",
    "Yes. Share your experience and goals when setting up your profile so you can create a plan that suits your starting point.",
  ],
  [
    "Do I need a gym membership?",
    "No. You can request bodyweight routines or workouts using the equipment you have at home.",
  ],
  [
    "Can I personalize my nutrition plan?",
    "Yes. Include your food preferences and goals when creating your diet plan.",
  ],
  [
    "How do I get started?",
    "Create an account, complete your fitness profile, and generate your first workout or nutrition plan.",
  ],
];

const LandingPage = () => {
  const { currentUser } = useAuth();
  const { setAcountState, setCurrentSection } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: 0 },
    );
    sectionList.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [setCurrentSection]);

  const startJourney = (route = "") => {
    const type = userType(currentUser);
    if (type === "noUser") setAcountState("signUp");
    else if (type === "notVerified")
      navigate(`/user-details/${currentUser._id}`);
    else if (type === "verified")
      navigate(
        typeof route === "string" && route
          ? route
          : `/dashboard/${currentUser._id}`,
      );
    else toast.error("Please log in again to continue.");
  };

  return (
    <main className="ss-landing">
      <section id="hero">
        <LandingHero ButtonClick={() => startJourney()} />
      </section>
      <div className="ss-principles">
        <div className="ss-shell">
          <span>
            <Target size={20} /> Personal goals. Personal plans.
          </span>
          <span>
            <Dumbbell size={20} /> Training that fits your routine
          </span>
          <span>
            <TrendingUp size={20} /> Consistency over perfection
          </span>
        </div>
      </div>
      <section id="features" className="ss-section ss-shell">
        <div className="ss-section-heading">
          <div>
            <span className="ss-kicker">YOUR FITNESS, CONNECTED</span>
            <h2>
              Everything you need.
              <br />
              One clear direction.
            </h2>
          </div>
          <p>
            Less time figuring out where to start.
            <br />
            More time moving toward what matters.
          </p>
        </div>
        <div className="ss-feature-grid">
          {features.map(({ icon: Icon, label, title, text }) => (
            <article className="ss-feature" key={label}>
              <div className="ss-feature-top">
                <Icon size={25} />
                <span>{label}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="workflow" className="ss-workflow">
        <div className="ss-shell ss-section">
          <span className="ss-kicker">SMALL STEPS. REAL DIRECTION.</span>
          <h2>
            Your starting line
            <br />
            is right here.
          </h2>
          <div className="ss-steps">
            {[
              [
                "01",
                "Tell us about you",
                "Your goals, fitness level, and preferences give your journey a personal starting point.",
              ],
              [
                "02",
                "Create your plan",
                "Generate workouts and nutrition guidance that fit the way you want to move.",
              ],
              [
                "03",
                "Show up. Keep going.",
                "Follow your routine, log your activity, and make your next step an informed one.",
              ],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span className="ss-step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="why" className="ss-shell ss-section ss-split">
        <div className="ss-plan-preview">
          <div className="ss-preview-header">
            <span>
              <Dumbbell size={18} /> YOUR TRAINING SPACE
            </span>
            <span className="ss-demo-label">Example plan</span>
          </div>
          <h3>
            A little structure.
            <br />A lot of possibility.
          </h3>
          <div className="ss-preview-row">
            <div>
              <small>FOCUS</small>
              <strong>Full-body strength</strong>
            </div>
            <span className="ss-pill">At your pace</span>
          </div>
          {[
            "Warm up & get moving",
            "Build strength with intention",
            "Cool down & recover",
          ].map((text, i) => (
            <div className="ss-plan-row" key={text}>
              <span>0{i + 1}</span>
              <p>{text}</p>
              <Check size={17} />
            </div>
          ))}
          <div className="ss-preview-footer">
            <HeartPulse size={18} /> One session. One step forward.
          </div>
        </div>
        <div className="ss-split-copy">
          <span className="ss-kicker">FITNESS THAT FITS</span>
          <h2>
            Built for your life.
            <br />
            And what comes next.
          </h2>
          <p>
            You bring the ambition. ShapeSense helps you turn it into a routine,
            with a place to plan, learn, and keep track of your journey.
          </p>
          <ul>
            <li>
              <Check size={18} /> Start from your own experience level
            </li>
            <li>
              <Check size={18} /> Bring training and nutrition together
            </li>
            <li>
              <Check size={18} /> Keep your progress within reach
            </li>
          </ul>
          <button className="ss-inline-button" onClick={() => startJourney()}>
            Find your starting point <ArrowRight size={18} />
          </button>
        </div>
      </section>
      <section id="tools" className="ss-shell ss-tools">
        <div>
          <MessageCircle size={29} />
          <div>
            <span className="ss-kicker">A QUESTION AWAY</span>
            <h3>Bring a little clarity to your next move.</h3>
            <p>
              Explore training and nutrition questions with your AI fitness
              coach.
            </p>
          </div>
        </div>
        <button
          className="ss-button ss-button-outline"
          onClick={() => startJourney("/coach")}
        >
          Meet your AI coach <ArrowRight size={18} />
        </button>
      </section>
      <section id="faq" className="ss-shell ss-section ss-faq">
        <div>
          <span className="ss-kicker">GOOD QUESTIONS</span>
          <h2>
            A little clarity
            <br />
            before you begin.
          </h2>
          <p>Getting started should feel simple.</p>
        </div>
        <div>
          {faqs.map(([question, answer]) => (
            <details className="ss-faq-item" key={question}>
              <summary>
                {question}
                <ChevronDown size={19} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="about" className="ss-shell ss-closing">
        <span className="ss-kicker">MAKE ROOM FOR A STRONGER YOU</span>
        <h2>
          Your next chapter
          <br />
          starts with one step.
        </h2>
        <p>
          A workout. A better habit. A little more consistency.
          <br />
          Let’s build from there.
        </p>
        <button className="ss-button" onClick={() => startJourney()}>
          Start my journey <ArrowRight size={18} />
        </button>
      </section>
      <footer className="ss-footer ss-shell">
        <a href="#hero" className="ss-footer-brand">
          <img src={IMAGES.siteLogo} alt="" />
          ShapeSense <span>AI</span>
        </a>
        <p>Fitness with direction.</p>
        <span>© {new Date().getFullYear()} ShapeSense AI</span>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </main>
  );
};
export default LandingPage;
