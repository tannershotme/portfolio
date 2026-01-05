import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ExternalLink, 
  ChevronLeft, 
  Layers, 
  Music, 
  Code, 
  Zap, 
  Cpu,
  Calendar,
  Users,
  Layout,
  CheckCircle,
  Quote,
  Image as ImageIcon,
  ArrowUpRight,
  PlayCircle,
  Film,
  Headphones,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Project, ArchiveItem, Media } from './types';

// --- Mock Data ---

const projects: Project[] = [
  {
    id: 1,
    title: "Aural Architecture",
    client: "Blue Note Records",
    role: "Lead Audio Engineer & Composer",
    timeline: "Aug 2023 - Dec 2023",
    team: "Self + 2 Sound Engineers",
    category: "Music Production",
    tags: ["Grammy Winning", "Dolby Atmos", "Composition"],
    icon: <Music className="w-8 h-8 text-rose-400" />,
    color: "from-rose-900 to-rose-600",
    summary: "The Grammy-award winning album production that redefined spatial audio in modern jazz.",
    context: "Blue Note wanted to revitalize their catalog for the spatial audio era. They needed a production that respected the acoustic tradition of jazz while leveraging the immersive possibilities of Dolby Atmos.",
    challenge: "Translating the raw, chaotic energy of a live jazz quartet into a spatially accurate 3D mix without losing the warmth and 'glue' of vintage analog recording techniques.",
    solution: "We utilized a hybrid workflow, blending vintage analog preamps with bleeding-edge spatial audio plugins. I developed a custom Python script to automate panning based on frequency dynamics, allowing the mix to 'breathe' with the music.",
    process: [
      { 
        phase: "Phase 1: Discovery",
        title: "Acoustic Mapping & Pre-Production", 
        description: "Before recording a single note, we needed to understand the room. We mapped the physical resonance of the recording studio to create a digital 'twin' reverb impulse. This allowed us to place digital elements into a space that felt physically identical to the analog recording.",
        media: {
          type: "image",
          content: "Spectrogram Analysis",
          caption: "Frequency response map of Studio A"
        }
      },
      { 
        phase: "Phase 2: Development",
        title: "Automated Spatial Panning", 
        description: "Standard panning felt too static for jazz. I wrote a Python script interacting with the DAW API to analyze the transient attacks of the drums and subtly shift the 'room' mics in the Dolby Atmos bed, creating a psychoacoustic expansion effect on every snare hit.",
        media: {
          type: "code",
          language: "python",
          content: `def calculate_pan_position(amplitude, frequency):
    # Expand stereo width based on dynamic intensity
    width = base_width + (amplitude * expansion_factor)
    
    # Height mapping based on frequency brightness
    elevation = 0
    if frequency > 5000:
        elevation = (frequency - 5000) / 15000 * 100
        
    return { "x": width, "y": 0, "z": elevation }`
        }
      },
      { 
        phase: "Phase 3: Mixing",
        title: "The Hybrid Mix Bus", 
        description: "We routed the digital object outputs back through a Neve 8068 console. This 'round trip' added harmonic saturation that plugins couldn't replicate, gluing the 7.1.4 channels together into a cohesive whole.",
        media: {
          type: "quote",
          content: "The moment we ran the Atmos render through the Neve, the track stopped sounding like a tech demo and started sounding like a record."
        }
      }
    ],
    techStack: ["Pro Tools Ultimate", "Dolby Atmos Renderer", "Python (Panning Scripts)", "Neve 1073 Preamps"],
    impact: "Won Grammy for Best Immersive Audio Album. Cited by industry leaders as a benchmark for spatial jazz production.",
    stats: [
      { label: "Streams", value: "2.5M+" },
      { label: "Awards", value: "1 Grammy" },
      { label: "Channels", value: "7.1.4" }
    ],
    testimonial: {
      text: "Tanner didn't just mix the album; he built a world for the music to live in. It's unlike anything we've heard.",
      author: "Julian Lage, Guitarist"
    }
  },
  {
    id: 2,
    title: "VentureScale UI",
    client: "Fintech Unicorn (NDA)",
    role: "Head of Design Technology",
    timeline: "Jan 2024 - Present",
    team: "4 Designers, 6 Frontend Devs",
    category: "UI/UX & Leadership",
    tags: ["Design System", "React", "Fintech"],
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-900 to-indigo-600",
    summary: "A comprehensive design system and frontend architecture for a high-growth fintech startup.",
    context: "The startup was scaling rapidly, doubling headcount every 6 months. Inconsistent UI patterns were slowing down development, increasing tech debt, and confusing users.",
    challenge: "To build a unified design language that could serve three distinct product lines (Consumer, Business, Admin) while remaining flexible enough for rapid experimentation.",
    solution: "I led the creation of 'Titan', a React-based component library. We adopted atomic design principles and enforced strict accessibility compliance (WCAG AA). We also built a custom CLI tool to scaffold new features using Titan components.",
    process: [
      { 
        phase: "Phase 1: Audit",
        title: "The Component Audit", 
        description: "We cataloged over 400 distinct UI elements across the legacy platform. We found 14 different shades of blue and 6 different button styles. We consolidated these into a strict set of design tokens.",
        media: {
           type: "image",
           content: "Design Token Palette",
           caption: "Consolidated color variables vs Legacy hex codes"
        }
      },
      { 
        phase: "Phase 2: Architecture",
        title: "Composable Component API", 
        description: "We designed the React components to be headless where possible, separating logic from presentation. This allowed the 'Business' and 'Consumer' apps to share functionality but look distinctly different via Tailwind themes.",
        media: {
          type: "code",
          language: "tsx",
          content: `// Example of the polymorphic Button component
type ButtonProps<T extends React.ElementType> = {
  as?: T;
  variant?: 'primary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
} & React.ComponentPropsWithoutRef<T>;

export const Button = <T extends React.ElementType = 'button'>({ 
  as, variant = 'primary', ...props 
}: ButtonProps<T>) => {
  const Component = as || 'button';
  return <Component className={buttonStyles({ variant })} {...props} />;
};`
        }
      },
      { 
        phase: "Phase 3: Rollout",
        title: "Incremental Adoption Strategy", 
        description: "Instead of a 'big bang' rewrite, we used the Strangler Fig pattern. We wrapped legacy pages in a ThemeProvider and replaced leaf-node components (buttons, inputs) first, then moved up to layout containers."
      }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma Variables"],
    impact: "Reduced frontend development time by 40%. User retention increased by 15% within the first quarter of implementation.",
    stats: [
      { label: "Components", value: "120+" },
      { label: "Dev Speed", value: "+40%" },
      { label: "Adoption", value: "100%" }
    ],
    testimonial: {
      text: "Titan didn't just make our app prettier; it fundamentally changed how fast we ship code. A masterclass in systems thinking.",
      author: "CTO, VentureScale"
    }
  },
  {
    id: 3,
    title: "Neon Nexus",
    client: "Future Art Festival",
    role: "Creative Technologist",
    timeline: "3 Weeks",
    team: "Solo Project",
    category: "Creative Tech",
    tags: ["WebGL", "3D Graphics", "Interactive"],
    icon: <Code className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-900 to-emerald-600",
    summary: "An interactive browser-based 3D installation for a digital art festival.",
    context: "The festival needed a 'digital lobby' where online attendees could interact before the live streams began. It needed to run smoothly on mobile devices.",
    challenge: "To render 10,000 interactive particles in real-time on mobile browsers while reacting to microphone input, without draining battery life immediately.",
    solution: "Leveraged Three.js and custom GLSL shaders to offload calculations to the GPU (GPGPU). I implemented a custom audio analysis algorithm to drive particle velocity based on the beat.",
    process: [
      { 
        phase: "Phase 1: Prototyping",
        title: "GPU Particle Logic", 
        description: "CPU-based particle systems bottleneck at around 1,000 particles. To hit 10k+, I wrote a custom Fragment Shader to handle position and velocity calculations entirely on the graphics card.",
        media: {
          type: "code",
          language: "glsl",
          content: `void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D(texturePosition, uv);
  vec4 tmpVel = texture2D(textureVelocity, uv);

  // Audio reactivity kick
  float audioForce = texture2D(audioData, vec2(0.5, 0.0)).r;
  
  vec3 pos = tmpPos.xyz;
  vec3 vel = tmpVel.xyz;
  
  // Apply velocity + decay
  pos += vel * (1.0 + audioForce * 2.0);
  gl_FragColor = vec4(pos, 1.0);
}`
        }
      },
      { 
        phase: "Phase 2: Optimization",
        title: "Instanced Mesh Rendering", 
        description: "Using Three.js InstancedMesh, we reduced 10,000 draw calls to a single draw call. This was crucial for maintaining 60fps on mobile devices."
      },
      { 
        phase: "Phase 3: Interaction",
        title: "Web Audio API Integration", 
        description: "I built a customized FFT analyzer that specifically looked for sub-bass frequencies (kicks) and high-hat transients to map different visual effects to different parts of the drum kit.",
        media: {
          type: "image",
          content: "Visualizer State Machine",
          caption: "Mapping audio frequency bands to visual parameters"
        }
      }
    ],
    techStack: ["Three.js", "WebGL / GLSL", "React Three Fiber", "Web Audio API"],
    impact: "Featured on Awwwards and visited by over 50,000 unique users during the festival weekend.",
    stats: [
      { label: "FPS (Mobile)", value: "60" },
      { label: "Particles", value: "10k" },
      { label: "Visitors", value: "50k" }
    ],
    testimonial: {
      text: "Visually stunning and technically flawless. It turned our waiting room into the main event.",
      author: "Festival Director"
    }
  },
  {
    id: 4,
    title: "Founder's Dashboard",
    client: "SaaS Analytics Co.",
    role: "Product Strategist",
    timeline: "6 Months",
    team: "Product Team Lead",
    category: "Startup Strategy",
    tags: ["SaaS", "Product Management", "Analytics"],
    icon: <Zap className="w-8 h-8 text-amber-400" />,
    color: "from-amber-900 to-amber-600",
    summary: "A strategic pivot and dashboard redesign for a struggling SaaS platform.",
    context: "The company had great data but poor presentation. Users were logging in, getting overwhelmed by spreadsheets, and canceling subscriptions.",
    challenge: "Churn was high because users couldn't visualize the value they were getting from the data. We needed to move from 'Data dump' to 'Actionable insights'.",
    solution: "I conducted user interviews, identified the 'aha!' moment, and redesigned the onboarding flow and main dashboard to surface critical ROI metrics immediately. We shifted the product focus from reporting to forecasting.",
    process: [
      {
        phase: "Phase 1: Research",
        title: "The Churn Interviews",
        description: "I personally interviewed 20 churned customers. The common theme was 'I don't know what to do with this data.' It wasn't a utility problem; it was a narrative problem.",
        media: {
          type: "quote",
          content: "I felt like I needed a PhD in statistics just to understand if my marketing campaign was working."
        }
      },
      {
        phase: "Phase 2: UX Strategy",
        title: "Prioritizing the 'Aha!' Moment",
        description: "We moved the 'Predicted Revenue' metric from a sub-menu to the center of the dashboard. We also added natural language generation to explain the charts in plain English.",
        media: {
           type: "image",
           content: "Wireframe Iterations",
           caption: "Low-fi sketches of the new dashboard hierarchy"
        }
      }
    ],
    techStack: ["Mixpanel", "Figma", "React", "D3.js"],
    impact: "Churn reduced by 22% month-over-month. The company was acquired 18 months later.",
    stats: [
      { label: "Churn Red.", value: "22%" },
      { label: "DAU Growth", value: "3x" },
      { label: "Exit", value: "Acquired" }
    ],
    testimonial: {
      text: "Tanner found the signal in the noise. His product vision literally saved the company.",
      author: "CEO, SaaS Co."
    }
  }
];

const archiveData: ArchiveItem[] = [
  { 
    id: 1, 
    year: "2023", 
    title: "Spatial Audio VST Plugin", 
    category: "Audio Dev", 
    link: "github.com", 
    client: "Personal",
    media: {
      type: "image",
      src: "Plugin UI",
      description: "Custom UI built with JUCE and C++"
    }
  },
  { 
    id: 2, 
    year: "2023", 
    title: "Mono-Repo Build Tool", 
    category: "Development", 
    link: "npmjs.com", 
    client: "Open Source" 
  },
  { 
    id: 3, 
    year: "2022", 
    title: "Generative Art Series 04", 
    category: "Design", 
    link: "artblocks.io", 
    client: "ArtBlocks",
    media: {
      type: "image",
      src: "Gen Art 04",
      description: "Algorithmically generated texture study using p5.js"
    } 
  },
  { 
    id: 4, 
    year: "2022", 
    title: "Crypto Wallet UI Kit", 
    category: "Design", 
    link: "figma.com", 
    client: "Freelance",
    media: {
      type: "image",
      src: "Wallet UI",
      description: "High-fidelity prototypes for iOS"
    }
  },
  { 
    id: 5, 
    year: "2021", 
    title: "Ambient Looper App", 
    category: "Mobile Dev", 
    link: "apple.com", 
    client: "Personal",
    media: {
      type: "video",
      src: "demo",
      description: "Interaction demo showing gesture controls"
    }
  },
  { 
    id: 6, 
    year: "2021", 
    title: "Startup Landing Page", 
    category: "Web Dev", 
    link: "demo.com", 
    client: "Stealth Co." 
  },
  { 
    id: 7, 
    year: "2020", 
    title: "WebGL Fluid Sim", 
    category: "Creative Coding", 
    link: "codepen.io", 
    client: "Personal",
    media: {
      type: "video",
      src: "fluid",
      description: "Real-time fluid dynamics running in browser"
    }
  },
  { 
    id: 8, 
    year: "2020", 
    title: "Indie Film Score", 
    category: "Music", 
    link: "spotify.com", 
    client: "A24",
    media: {
      type: "audio",
      src: "score",
      description: "Main Theme (Orchestral Hybrid)"
    }
  },
  { 
    id: 9, 
    year: "2019", 
    title: "React Native Boilerplate", 
    category: "Development", 
    link: "github.com", 
    client: "Open Source" 
  },
  { 
    id: 10, 
    year: "2019", 
    title: "Analog Synth Restoration", 
    category: "Engineering", 
    link: null, 
    client: "Private Client",
    media: {
      type: "image",
      src: "Synth Repair",
      description: "Restored circuit boards for a Jupiter-8"
    }
  },
];

// --- Components ---

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2";
  const variants = {
    primary: "bg-white text-black hover:bg-slate-200 hover:scale-105",
    outline: "border border-slate-700 text-slate-300 hover:border-white hover:text-white bg-transparent",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-100 tracking-tight">
    {children}
  </h2>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 bg-slate-800/50 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-slate-700/50">
    {children}
  </span>
);

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'text' }) => (
  <div className="bg-[#0d1117] rounded-lg border border-slate-800 overflow-hidden my-6 font-mono text-sm shadow-xl">
    <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
      </div>
      <span className="text-xs text-slate-500 uppercase">{language}</span>
    </div>
    <div className="p-4 overflow-x-auto text-slate-300 whitespace-pre">
      {code}
    </div>
  </div>
);

