import React, { useState, useEffect } from 'react';
import { Bone, Dog, Phone, Mail, MapPin, Menu, X, Sparkles } from 'lucide-react';

// Helper component for icons
const ServiceIcon = ({ icon, className }) => {
    const icons = {
        'DogWalking': <Dog className={className} />,
        'DropIn': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
        'Training': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 14v8"/><path d="M15.29 14.29 18 17l-2.71 2.71"/><path d="m9 14-2.71 2.71L9 19.42"/><path d="m18 7-2.71-2.71L18 1.58"/><path d="m6 7-2.71-2.71L6 1.58"/><path d="M14 2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2Z"/><path d="M19 12a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2Z"/></svg>,
        'PuppyCare': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0 0v8"/><path d="M16 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0 0v8"/><path d="M4 20h16"/><path d="M10 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/><path d="M16 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/></svg>,
        'MultiDog': <Dog className={className} />,
        'Overnight': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2a7 7 0 1 0 10 10"/><path d="M12 12a5 5 0 1 0 8.94 2.06"/></svg>,
        'Tech': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 18h.01"/><path d="M16 22h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Z"/></svg>,
    };
    return icons[icon] || <Bone className={className} />;
};


// Header Component
const Header = ({ onLinkClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#services', text: 'Services' },
        { href: '#about', text: 'About' },
        { href: '#gallery', text: 'Gallery' },
        { href: '#pricing', text: 'Pricing' },
        { href: '#testimonials', text: 'Reviews' },
        { href: '#faq', text: 'FAQ' },
    ];
    
    const handleNavClick = (e, href) => {
        onLinkClick(e, href);
        setIsOpen(false);
    };

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => onLinkClick(e, '#home')} className="flex items-center gap-2 text-2xl font-bold text-slate-800">
                    <Dog className="text-amber-500" />
                    <span>The Dog Haus</span>
                </a>
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => onLinkClick(e, link.href)} className="text-slate-600 hover:text-amber-500 transition-colors duration-300">{link.text}</a>
                    ))}
                </nav>
                <a href="#contact" onClick={(e) => onLinkClick(e, '#contact')} className="hidden md:inline-block bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                    Book Now
                </a>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                         {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-slate-600 hover:text-amber-500 transition-colors duration-300">{link.text}</a>
                        ))}
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300">
                            Book Now
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

// Hero Section
const Hero = ({ onLinkClick }) => (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-amber-50 to-rose-50 text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                Professional Pet Care You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Expert dog walking and pet sitting services by Alana Hausker & Marshall.
            </p>
            <a href="#contact" onClick={(e) => onLinkClick(e, '#contact')} className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Your Free Meet & Greet
            </a>
            <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-2 text-slate-700 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                    <Bone size={18} className="text-amber-500" />
                    <span>Licensed & Insured</span>
                </div>
                 <div className="flex items-center gap-2 text-slate-700 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                    <Bone size={18} className="text-amber-500" />
                    <span>Pet First Aid Certified</span>
                </div>
                 <div className="flex items-center gap-2 text-slate-700 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                    <Bone size={18} className="text-amber-500" />
                    <span>Bonded Professional</span>
                </div>
                 <div className="flex items-center gap-2 text-slate-700 bg-white/50 px-4 py-2 rounded-full shadow-sm">
                    <Bone size={18} className="text-amber-500" />
                    <span>GPS Tracked Walks</span>
                </div>
            </div>
        </div>
    </section>
);

