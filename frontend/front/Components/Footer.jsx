import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-12 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold font-poppins text-foreground mb-4">MindOasis</h3>
            <p className="text-muted-foreground">
              A safe space for mental health support, connecting you with therapists and supportive communities.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Home</Link></li>
              <li><Link to="/therapists" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Find a Therapist</Link></li>
              <li><Link to="/groups" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Support Groups</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Our Mission</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-teal transition-colors interactive-element">How It Works</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-teal transition-colors interactive-element">For Therapists</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal transition-colors interactive-element">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} MindOasis. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-teal transition-colors interactive-element">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-teal transition-colors interactive-element">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-teal transition-colors interactive-element">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;