interface ProcessMediaProps {
  media?: Media;
  color: string;
}

const ProcessMedia: React.FC<ProcessMediaProps> = ({ media, color }) => {
  if (!media) return null;

  switch(media.type) {
    case 'code':
      return <CodeBlock code={media.content || ''} language={media.language} />;
    case 'image':
      return (
        <div className="my-6">
          <div className={`aspect-video rounded-xl bg-gradient-to-br ${color} relative overflow-hidden flex items-center justify-center border border-slate-800 group`}>
            {/* Visual Placeholder Logic */}
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] group-hover:bg-slate-950/20 transition-all"></div>
            <div className="relative z-10 flex flex-col items-center gap-3">
              <ImageIcon className="w-12 h-12 text-white/50" />
              <span className="text-white/80 font-medium tracking-wide">{media.content}</span>
            </div>
            {/* Abstract Pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
          </div>
          {media.caption && <div className="text-xs text-center text-slate-500 mt-2 font-mono">{media.caption}</div>}
        </div>
      );
    case 'quote':
      return (
        <blockquote className="my-8 border-l-4 border-indigo-500 pl-6 py-2 bg-slate-900/30 rounded-r-lg">
          <p className="text-xl text-slate-200 italic font-serif">"{media.content}"</p>
        </blockquote>
      );
    default:
      return null;
  }
};

const ArchiveMediaViewer: React.FC<{ media?: Media }> = ({ media }) => {
  if (!media) return null;

  const PlaceholderContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative group ${className}`}>
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-950 to-slate-950"></div>
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        {children}
      </div>
    </div>
  );

  if (media.type === 'image') {
    return (
      <div className="mt-4 mb-2 animate-fade-in">
        <PlaceholderContainer className="aspect-[16/9] md:aspect-[21/9]">
           <ImageIcon className="w-12 h-12 text-slate-500 mb-4" />
           <p className="text-slate-300 font-medium mb-1">Image Preview: {media.src}</p>
           <p className="text-slate-500 text-sm">{media.description}</p>
        </PlaceholderContainer>
      </div>
    );
  }

  if (media.type === 'video') {
    return (
      <div className="mt-4 mb-2 animate-fade-in">
        <PlaceholderContainer className="aspect-video">
           <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm border border-white/10">
              <PlayCircle className="w-8 h-8 text-white fill-white" />
           </div>
           <p className="text-slate-300 font-medium mb-1">Video Demo: {media.src}</p>
           <p className="text-slate-500 text-sm">{media.description}</p>
        </PlaceholderContainer>
      </div>
    );
  }

  if (media.type === 'audio') {
    return (
       <div className="mt-4 mb-2 animate-fade-in">
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
               <PlayCircle className="w-6 h-6 text-rose-400 fill-rose-400/20" />
            </div>
            <div className="flex-grow">
               <div className="h-8 w-full flex items-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-slate-700 rounded-full animate-pulse" 
                      style={{ 
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.05}s`
                      }} 
                    />
                  ))}
               </div>
            </div>
            <div className="text-right">
               <p className="text-xs text-slate-400 font-mono">00:00 / 03:42</p>
            </div>
         </div>
         <p className="text-xs text-slate-500 mt-2 ml-2">{media.description}</p>
       </div>
    );
  }
  return null;
};

// --- Views ---

const Hero: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
  <section className="min-h-[85vh] flex flex-col justify-center pt-20">
    <div className="space-y-8 max-w-4xl animate-fade-in-up">
      <div className="flex items-center gap-2 text-indigo-400 font-medium tracking-wide uppercase text-sm">
        <Cpu size={16} />
        <span>Creative Technologist</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-slate-50">
        Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">art, sound,</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">code.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
        I am Tanner Jourdian. I build startups, design systems, and Grammy-winning soundscapes. 
      </p>
      
      <div className="flex flex-wrap gap-4 pt-4">
        <Button onClick={() => onNavigate('work')}>View Case Studies</Button>
        <Button variant="outline" onClick={() => onNavigate('archive')}>View Archive</Button>
      </div>
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: Project; onClick: (p: Project) => void }> = ({ project, onClick }) => (
  <div 
    onClick={() => onClick(project)}
    className="group cursor-pointer bg-slate-900/50 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
  >
    {/* Abstract Visual Header */}
    <div className={`h-56 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
      <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"></div>
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl transform -translate-x-10 translate-y-10"></div>
      
      <div className="absolute bottom-6 left-6 p-3 bg-slate-950/30 backdrop-blur-md rounded-xl border border-white/10 text-white shadow-xl">
        {project.icon}
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">{project.category}</div>
      <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
      <p className="text-slate-400 mb-6 line-clamp-2 flex-grow">{project.summary}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0,3).map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform pt-4 border-t border-slate-800">
        Read Case Study <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  </div>
);

const Archive: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Extract unique categories, simpler for now
  const categories = ['All', 'Development', 'Design', 'Audio', 'Music', 'Creative Coding'];

  const filteredData = filter === 'All' 
    ? archiveData 
    : archiveData.filter(item => {
        if (filter === 'Audio') return item.category.includes('Audio') || item.category.includes('Music');
        return item.category.includes(filter);
      });

  const getMediaIcon = (type: Media['type']) => {
    switch(type) {
      case 'video': return <Film size={14} className="text-indigo-400" />;
      case 'audio': return <Headphones size={14} className="text-rose-400" />;
      case 'image': return <ImageIcon size={14} className="text-emerald-400" />;
      default: return null;
    }
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
         <div>
            <SectionTitle>Archive & Experiments</SectionTitle>
            <p className="text-slate-400 max-w-xl -mt-8">
              A collection of smaller projects, open source contributions, experiments, and things that don't quite fit into a case study. Click on items with media icons to view them.
            </p>
         </div>
         
         {/* Filter Tabs */}
         <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-white text-black' 
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
         </div>
       </div>

       {/* Archive Table */}
       <div className="w-full">
         {/* Table Header - Hidden on small mobile */}
         <div className="hidden md:grid grid-cols-12 gap-4 border-b border-slate-800 pb-4 text-xs font-bold uppercase tracking-widest text-slate-500 px-4">
           <div className="col-span-1">Year</div>
           <div className="col-span-4">Project</div>
           <div className="col-span-3">Client / Context</div>
           <div className="col-span-3">Category</div>
           <div className="col-span-1 text-right">Link</div>
         </div>

         {/* Table Rows */}
         <div className="space-y-2">
           {filteredData.map((item) => {
             const isExpanded = expandedId === item.id;
             const hasMedia = !!item.media;

             return (
               <div 
                 key={item.id} 
                 className={`group rounded-xl transition-all duration-300 border ${
                   isExpanded 
                     ? 'bg-slate-900 border-slate-700' 
                     : 'hover:bg-slate-900/30 border-transparent hover:border-slate-800'
                 }`}
               >
                 <div 
                    onClick={() => hasMedia && toggleExpand(item.id)}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center py-4 px-4 cursor-pointer ${!hasMedia ? 'cursor-default' : ''}`}
                 >
                   <div className="col-span-1 text-sm text-slate-500 font-mono">{item.year}</div>
                   
                   <div className="col-span-12 md:col-span-4 flex items-center gap-3">
                     <span className={`font-bold transition-colors text-lg md:text-base ${isExpanded ? 'text-indigo-400' : 'text-slate-200 group-hover:text-white'}`}>
                        {item.title}
                     </span>
                     {hasMedia && item.media && (
                       <span className="p-1 rounded-full bg-slate-800 border border-slate-700 opacity-60 group-hover:opacity-100 transition-opacity">
                         {getMediaIcon(item.media.type)}
                       </span>
                     )}
                   </div>

                   <div className="col-span-6 md:col-span-3 text-sm text-slate-400 flex items-center gap-2">
                      <span className="md:hidden text-xs uppercase text-slate-600 font-bold">Client:</span>
                      {item.client}
                   </div>
                   
                   <div className="col-span-6 md:col-span-3 flex md:block justify-end">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                       {item.category}
                     </span>
                   </div>
                   
                   <div className="col-span-12 md:col-span-1 flex justify-end items-center gap-4">
                     {item.link ? (
                       <a 
                         href={`https://${item.link}`} 
                         target="_blank" 
                         rel="noreferrer"
                         onClick={(e) => e.stopPropagation()}
                         className="text-slate-500 hover:text-white transition-colors"
                       >
                         <ArrowUpRight size={18} />
                       </a>
                     ) : (
                       <span className="text-slate-700 select-none">-</span>
                     )}
                     {hasMedia && (
                        <div className="md:hidden text-slate-500">
                           {isExpanded ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                        </div>
                     )}
                   </div>
                 </div>
                 
                 {/* Expandable Media Section */}
                 {isExpanded && hasMedia && (
                   <div className="px-4 pb-4 md:px-16">
                      <div className="pt-2 border-t border-slate-800/50">
                        <ArchiveMediaViewer media={item.media} />
                      </div>
                   </div>
                 )}
               </div>
             );
           })}
         </div>
       </div>
    </div>
  );
};