// About Section
const About = () => (
    <section id="about" className="py-20 bg-amber-50/50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About The Dog Haus</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-slate-700">
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Hi, I'm Alana Hausker</h3>
                    <p className="mb-4">As a certified professional pet sitter and dog trainer, I founded The Dog Haus to provide a premium alternative to app-based pet care services. My passion for animals and commitment to their well-being drives everything we do.</p>
                    <p className="mb-6">Unlike casual dog walkers, I bring professional expertise and a genuine love for animals to every interaction. Your pet isn't just another appointment – they're a valued member of The Dog Haus family.</p>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-slate-800 mb-4">Professional Credentials</h4>
                        <ul className="space-y-2">
                            {['Certified Professional Pet Sitter (CPPS)', 'Professional Dog Trainer Certification', 'Pet First Aid & CPR Certified', 'Fully Licensed, Bonded & Insured', 'Member of Pet Sitters International'].map(cred => (
                                <li key={cred} className="flex items-center gap-3">
                                    <Bone size={18} className="text-amber-500" />
                                    <span>{cred}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-w-4 aspect-h-5">
                         <img src="https://i.imgur.com/L7sU70V.jpeg" alt="Alana Hausker with dogs" className="rounded-xl shadow-2xl object-cover w-full h-full" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-500 rounded-full flex items-center justify-center text-white text-6xl transform rotate-12">
                        <Dog />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Services Section
const Services = () => {
    const services = [
        { icon: 'DogWalking', title: 'Dog Walking', description: "Professional walks tailored to your dog's needs. Every walk includes GPS tracking, photos, and a detailed report card.", details: ['30-minute walks', '60-minute adventures', 'Group or solo options'] },
        { icon: 'DropIn', title: 'Drop-In Visits', description: "Perfect for quick potty breaks, feeding times, or medication administration when you can't be there.", details: ['20-minute express visits', '30-minute standard visits', 'Customized care routines'] },
        { icon: 'Training', title: 'Training Reinforcement Walks', description: "Specialized walks that reinforce good behavior and training. Perfect for maintaining your dog's training progress.", premium: true, details: ['Loose-leash walking practice', 'Basic command reinforcement', 'Behavior correction support'] },
        { icon: 'PuppyCare', title: 'Puppy Care Packages', description: "Specialized care for puppies under 5 months, focusing on potty training, socialization, and basic commands.", premium: true, details: ['Multiple daily visits', 'Potty training support', 'Early socialization'] },
        { icon: 'MultiDog', title: 'Multiple Dog Walking', description: "Expert handling of multiple dogs from the same household. Years of experience managing group dynamics safely.", details: ['Experienced with pack dynamics', 'Safe group management', 'Reduced rates for multiple dogs'] },
        { icon: 'Overnight', title: 'Overnight Pet Sitting', description: "In-home overnight care to maintain your pet's routine and provide companionship while you're away.", details: ['Maintains familiar environment', 'Includes walks and feedings', 'Home security presence'] },
        { icon: 'Tech', title: 'Technology-Enabled Care', description: "Every service includes modern conveniences for your peace of mind.", details: ['GPS-tracked walks', 'Photo/video updates', 'Digital report cards'] },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                           {service.premium && <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</span>}
                            <div className="bg-amber-100 text-amber-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                               <ServiceIcon icon={service.icon} className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                            <p className="text-slate-600 mb-4">{service.description}</p>
                            <ul className="space-y-2 text-slate-600">
                                {service.details.map((detail, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Bone size={16} className="text-amber-500" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Gallery Section
const Gallery = () => {
    const images = [
        { id: 'L7sU70V', title: 'Alana and Marshall' },
        { id: 'Ac32wxi', title: 'Marshall enjoying the outdoors' },
        { id: 'eAXX98J', title: 'A happy client' },
        { id: 'Oqxvza6', title: 'Walk time!' },
        { id: 'u645nkt', title: 'Marshall posing' },
        { id: 'Y6kTO0I', title: 'Ready for an adventure' },
        { id: 'YLEYCrA', title: 'Relaxing after a long walk' },
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">Meet the Pack</h2>
                <p className="text-lg text-center text-slate-600 mb-12 max-w-2xl mx-auto">A glimpse into our daily adventures with our furry friends, featuring owner Alana and her best boy, Marshall.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div key={image.id} className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                            <img 
                                src={`https://i.imgur.com/${image.id}.jpeg`} 
                                alt={image.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/fef2f2/ef4444?text=Image+Not+Found`; }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Pricing Section
const Pricing = () => {
    const pricingTiers = [
        { service: 'Standard Walk', duration: '30 mins', description: 'Perfect for a quick exercise and potty break', price: '$28' },
        { service: 'Extended Walk', duration: '60 mins', description: 'Ideal for high-energy dogs needing extra exercise', price: '$40' },
        { service: 'Training Walk', duration: '30 mins', description: '🌟 Premium: Reinforces training & good behavior', price: '$38' },
        { service: 'Drop-In Visit', duration: '20 mins', description: 'Quick visit for feeding, meds, or potty break', price: '$22' },
        { service: 'Puppy Visit', duration: '30 mins', description: '🌟 Premium: Specialized care for puppies', price: '$32' },
        { service: 'Overnight Sitting', duration: 'Per night', description: "In-home care to maintain your pet's routine", price: '$95' },
    ];
    const additionalServices = [
        { service: 'Additional Pet', description: 'Same household, per service', price: '+$5' },
        { service: 'Weekend Service', description: 'Premium weekend rate (Sat/Sun)', price: '+$8' },
        { service: 'Holiday Service', description: 'Major holidays (e.g., Thanksgiving, Christmas)', price: '+$15' },
    ];

    return (
        <section id="pricing" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Transparent Pricing</h2>
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="p-6 bg-slate-800 text-white">
                        <h3 className="text-2xl font-bold text-center">Professional Pet Care Services</h3>
                    </div>
                    <div className="divide-y divide-slate-200">
                        {pricingTiers.map((tier, index) => (
                            <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center p-4 hover:bg-amber-50/50 transition-colors duration-200">
                                <strong className="text-slate-800 md:col-span-1 col-span-2">{tier.service}</strong>
                                <span className="text-slate-600 text-right md:text-left">{tier.duration}</span>
                                <p className="text-slate-500 col-span-2 md:col-span-1">{tier.description}</p>
                                <span className="font-bold text-lg text-rose-500 text-right">{tier.price}</span>
                            </div>
                        ))}
                    </div>
                     <div className="p-4 bg-slate-100">
                        <h4 className="text-xl font-bold text-slate-700 text-center">Additional Services</h4>
                    </div>
                     <div className="divide-y divide-slate-200">
                        {additionalServices.map((tier, index) => (
                            <div key={index} className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center p-4 hover:bg-amber-50/50 transition-colors duration-200">
                                <strong className="text-slate-800">{tier.service}</strong>
                                <p className="text-slate-500">{tier.description}</p>
                                <span className="font-bold text-lg text-rose-500 text-right">{tier.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Testimonials Section
const Testimonials = () => {
    const testimonials = [
        { name: 'Sarah M.', quote: "Alana is amazing! She's helped reinforce our puppy's training during walks, and we've seen such improvement. The GPS tracking and photos give us peace of mind every time." },
        { name: 'Michael R.', quote: "Alana's experience with multiple dogs really shows! She handles my two energetic labs with such confidence and care. Marshall is proof of her training expertise!" },
        { name: 'Jennifer K.', quote: "The training reinforcement walks have been a game-changer for our rescue dog. Alana's expertise shows in every interaction. Highly recommend!" },
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">What Our Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-amber-50/60 p-8 rounded-xl shadow-lg relative">
                             <div className="absolute top-0 left-6 -translate-y-1/2 text-8xl text-amber-200/80 font-serif">"</div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                            </div>
                            <p className="text-slate-600 mb-6 z-10 relative">{testimonial.quote}</p>
                            <div className="font-bold text-slate-700">- {testimonial.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// FAQ Section
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h4 className="text-lg font-semibold text-slate-800">{question}</h4>
                <svg className={`w-6 h-6 text-amber-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isOpen && <div className="mt-4 text-slate-600 pr-6">{answer}</div>}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { q: 'What areas do you serve?', a: <p>We currently serve the greater Anytown area. Please contact us to confirm if we cover your specific neighborhood.</p> },
        { q: 'How do I book services?', a: <p>Simply fill out our contact form below or call us directly. We'll schedule a free meet & greet to discuss your pet's needs and create a customized care plan.</p> },
        { q: 'What makes you different from Rover or Wag?', a: <p>Unlike app-based services, we're a fully licensed, bonded, and insured professional business. You'll work directly with certified professionals, not random contractors. We provide consistent, personalized care with a focus on building long-term relationships with both pets and their families.</p> },
        { q: 'Do you offer last-minute bookings?', a: <p>While we recommend booking in advance to ensure availability, we do our best to accommodate last-minute requests for our regular clients. Emergency services may be subject to availability and additional fees.</p> },
        { q: 'What happens if my pet needs medical attention?', a: <p>All our staff are Pet First Aid & CPR certified. In case of emergency, we'll immediately contact you and your veterinarian. We maintain comprehensive insurance coverage and have protocols in place for any situation.</p> },
    ];
    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => <FAQItem key={index} question={faq.q} answer={faq.a} />)}
                </div>
            </div>
        </section>
    );
};

// ✨ AI Service Recommender Section
const ServiceRecommender = () => {
    const [petDescription, setPetDescription] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const servicesList = [
        { name: 'Dog Walking', desc: "Professional walks tailored to your dog's needs. 30 or 60-minute options." },
        { name: 'Drop-In Visits', desc: "Quick potty breaks, feeding, or medication. 20 or 30-minute options." },
        { name: 'Training Reinforcement Walks', desc: "Specialized walks that reinforce good behavior and training." },
        { name: 'Puppy Care Packages', desc: "Specialized care for puppies under 5 months, focusing on potty training and socialization." },
        { name: 'Multiple Dog Walking', desc: "Expert handling of multiple dogs from the same household." },
        { name: 'Overnight Pet Sitting', desc: "In-home overnight care to maintain your pet's routine." },
    ];

    const handleGenerateRecommendations = async () => {
        if (!petDescription.trim()) {
            setError('Please describe your pet first!');
            return;
        }
        setIsLoading(true);
        setError('');
        setRecommendations([]);

        const prompt = `Based on the following pet description, recommend the top 1-3 most suitable pet care services from the provided list. For each recommendation, provide a brief, friendly explanation for why it's a good fit for the pet.

        Available Services:
        ${servicesList.map(s => `- ${s.name}: ${s.desc}`).join('\n')}

        Pet Description:
        "${petDescription}"
        `;

        try {
            let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = {
                contents: chatHistory,
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "OBJECT",
                        properties: {
                            recommendations: {
                                type: "ARRAY",
                                items: {
                                    type: "OBJECT",
                                    properties: {
                                        serviceName: { type: "STRING" },
                                        reason: { type: "STRING" }
                                    },
                                    required: ["serviceName", "reason"]
                                }
                            }
                        },
                        required: ["recommendations"]
                    }
                }
            };
            
            // Use environment variable for API key
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
            if (!apiKey) {
                throw new Error("Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your environment variables.");
            }
            
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error("API Error Response:", errorBody);
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();
            
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const jsonText = result.candidates[0].content.parts[0].text;
                const parsedJson = JSON.parse(jsonText);
                setRecommendations(parsedJson.recommendations || []);
            } else {
                console.error("Unexpected API response structure:", result);
                throw new Error('Failed to get recommendations from the AI.');
            }

        } catch (err) {
            console.error(err);
            setError(err.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="recommender" className="py-20 bg-rose-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Not Sure Where to Start?</h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Describe your furry friend, and our AI assistant will suggest the perfect services for their needs!</p>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <textarea
                        value={petDescription}
                        onChange={(e) => setPetDescription(e.target.value)}
                        placeholder="e.g., 'My dog is a 2-year-old high-energy Golden Retriever named Buddy. He needs a lot of exercise and pulls on the leash sometimes. I work long hours.'"
                        rows="5"
                        className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none mb-4"
                        disabled={isLoading}
                    ></textarea>
                    <button
                        onClick={handleGenerateRecommendations}
                        disabled={isLoading}
                        className="w-full bg-rose-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 disabled:bg-rose-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18c.83 0 1.5-.67 1.5-1.5c0-.83-.67-1.5-1.5-1.5c-.83 0-1.5.67-1.5 1.5c0 .83.67 1.5 1.5 1.5Z"/><path d="m18.5 9.5 2.5-2.5"/><path d="m12.35 2.65 2.15-2.15"/><path d="M4.22 19.78 2.07 17.63"/><path d="M12.35 21.35 10.2 19.2"/><path d="m18.5 14.5 2.5 2.5"/><path d="M6 9c0-3.31 2.69-6 6-6c.08 0 .15 0 .23.01"/><path d="M17.5 6c2.5 2.5 2.5 6.55.01 9.05L16 13.5"/><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2"/></svg>
                        )}
                        <span>{isLoading ? 'Thinking...' : '✨ Find the Perfect Service'}</span>
                    </button>
                </div>
                
                {error && <p className="text-red-500 mt-4 font-semibold">{error}</p>}

                {recommendations.length > 0 && (
                     <div className="mt-12 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-slate-800 mb-6">Our AI Recommends:</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {recommendations.map((rec, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{rec.serviceName}</h4>
                                    <p className="text-slate-600">{rec.reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};


// Contact Section
const Contact = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleGenerateMessage = async () => {
        if (!message.trim()) {
            setError('Please tell us a bit about your pet first!');
            return;
        }
        setIsLoading(true);
        setError('');

        const prompt = `You are a friendly pet owner writing a message to a professional pet sitter. Based on the following notes, write a concise and friendly message to inquire about their services. Include the pet's name, breed, age, and any key details provided. Make it sound natural and friendly.

        My notes:
        "${message}"
        `;

        try {
            let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
            
            // Use environment variable for API key
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
            if (!apiKey) {
                throw new Error("Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your environment variables.");
            }
            
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                 const errorBody = await response.text();
                console.error("API Error Response:", errorBody);
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setMessage(text);
            } else {
                console.error("Unexpected API response structure:", result);
                throw new Error('Failed to generate a message from the AI.');
            }
        } catch (err) {
            console.error(err);
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission to a backend
        setFormSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-slate-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-slate-300 mb-8">Schedule your free meet & greet today!</p>
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    <div className="flex items-center gap-3">
                        <Mail className="text-amber-400" />
                        <span>hello@thedoghaus.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-amber-400" />
                        <span>(555) 123-PAWS</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="text-amber-400" />
                        <span>Serving Anytown, USA</span>
                    </div>
                </div>

                {formSubmitted ? (
                    <div className="max-w-xl mx-auto bg-slate-700 p-8 rounded-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                        <p>Your message has been sent. We'll be in touch shortly to schedule your meet & greet!</p>
                    </div>
                ) : (
                    <form className="max-w-xl mx-auto text-left" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Your Name" required className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-amber-500 focus:outline-none" />
                            <input type="email" placeholder="Email" required className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-amber-500 focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <input type="tel" placeholder="Phone" required className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-amber-500 focus:outline-none" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="pet-details" className="block text-sm font-medium text-slate-300 mb-2">Tell us about your pet(s) (name, breed, age, special needs...)</label>
                            <textarea
                                id="pet-details"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Just jot down some notes and our AI can help polish your message!"
                                rows="5"
                                className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                disabled={isLoading}
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <button
                                type="button"
                                onClick={handleGenerateMessage}
                                disabled={isLoading}
                                className="w-full bg-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-600 transition-all duration-300 disabled:bg-rose-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
                            >
                               {isLoading ? (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <Sparkles size={20} />
                                )}
                                <span>{isLoading ? 'Writing...' : '✨ Help Me Write My Message'}</span>
                            </button>
                            {error && <p className="text-red-500 mt-2 text-center font-semibold">{error}</p>}
                        </div>
                        <button type="submit" className="w-full bg-amber-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
                            Request Free Meet & Greet
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <div className="container mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} The Dog Haus. All rights reserved.</p>
            <p className="text-sm mt-2">Licensed, Bonded & Insured | Member of Pet Sitters International</p>
        </div>
    </footer>
);


// Main App Component
export default function App() {
    
    // Smooth scrolling for navigation links
    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Add animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.service-card, .testimonial, .faq-item').forEach(el => {
            observer.observe(el);
        });
        
        // Add CSS for animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translate3d(0, 40px, 0);
                }
                to {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                }
            }
            .fade-in-up {
                animation-name: fadeInUp;
                animation-duration: 0.8s;
                animation-fill-mode: both;
            }
        `;
        document.head.appendChild(style);

        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
            observer.disconnect();
        }
    }, []);

    return (
        <div className="bg-white font-sans">
            <Header onLinkClick={handleLinkClick} />
            <main>
                <Hero onLinkClick={handleLinkClick} />
                <About />
                <Services />
                <Gallery />
                <Pricing />
                <Testimonials />
                <FAQ />
                <ServiceRecommender />
                <Contact />
            </main>
            <Footer />
        </div>
    );

}