// ... CaseStudy, About, Footer components (unchanged) ...
const CaseStudy: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => (
  <div className="animate-fade-in pt-24 pb-20">
    <button 
      onClick={onBack}
      className="group flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
    >
      <ChevronLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
      Back to Projects
    </button>

    {/* Hero Header */}
    <div className={`w-full min-h-[50vh] rounded-3xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-16 flex flex-col justify-end`}>
      <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-20 animate-pulse">
         {project.icon}
      </div>

      <div className="relative z-10 p-8 md:p-16 max-w-5xl">
         <div className="flex items-center gap-3 mb-6">
            <span className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white border border-white/20 shadow-lg">
              {project.icon}
            </span>
            <span className="text-white/90 font-bold tracking-widest uppercase text-sm">{project.category}</span>
         </div>
         <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">{project.title}</h1>
         <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed mb-8">
           {project.summary}
         </p>
         
         <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-black/40 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
         </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      
      {/* Left Column: Main Content */}
      <div className="lg:col-span-8 space-y-20">
        
        {/* At a Glance Stats */}
        <div className="grid grid-cols-3 gap-4 border-y border-slate-800 py-8">
          {project.stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Context & Challenge */}
        <section className="space-y-12">
           <div>
            <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Layout size={16} /> Context
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">{project.context}</p>
           </div>
           <div>
            <h3 className="text-sm font-bold text-rose-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap size={16} /> The Challenge
            </h3>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-light pl-6 border-l-2 border-rose-500/50">
              {project.challenge}
            </p>
           </div>
        </section>

        {/* Detailed Process */}
        <section>
          <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-12 flex items-center gap-2">
             <Layers size={16} /> The Process
          </h3>
          
          <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-16">
            {project.process.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-colors"></div>
                
                {/* Step Header */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1 block">{step.phase}</span>
                  <h4 className="text-2xl font-bold text-white">{step.title}</h4>
                </div>

                {/* Step Description */}
                <div className="text-slate-400 leading-relaxed text-lg mb-6">
                  {step.description}
                </div>

                {/* Rich Media Container */}
                <ProcessMedia media={step.media} color={project.color} />
              </div>
            ))}
          </div>
        </section>

        {/* The Solution */}
        <section className="bg-slate-900/30 p-8 md:p-12 rounded-3xl border border-slate-800/50">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <CheckCircle size={16} /> The Solution
          </h3>
          <p className="text-lg text-slate-300 leading-loose">
            {project.solution}
          </p>
        </section>

        {/* Testimonial */}
        <section className="relative py-8">
          <Quote className="absolute top-0 left-0 text-slate-800 w-24 h-24 -translate-x-8 -translate-y-8 opacity-50" />
          <blockquote className="relative z-10 text-center md:text-left">
            <p className="text-3xl text-slate-200 italic mb-6 font-light leading-snug">"{project.testimonial.text}"</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500 text-xs">IMG</div>
               <cite className="text-slate-400 font-bold not-italic block">
                 {project.testimonial.author}
               </cite>
            </div>
          </blockquote>
        </section>

      </div>

      {/* Right Column: Sidebar */}
      <div className="lg:col-span-4 space-y-8">
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 sticky top-32 backdrop-blur-sm">
          <h4 className="text-white font-bold mb-6 text-lg">Project Details</h4>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1 border-b border-slate-800 pb-4">
              <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold flex items-center gap-2">
                <Users size={14} /> Client
              </span>
              <span className="text-slate-200 font-medium">{project.client}</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-slate-800 pb-4">
              <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold flex items-center gap-2">
                <Cpu size={14} /> Role
              </span>
              <span className="text-slate-200 font-medium">{project.role}</span>
            </li>
            <li className="flex flex-col gap-1 border-b border-slate-800 pb-4">
              <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold flex items-center gap-2">
                <Calendar size={14} /> Timeline
              </span>
              <span className="text-slate-200 font-medium">{project.timeline}</span>
            </li>
             <li className="flex flex-col gap-1 pb-2">
              <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold flex items-center gap-2 mb-2">
                <Code size={14} /> Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          </ul>
          
          <div className="mt-10 pt-6 border-t border-slate-800">
            <Button variant="primary" className="w-full justify-center">
              Visit Live Site <ExternalLink size={16} />
            </Button>
          </div>
        </div>
      </div>

    </div>
  </div>
);

const About: React.FC = () => (
  <div className="pt-24 pb-20 animate-fade-in">
    <SectionTitle>About Tanner</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
        <p>
          I exist at the intersection of creativity and logic. With a background that spans Grammy-award winning music production, venture-backed startups, and complex UI/UX architecture, I don't just build products; I craft experiences.
        </p>
        <p>
          My philosophy is simple: technology should feel like magic. Whether I'm designing a design system for a fintech unicorn or mixing spatial audio, the goal is always clarity, emotion, and impact.
        </p>
        <p>
          I am currently available for select consulting roles and leadership opportunities.
        </p>
        
        <div className="pt-6 grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-bold mb-2">Capabilities</h4>
            <ul className="text-sm space-y-1">
              <li>Creative Direction</li>
              <li>UI/UX Design</li>
              <li>Frontend Development</li>
              <li>Audio Engineering</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Recognition</h4>
            <ul className="text-sm space-y-1">
              <li>Grammy Award Winner</li>
              <li>TechCrunch Disrupt Finalist</li>
              <li>Awwwards Site of the Day</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="aspect-square rounded-full bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center relative overflow-hidden shadow-2xl">
          {/* Abstract geometric background representation of user */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-slate-700 rounded-full flex items-center justify-center">
             <div className="w-3/4 h-3/4 border border-slate-600 rounded-full flex items-center justify-center">
                <span className="text-9xl font-bold text-slate-800 select-none">TJ</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-slate-900 mt-20 text-center md:text-left">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div>
        <h4 className="text-xl font-bold text-white mb-2">Tanner Jourdian</h4>
        <p className="text-slate-500 text-sm">© 2024 All Rights Reserved.</p>
      </div>
      <div className="text-center">
        <div className="text-slate-400 mb-2">Connect</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-white hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href="#" className="text-white hover:text-indigo-400 transition-colors">Twitter</a>
          <a href="#" className="text-white hover:text-indigo-400 transition-colors">Email</a>
        </div>
      </div>
      <div className="md:text-right">
        <p className="text-slate-500 text-sm">Designed & Built by Tanner Jourdian</p>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [view, setView] = useState('home'); // home, work, archive, about
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (target: string) => {
    setView(target);
    setSelectedProject(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'archive', label: 'Archive' },
    { id: 'about', label: 'About' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            onClick={() => handleNav('home')}
            className="text-xl font-bold tracking-tighter cursor-pointer hover:opacity-80 transition-opacity"
          >
            TANNER JOURDIAN<span className="text-indigo-500">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-sm font-medium transition-colors ${view === item.id && !selectedProject ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="primary" className="px-5 py-2 text-sm" onClick={() => window.open('mailto:hello@example.com')}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-3xl font-bold text-white"
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => window.open('mailto:hello@example.com')}>Let's Talk</Button>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-20">
        
        {/* Case Study View */}
        {selectedProject ? (
          <CaseStudy project={selectedProject} onBack={() => setSelectedProject(null)} />
        ) : (
          <>
            {/* View Logic */}
            {view === 'home' && (
              <>
                <Hero onNavigate={handleNav} />
                <div id="work" className="pt-24 pb-20">
                  <SectionTitle>Selected Work</SectionTitle>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                      <ProjectCard key={project.id} project={project} onClick={openProject} />
                    ))}
                  </div>
                </div>
              </>
            )}

            {view === 'work' && (
               <div className="pt-24 pb-20 animate-fade-in">
                 <SectionTitle>Case Studies</SectionTitle>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                      <ProjectCard key={project.id} project={project} onClick={openProject} />
                    ))}
                  </div>
               </div>
            )}
            
            {view === 'archive' && <Archive />}

            {view === 'about' && <About />}
          </>
        )}
      </main>

      {/* Footer is only shown on main views, typically */}
      {!selectedProject && <div className="container mx-auto px-6"><Footer /></div>}

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;